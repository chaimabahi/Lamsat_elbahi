import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

const CATEGORY_LABEL = {
  plates: 'Assiettes & Bols',
  vases: 'Vases',
  mugs: 'Mugs',
  decoration: 'Décoration',
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => { setProduct(res.data); setLoading(false); })
      .catch(() => { setLoading(false); });
  }, [id]);

  const handleAdd = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) return (
    <main className="detail-loading">
      <div className="spinner" />
    </main>
  );

  if (!product) return (
    <main className="detail-loading">
      <p>Produit non trouvé.</p>
      <Link to="/products" className="btn btn-primary" style={{ marginTop: '1rem' }}>Retour aux Produits</Link>
    </main>
  );

  return (
    <main className="detail-page">
      <div className="container detail-page__inner">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Accueil</Link>
          <span>/</span>
          <Link to="/products">Produits</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        <div className="detail-layout">
          {/* Image */}
          <div className="detail-image-wrap">
            <img src={product.image} alt={product.name} className="detail-image" />
            <span className="tag detail-tag">{CATEGORY_LABEL[product.category] || product.category}</span>
          </div>

          {/* Info */}
          <div className="detail-info">
            <h1 className="detail-name">{product.name}</h1>
            <div className="detail-price">{product.price.toLocaleString()} DT</div>
            <div className="detail-divider" />
            <p className="detail-desc">{product.description}</p>

            <div className="detail-meta">
              <div className="detail-meta-item">
                <span className="detail-meta-label">Catégorie</span>
                <span className="detail-meta-value">{CATEGORY_LABEL[product.category]}</span>
              </div>
              <div className="detail-meta-item">
                <span className="detail-meta-label">Matériau</span>
                <span className="detail-meta-value">Argile Naturelle</span>
              </div>
              <div className="detail-meta-item">
                <span className="detail-meta-label">Origine</span>
                <span className="detail-meta-value">Tunisie 🇹🇳</span>
              </div>
            </div>

            {/* Quantity */}
            <div className="detail-qty-row">
              <span className="detail-qty-label">Quantité</span>
              <div className="qty-selector">
                <button
                  className="qty-selector__btn"
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  aria-label="Diminuer la quantité"
                >−</button>
                <span className="qty-selector__val">{qty}</span>
                <button
                  className="qty-selector__btn"
                  onClick={() => setQty(q => q + 1)}
                  aria-label="Augmenter la quantité"
                >+</button>
              </div>
            </div>

            {/* Actions */}
            <div className="detail-actions">
              <button
                className={`btn btn-primary detail-add-btn ${added ? 'detail-add-btn--added' : ''}`}
                onClick={handleAdd}
              >
                {added ? '✓ Ajouté au Panier !' : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                    </svg>
                    Ajouter au Panier
                  </>
                )}
              </button>
              <Link to="/cart" className="btn btn-outline">Voir Panier</Link>
            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/213XXXXXXXXX?text=${encodeURIComponent(
                `Bonjour ! Je suis intéressé par :\n• ${product.name} x${qty} — ${(product.price * qty).toLocaleString()} DT`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp detail-wa-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Commander via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;

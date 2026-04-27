import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const categoryLabel = {
    plates: 'Assiettes & Bols',
    vases: 'Vases',
    mugs: 'Mugs',
    decoration: 'Décoration',
  };

  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-card__image-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
          loading="lazy"
        />
        <div className="product-card__overlay">
          <span>Voir Détails →</span>
        </div>
      </Link>
      <div className="product-card__body">
        <span className="tag">{categoryLabel[product.category] || product.category}</span>
        <Link to={`/products/${product.id}`}>
          <h3 className="product-card__name">{product.name}</h3>
        </Link>
        <p className="product-card__desc">{product.description.slice(0, 90)}…</p>
        <div className="product-card__footer">
          <span className="product-card__price">{product.price.toLocaleString()} DT</span>
          <button
            className="btn btn-primary product-card__btn"
            onClick={() => addToCart(product)}
            aria-label={`Ajouter ${product.name} au panier`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            Ajouter au Panier
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;

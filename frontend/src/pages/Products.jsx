import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products as allProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import './Products.css';

const Products = () => {
  const [filtered, setFiltered] = useState(allProducts);
  const loading = false;
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    if (activeCategory === 'all') {
      setFiltered(allProducts);
    } else {
      setFiltered(allProducts.filter(p => p.category === activeCategory));
    }
  }, [activeCategory]);

  const handleCategory = (cat) => {
    setSearchParams(cat === 'all' ? {} : { category: cat });
  };

  return (
    <main className="products-page">
      <div className="products-page__hero">
        <div className="container">
          <span className="label">Fait Main avec Amour</span>
          <h1>Notre Collection</h1>
          <p>Explorez notre gamme complète de pièces en céramique artisanale authentique</p>
        </div>
      </div>

      <div className="container section">
        <CategoryFilter active={activeCategory} onChange={handleCategory} />

        {loading ? (
          <div className="products-page__loading">
            <div className="spinner" />
            <p>Chargement de la collection…</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="products-page__empty">
            <span>🏺</span>
            <p>Aucun produit trouvé dans cette catégorie.</p>
          </div>
        ) : (
          <>
            <p className="products-page__count">
              {filtered.length} pièce{filtered.length !== 1 ? 's' : ''} trouvée{filtered.length !== 1 ? 's' : ''}
            </p>
            <div className="products-grid">
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Products;

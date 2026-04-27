import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products as allProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import './Products.css';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('none');
  const [filtered, setFiltered] = useState(allProducts);
  const loading = false;
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    let result = [...allProducts];

    // Filter by Category
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Filter by Search Term
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.description.toLowerCase().includes(term)
      );
    }

    // Sort by Price
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    setFiltered(result);
  }, [activeCategory, searchTerm, sortBy]);

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
        <div className="products-controls">
          <div className="products-controls__top">
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Rechercher..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar__input"
              />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-bar__icon">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
            </div>
            
            <div className="sort-box">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="none">Trier par</option>
                <option value="price-asc">Prix : Croissant</option>
                <option value="price-desc">Prix : Décroissant</option>
              </select>
            </div>
          </div>
          
          <CategoryFilter active={activeCategory} onChange={handleCategory} />
        </div>

        {loading ? (
          <div className="products-page__loading">
            <div className="spinner" />
            <p>Chargement de la collection…</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="products-page__empty">
            <p>Aucun produit ne correspond à votre recherche.</p>
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

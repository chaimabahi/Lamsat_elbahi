import './CategoryFilter.css';

const CATEGORIES = [
  { value: 'all', label: 'Tous les Produits' },
  { value: 'plates', label: '🍽 Assiettes & Bols' },
  { value: 'vases', label: '🏺 Vases' },
  { value: 'mugs', label: '☕ Mugs' },
  { value: 'decoration', label: '✨ Décoration' },
];

const CategoryFilter = ({ active, onChange }) => (
  <div className="category-filter">
    {CATEGORIES.map(cat => (
      <button
        key={cat.value}
        className={`category-filter__btn ${active === cat.value ? 'active' : ''}`}
        onClick={() => onChange(cat.value)}
      >
        {cat.label}
      </button>
    ))}
  </div>
);

export default CategoryFilter;

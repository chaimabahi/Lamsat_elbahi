import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import './Home.css';

const FEATURES = [
  { icon: '🤲', title: 'Fait Main avec Amour', desc: 'Chaque pièce est façonnée et peinte à la main, portant l\'âme de l\'artisan.' },
  { icon: '🌿', title: 'Matériaux Naturels', desc: 'Argile pure sourcée localement, cuite dans des fours traditionnels.' },
  { icon: '👨‍👩‍👧', title: 'Héritage Familial', desc: 'Trois générations d\'artisanat céramique, transmises avec fierté.' },
  { icon: '🎁', title: 'Cadeaux Uniques', desc: 'Aucune pièce n\'est identique — chacune est un trésor unique.' },
];

const Home = () => {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => {
        setFeatured(res.data.slice(0, 6));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg">
          <img
            src="/images/hero.png"
            alt="Céramique Tunisienne Moderne"
            className="hero__img"
          />
          <div className="hero__overlay" />
        </div>
        <div className="hero__content container">
          <span className="hero__label">Héritage Artisanal Authentique · Peint à la Main en Tunisie</span>
          <h1 className="hero__title">
            L'Âme de la<br />
            <em>Céramique Tunisienne</em>
          </h1>
          <p className="hero__desc">
            Découvrez les motifs vibrants et le savoir-faire intemporel de Nabeul et Djerba. Chaque pièce est peinte à la main avec des générations de passion.
          </p>
          <div className="hero__cta">
            <Link to="/products" className="btn btn-primary">Découvrir la Collection</Link>
            <Link to="/contact" className="btn btn-outline hero__btn-outline">Nous Contacter</Link>
          </div>
        </div>
        <div className="hero__scroll">
          <span>Défiler pour explorer</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* Brand Story */}
      <section className="section brand">
        <div className="container brand__inner">
          <div className="brand__image-wrap">
            <img
              src="/images/artisan.jfif"
              alt="Artisan travaillant la céramique"
            />
            <div className="brand__overlay" />
            <div className="brand__badge">
              <span className="brand__badge-num">40+</span>
              <span className="brand__badge-txt">Années d'artisanat</span>
            </div>
          </div>
          <div className="brand__text">
            <span className="label">Notre Histoire</span>
            <div className="divider" style={{ margin: '0.75rem 0' }} />
            <h2>Une Passion Familiale<br />Née de l'Argile</h2>
            <p>
              Lamsat Elbahi — signifiant "la touche belle" — a été fondée par notre père en 1985 au cœur de Nabeul, en Tunisie. Ce qui a commencé comme un petit atelier est devenu une marque familiale chérie, où chaque pièce est toujours façonnée et peinte à la main.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Nous croyons que les céramiques sont plus que des objets — ce sont des souvenirs, de la chaleur et de l'art que vous pouvez tenir. Chaque article raconte une histoire de patience, de tradition et d'artisanat authentique.
            </p>
            <Link to="/products" className="btn btn-primary" style={{ marginTop: '2rem' }}>
              Explorer les Produits
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section features" style={{ background: 'var(--color-accent-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="label">Pourquoi Nous Choisir</span>
            <div className="divider" />
            <h2>Un Savoir-Faire Différent</h2>
          </div>
          <div className="features__grid">
            {FEATURES.map(f => (
              <div key={f.title} className="feature-card">
                <div className="feature-card__icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="label">Notre Collection</span>
            <div className="divider" />
            <h2>Pièces Vedettes</h2>
            <p>Une sélection de nos pièces préférées — chacune prête à embellir votre intérieur.</p>
          </div>
          {loading ? (
            <div className="home__loading">Chargement de la collection…</div>
          ) : (
            <div className="products-grid">
              {featured.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/products" className="btn btn-outline">Voir Tous les Produits</Link>
          </div>
        </div>
      </section>

      {/* WhatsApp Banner */}
      <section className="whatsapp-banner">
        <div className="container whatsapp-banner__inner">
          <div className="whatsapp-banner__text">
            <h2>Commandez Directement via WhatsApp</h2>
            <p>Ajoutez vos favoris au panier et envoyez votre commande en quelques secondes. Nous confirmons et livrons chez vous !</p>
          </div>
          <a
            href="https://wa.me/213XXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Discuter sur WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;

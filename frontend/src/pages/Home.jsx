import { Link } from 'react-router-dom';
import { products as allProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Icons = {
  Hand: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(1px 1px 0px rgba(0,0,0,0.1))' }}>
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  ),
  Pot: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3c.5 0 2 .5 2 1v2c0 4-2 7-2 11 0 3 3 4 6 4s6-1 6-4c0-4-2-7-2-11V4c0-.5 1.5-1 2-1" />
      <path d="M8 6h8" />
      <path d="M10 20c0-1 1-2 2-2s2 1 2 2" />
    </svg>
  ),
  Brush: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m11.66 16.44 3.22 3.22a2.1 2.1 0 0 0 2.97-2.97l-3.22-3.22" />
      <path d="M18 20l3 2" />
      <path d="M5 3c-1.1 0-2 .9-2 2s.9 2 2 2c2.2 0 4.1 1.5 4.8 3.6l1.2 3.6c.7 2.1 2.6 3.6 4.8 3.6 1.1 0 2-.9 2-2s-.9-2-2-2c-2.2 0-4.1-1.5-4.8-3.6L10.8 6.4C10.1 4.3 8.2 3 6 3H5Z" />
    </svg>
  ),
  Box: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
};

const FEATURES = [
  { icon: <Icons.Hand />, title: 'Artisanat Authentique', desc: 'Chaque pièce est une œuvre unique, façonnée à la main selon des techniques ancestrales transmises depuis des générations.' },
  { icon: <Icons.Pot />, title: 'Argile de Nabeul', desc: 'Nous utilisons exclusivement l\'argile pure de Nabeul, réputée pour sa finesse et sa durabilité exceptionnelle.' },
  { icon: <Icons.Brush />, title: 'Peint à la Main', desc: 'Nos motifs sont dessinés au pinceau avec une précision méticuleuse, utilisant des pigments naturels et durables.' },
  { icon: <Icons.Box />, title: 'Emballage Sécurisé', desc: 'Vos trésors sont emballés avec le plus grand soin pour garantir une arrivée parfaite chez vous, partout en Tunisie.' },
];

const Home = () => {
  const featured = allProducts.slice(0, 6);
  const loading = false;

  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg">
          <img
            src="/images/hero.png"
            alt="Ceramics background"
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
          <div className="hero__contact-info">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>+216 97 159 838</span>
          </div>
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
            <div className="home__loading">Chargement de la collection...</div>
          ) : (
            <div className="products-grid">
              {featured.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/products" className="btn btn-outline">Voir toute la Boutique</Link>
          </div>
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

      {/* WhatsApp Banner */}
      <section className="whatsapp-banner">
        <div className="container">
          <div className="whatsapp-banner__content">
            <h2>Prêt à Commander ?</h2>
            <p>Envoyez votre commande via WhatsApp en un clic.</p>
            <a
              href="https://wa.me/21650509129"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Commander sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

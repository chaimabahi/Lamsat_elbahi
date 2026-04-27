import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { cartCount } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <header className={`navbar ${scrolled || !isHome ? 'navbar--solid' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <img src="/images/logo.jpg" alt="Lamsat Elbahi Logo" className="navbar__logo-img" />
          <span className="navbar__logo-text">
            <span className="navbar__logo-main">Lamsat</span>
            <span className="navbar__logo-sub">Elbahi</span>
          </span>
        </Link>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <NavLink to="/" className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`} end>Accueil</NavLink>
          <NavLink to="/products" className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}>Produits</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}>Contact</NavLink>
          <Link to="/cart" className="navbar__cart-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            Panier
            {cartCount > 0 && <span className="navbar__badge">{cartCount}</span>}
          </Link>
        </nav>

        <button
          className={`navbar__hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;

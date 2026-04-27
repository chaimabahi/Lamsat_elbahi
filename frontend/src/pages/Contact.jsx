import './Contact.css';

const Contact = () => (
  <main className="contact-page">
    <div className="contact-hero">
      <div className="container">
        <span className="label">Restons en Contact</span>
        <h1>Contactez-Nous</h1>
        <p>Nous serions ravis de vous entendre — questions, commandes personnalisées ou juste un petit bonjour !</p>
      </div>
    </div>

    <div className="container contact-layout section">
      <div className="contact-info">
        <h2>Rendez-nous Visite ou Écrivez-nous</h2>
        <p>Notre atelier est ouvert 7 jours sur 7. Vous pouvez nous joindre à tout moment sur WhatsApp pour une réponse plus rapide.</p>
        <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-card__icon">📍</div>
            <div>
              <h4>Emplacement</h4>
              <p>Nabeul, Tunisie 🇹🇳</p>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card__icon">📱</div>
            <div>
              <h4>WhatsApp</h4>
              <a href="https://wa.me/21650509129" target="_blank" rel="noreferrer">+216 50 509 129</a>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card__icon">📞</div>
            <div>
              <h4>Téléphone</h4>
              <a href="tel:+21697159838">+216 97 159 838</a>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card__icon">📧</div>
            <div>
              <h4>Email</h4>
              <a href="mailto:lamsatelbahi@gmail.com">lamsatelbahi@gmail.com</a>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card__icon">🕐</div>
            <div>
              <h4>Horaires</h4>
              <p>Tous les jours · 8h – 20h</p>
            </div>
          </div>
        </div>

        <a
          href="https://wa.me/21650509129"
          target="_blank"
          rel="noreferrer"
          className="btn btn-whatsapp"
          style={{ marginTop: '2rem', display: 'inline-flex' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          Nous écrire sur WhatsApp
        </a>
      </div>

      <form className="contact-form" onSubmit={e => e.preventDefault()}>
        <h3>Envoyer un Message</h3>
        <div className="form-group">
          <label htmlFor="contact-name">Votre Nom</label>
          <input id="contact-name" type="text" placeholder="ex. Amina Benali" />
        </div>
        <div className="form-group">
          <label htmlFor="contact-phone">Téléphone / WhatsApp</label>
          <input id="contact-phone" type="tel" placeholder="+216 XX XXX XXX" />
        </div>
        <div className="form-group">
          <label htmlFor="contact-subject">Sujet</label>
          <input id="contact-subject" type="text" placeholder="ex. Demande de commande personnalisée" />
        </div>
        <div className="form-group">
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" rows="5" placeholder="Dites-nous en plus sur votre demande…" />
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
          Envoyer le Message
        </button>
      </form>
    </div>
  </main>
);

export default Contact;

import './Contact.css';

const ContactIcons = {
  Map: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  WhatsApp: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
  ),
  Phone: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Email: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Clock: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  )
};

const Contact = () => (
  <main className="contact-page">
    <div className="contact-hero">
      <div className="container">
        <div className="section-header">
          <span className="label">Restons en Contact</span>
          <div className="divider" />
          <h1>Contactez-Nous</h1>
          <p>Nous serions ravis de vous entendre — questions, commandes personnalisées ou juste un petit bonjour !</p>
        </div>
      </div>
    </div>

    <div className="container contact-layout section">
      <div className="contact-info">
        <h2>Rendez-nous Visite ou Écrivez-nous</h2>
        <p>Notre atelier est ouvert 7 jours sur 7. Vous pouvez nous joindre à tout moment sur WhatsApp pour une réponse plus rapide.</p>
        <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-card__icon"><ContactIcons.Map /></div>
            <div>
              <h4>Emplacement</h4>
              <p>Nabeul, Tunisie</p>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card__icon"><ContactIcons.WhatsApp /></div>
            <div>
              <h4>WhatsApp</h4>
              <a href="https://wa.me/21650509129" target="_blank" rel="noreferrer">+216 50 509 129</a>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card__icon"><ContactIcons.Phone /></div>
            <div>
              <h4>Téléphone</h4>
              <a href="tel:+21697159838">+216 97 159 838</a>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card__icon"><ContactIcons.Email /></div>
            <div>
              <h4>Email</h4>
              <a href="mailto:lamsatelbahi@gmail.com">lamsatelbahi@gmail.com</a>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card__icon"><ContactIcons.Clock /></div>
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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
          Nous écrire sur WhatsApp
        </a>
      </div>

      <form className="contact-form" onSubmit={e => e.preventDefault()}>
        <h3>Envoyer un Message</h3>
        <div className="form-group">
          <label htmlFor="contact-name">Votre Nom</label>
          <input id="contact-name" type="text" placeholder="Entrez votre nom" />
        </div>
        <div className="form-group">
          <label htmlFor="contact-phone">Téléphone / WhatsApp</label>
          <input id="contact-phone" type="tel" placeholder="Entrez votre numéro de téléphone" />
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

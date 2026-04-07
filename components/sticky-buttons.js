import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';

export default function StickyButtons() {
  const { t } = useApp();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactTooltip, setContactTooltip] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [formTouched, setFormTouched] = useState({ name: false, phone: false, message: false });
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handler = () => setShowContactModal(true);
    window.addEventListener('open-contact-modal', handler);
    return () => window.removeEventListener('open-contact-modal', handler);
  }, []);

  useEffect(() => {
    if (showContactModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [showContactModal]);

  useEffect(() => {
    const seen = localStorage.getItem('contact_popup_seen');
    if (!seen) {
      const t = setTimeout(() => setShowPopup(true), 2500);
      return () => clearTimeout(t);
    }
  }, []);

  const dismissPopup = () => {
    setShowPopup(false);
    localStorage.setItem('contact_popup_seen', '1');
  };

  const openContactFromPopup = () => {
    dismissPopup();
    setShowContactModal(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      setShowScrollTop(scrolled > total * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFormTouched({ ...formTouched, [e.target.name]: true });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const allTouched = { name: true, phone: true, message: true };
    setFormTouched(allTouched);
    if (!form.name || !form.phone || !form.message) return;
    const msg = `Merhaba, ben ${form.name}. Tel: ${form.phone}. ${form.message}`;
    window.open(`https://wa.me/905316562909?text=${encodeURIComponent(msg)}`, '_blank');
    setShowContactModal(false);
    setForm({ name: '', phone: '', message: '' });
    setFormTouched({ name: false, phone: false, message: false });
  };

  return (
    <>
      {/* Contact popup */}
      <div className={`contact-popup${showPopup ? ' visible' : ''}`}>
        <button className="contact-popup-close" onClick={dismissPopup}>✕</button>
        <p className="contact-popup-title">{t('popup.greeting')}</p>
        <p className="contact-popup-text">{t('popup.text')}</p>
        <button className="contact-popup-btn" onClick={openContactFromPopup}>{t('popup.cta')}</button>
      </div>

      {/* Sağ sticky butonlar */}
      <div className="sticky-right">
        <a
          className="sticky-btn sticky-whatsapp"
          href="https://wa.me/905316562909"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>

        <div
          className="sticky-btn sticky-contact"
          onMouseEnter={() => setContactTooltip(true)}
          onMouseLeave={() => setContactTooltip(false)}
          onClick={() => setShowContactModal(true)}
          aria-label="İletişim Formu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          <div className={`contact-tooltip${contactTooltip ? ' visible' : ''}`}>
            Bize yazın, size ulaşalım
          </div>
        </div>
      </div>

      {/* Sol scroll-to-top */}
      <button className={`scroll-to-top${showScrollTop ? ' visible' : ''}`} onClick={scrollToTop} aria-label="Yukarı çık">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      {/* İletişim Modal */}
      {showContactModal && (
        <div className="contact-modal-overlay" onClick={() => setShowContactModal(false)}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <button className="contact-modal-close" onClick={() => setShowContactModal(false)}>✕</button>
            <h3>{t('modal.title')}</h3>
            <p>{t('modal.subtitle')}</p>
            <form onSubmit={handleFormSubmit} noValidate>
              <input
                type="text"
                name="name"
                placeholder={t('modal.namePlaceholder')}
                value={form.name}
                onChange={handleFormChange}
                className={formTouched.name && !form.name ? 'error' : ''}
              />
              <input
                type="tel"
                name="phone"
                placeholder={t('modal.phonePlaceholder')}
                value={form.phone}
                onChange={handleFormChange}
                className={formTouched.phone && !form.phone ? 'error' : ''}
              />
              <textarea
                name="message"
                placeholder={t('modal.msgPlaceholder')}
                value={form.message}
                onChange={handleFormChange}
                rows={4}
                className={formTouched.message && !form.message ? 'error' : ''}
              />
              <button type="submit">{t('modal.submit')}</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

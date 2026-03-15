// src/components/CookieBanner.js
import { useState, useEffect } from "react";

const CONSENT_KEY = "amani_cookie_consent";

/* ─── Charge Google Analytics dynamiquement ─── */
function loadGoogleAnalytics() {
  const gaId = window.__GA_ID;
  if (!gaId || document.getElementById("ga-script")) return;

  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  script.onload = () => {
    window.gtag("js", new Date());
    window.gtag("config", gaId, { anonymize_ip: true });
  };
}

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Petit délai pour ne pas bloquer le rendu initial
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
    if (consent === "accepted") {
      loadGoogleAnalytics();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    loadGoogleAnalytics();
    setVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem(CONSENT_KEY, "refused");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Consentement aux cookies" aria-live="polite">
      <div className="cookie-banner__inner">
        {/* Icône */}
        <div className="cookie-banner__icon" aria-hidden="true">🍪</div>

        {/* Texte */}
        <div className="cookie-banner__content">
          <p className="cookie-banner__title">Nous utilisons des cookies</p>
          <p className="cookie-banner__text">
            Amani Home utilise des cookies analytiques (Google Analytics) pour améliorer votre
            expérience et mesurer la fréquentation de notre site. Les cookies essentiels sont
            toujours actifs.{" "}
            <a href="/politique-cookies" className="cookie-banner__link">
              En savoir plus
            </a>
          </p>
        </div>

        {/* Boutons */}
        <div className="cookie-banner__actions">
          <button
            className="cookie-banner__btn cookie-banner__btn--refuse"
            onClick={handleRefuse}
            type="button"
          >
            Refuser
          </button>
          <button
            className="cookie-banner__btn cookie-banner__btn--accept"
            onClick={handleAccept}
            type="button"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

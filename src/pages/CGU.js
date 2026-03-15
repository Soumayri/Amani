// src/pages/CGU.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeoHead from "../components/SeoHead";
import ScrollToTop from "../components/ScrollToTop";
import "../styles/_legal.scss";

const CGU = () => {
  return (
    <>
      <SeoHead
        titleKey="Conditions Générales d'Utilisation | Amani Home"
        descriptionKey="Conditions générales d'utilisation du site et des portails Amani Home — droits, obligations et règles d'usage."
        canonical="https://www.amani-services.com/cgu"
      />
      <ScrollToTop />
      <Navbar />

      <main className="legal-page">
        <div className="legal-page__inner">
          <p className="legal-page__eyebrow">Utilisation du site</p>
          <h1 className="legal-page__title">Conditions Générales d'Utilisation</h1>
          <p className="legal-page__date">Dernière mise à jour : mars 2025</p>

          {/* 1. Objet */}
          <section className="legal-page__section">
            <h2>1. Objet</h2>
            <p>
              Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités
              d'accès et d'utilisation du site web <strong>www.amani-services.com</strong> et de ses espaces
              connectés (Portail Client, Portail Opérateur), édité par Amani Home SARLU.
            </p>
            <p>
              L'accès au site implique l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez
              pas ces conditions, veuillez ne pas utiliser ce site.
            </p>
          </section>

          {/* 2. Accès */}
          <section className="legal-page__section">
            <h2>2. Accès au site</h2>
            <p>
              Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet.
              Amani Home SARLU se réserve le droit de suspendre, interrompre ou limiter l'accès au site à tout
              moment, notamment pour des raisons de maintenance, de sécurité ou d'évolution technique, sans
              préavis ni indemnisation.
            </p>
          </section>

          {/* 3. Portail client et opérateur */}
          <section className="legal-page__section">
            <h2>3. Espaces connectés (Portail Client & Portail Opérateur)</h2>
            <p>
              L'accès au Portail Client et au Portail Opérateur est réservé aux personnes disposant d'identifiants
              valides fournis par Amani Home SARLU dans le cadre d'un abonnement actif ou d'un contrat de
              prestation.
            </p>
            <p>L'utilisateur s'engage à :</p>
            <ul>
              <li>Ne pas partager ses identifiants de connexion avec des tiers</li>
              <li>Utiliser les espaces connectés uniquement aux fins prévues par le contrat</li>
              <li>Signaler immédiatement toute utilisation non autorisée de son compte</li>
              <li>Ne pas tenter de contourner les mesures de sécurité du site</li>
            </ul>
          </section>

          {/* 4. Comportement de l'utilisateur */}
          <section className="legal-page__section">
            <h2>4. Comportement de l'utilisateur</h2>
            <p>L'utilisateur s'engage à utiliser le site de manière licite et à ne pas :</p>
            <ul>
              <li>
                Publier, transmettre ou diffuser tout contenu illégal, diffamatoire, obscène ou portant atteinte
                aux droits de tiers
              </li>
              <li>
                Utiliser le site à des fins commerciales non autorisées ou pour extraire des données de manière
                automatisée (scraping)
              </li>
              <li>Tenter d'accéder aux systèmes informatiques d'Amani Home SARLU de manière non autorisée</li>
              <li>Perturber le bon fonctionnement du site ou de ses services</li>
            </ul>
          </section>

          {/* 5. Propriété intellectuelle */}
          <section className="legal-page__section">
            <h2>5. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu du site (textes, images, logos, icônes, code source) est la propriété
              d'Amani Home SARLU ou de ses partenaires et est protégé par les droits de propriété intellectuelle.
              Toute reproduction ou utilisation sans autorisation écrite préalable est strictement interdite.
            </p>
          </section>

          {/* 6. Données personnelles */}
          <section className="legal-page__section">
            <h2>6. Données personnelles</h2>
            <p>
              La collecte et le traitement de vos données personnelles sont régis par notre{" "}
              <a href="/privacy">Politique de Confidentialité</a>, accessible depuis ce site.
            </p>
          </section>

          {/* 7. Cookies */}
          <section className="legal-page__section">
            <h2>7. Cookies</h2>
            <p>
              Le site utilise des cookies. Pour plus d'informations, consultez notre{" "}
              <a href="/politique-cookies">Politique des Cookies</a>.
            </p>
          </section>

          {/* 8. Limitation de responsabilité */}
          <section className="legal-page__section">
            <h2>8. Limitation de responsabilité</h2>
            <p>
              Amani Home SARLU ne saurait être tenue responsable des dommages directs ou indirects résultant
              de l'utilisation ou de l'impossibilité d'utiliser le site, y compris en cas de virus ou d'attaque
              informatique. L'utilisateur est responsable de la sécurité de son propre équipement informatique.
            </p>
          </section>

          {/* 9. Modifications */}
          <section className="legal-page__section">
            <h2>9. Modifications des CGU</h2>
            <p>
              Amani Home SARLU se réserve le droit de modifier les présentes CGU à tout moment. Les modifications
              entrent en vigueur dès leur publication sur le site. L'utilisation continue du site après publication
              des modifications vaut acceptation des nouvelles CGU.
            </p>
          </section>

          {/* 10. Droit applicable */}
          <section className="legal-page__section">
            <h2>10. Droit applicable</h2>
            <p>
              Les présentes CGU sont régies par le droit marocain. Tout litige sera soumis aux tribunaux
              compétents de Casablanca, sauf disposition contraire applicable aux consommateurs résidant
              dans l'Union Européenne.
            </p>
          </section>

          {/* 11. Contact */}
          <section className="legal-page__section">
            <h2>11. Contact</h2>
            <p>
              Pour toute question relative aux présentes CGU :{" "}
              <a href="mailto:contact@amani-services.com">contact@amani-services.com</a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CGU;

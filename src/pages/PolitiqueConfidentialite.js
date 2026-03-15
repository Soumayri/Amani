// src/pages/PolitiqueConfidentialite.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeoHead from "../components/SeoHead";
import ScrollToTop from "../components/ScrollToTop";
import "../styles/_legal.scss";

const PolitiqueConfidentialite = () => {
  return (
    <>
      <SeoHead
        titleKey="Politique de Confidentialité | Amani Home"
        descriptionKey="Politique de confidentialité et de protection des données personnelles d'Amani Home — conformité RGPD."
        canonical="https://www.amani-services.com/privacy"
      />
      <ScrollToTop />
      <Navbar />

      <main className="legal-page">
        <div className="legal-page__inner">
          <p className="legal-page__eyebrow">Protection des données</p>
          <h1 className="legal-page__title">Politique de Confidentialité</h1>
          <p className="legal-page__date">Dernière mise à jour : mars 2025</p>

          <div className="legal-page__highlight-box">
            <p>
              Amani Home SARLU s'engage à protéger vos données personnelles conformément au Règlement Général
              sur la Protection des Données (RGPD — UE 2016/679) et à la loi marocaine n° 09-08 relative à la
              protection des personnes physiques à l'égard du traitement des données à caractère personnel.
            </p>
          </div>

          {/* 1. Responsable du traitement */}
          <section className="legal-page__section">
            <h2>1. Responsable du traitement</h2>
            <ul>
              <li><strong>Société :</strong> Amani Home SARLU</li>
              <li><strong>Adresse :</strong> 22 Boulevard Lalla Yacout, Casablanca 20090, Maroc</li>
              <li><strong>Email :</strong> <a href="mailto:contact@amani-services.com">contact@amani-services.com</a></li>
            </ul>
          </section>

          {/* 2. Données collectées */}
          <section className="legal-page__section">
            <h2>2. Données personnelles collectées</h2>
            <p>Nous collectons les données suivantes :</p>

            <h3>Via le formulaire de contact :</h3>
            <ul>
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone (si fourni)</li>
              <li>Contenu de votre message</li>
            </ul>

            <h3>Via la navigation sur le site :</h3>
            <ul>
              <li>Adresse IP et données de connexion</li>
              <li>Pages visitées et durée de navigation</li>
              <li>Type de navigateur et système d'exploitation</li>
              <li>Données collectées via Google Analytics (avec votre consentement)</li>
            </ul>

            <h3>Dans le cadre d'un abonnement :</h3>
            <ul>
              <li>Nom, prénom et coordonnées de contact</li>
              <li>Adresse du bien immobilier confié</li>
              <li>Informations nécessaires à la réalisation des prestations contractuelles</li>
            </ul>
          </section>

          {/* 3. Finalités */}
          <section className="legal-page__section">
            <h2>3. Finalités et bases légales du traitement</h2>
            <ul>
              <li>
                <strong>Répondre à vos demandes de contact</strong> — base légale : intérêt légitime / exécution
                d'un contrat
              </li>
              <li>
                <strong>Gérer la relation client et les abonnements</strong> — base légale : exécution du contrat
              </li>
              <li>
                <strong>Améliorer notre site et nos services</strong> — base légale : intérêt légitime (sous réserve
                de votre consentement pour les cookies analytiques)
              </li>
              <li>
                <strong>Respecter nos obligations légales</strong> — base légale : obligation légale
              </li>
            </ul>
          </section>

          {/* 4. Durée de conservation */}
          <section className="legal-page__section">
            <h2>4. Durée de conservation des données</h2>
            <ul>
              <li>
                <strong>Données de contact :</strong> 3 ans à compter du dernier contact
              </li>
              <li>
                <strong>Données clients (abonnements) :</strong> 5 ans après la fin du contrat (obligations
                comptables et légales)
              </li>
              <li>
                <strong>Données de navigation (cookies analytiques) :</strong> 13 mois maximum
              </li>
            </ul>
          </section>

          {/* 5. Destinataires */}
          <section className="legal-page__section">
            <h2>5. Destinataires des données</h2>
            <p>
              Vos données sont traitées par Amani Home SARLU. Elles peuvent être transmises à des prestataires
              techniques dans le cadre strict de la réalisation de nos services (hébergement, emailing, analytics).
              Nous ne vendons ni ne louons vos données à des tiers.
            </p>
            <p>Nos sous-traitants principaux :</p>
            <ul>
              <li><strong>Vercel Inc.</strong> — hébergement du site (États-Unis, couvert par des clauses contractuelles types)</li>
              <li><strong>Google LLC</strong> — Google Analytics (avec votre consentement)</li>
            </ul>
          </section>

          {/* 6. Vos droits */}
          <section className="legal-page__section">
            <h2>6. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul>
              <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> corriger des données inexactes ou incomplètes</li>
              <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
              <li>
                <strong>Droit de retrait du consentement :</strong> retirer votre consentement à tout moment
                pour les traitements basés sur celui-ci
              </li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à :{" "}
              <a href="mailto:contact@amani-services.com">contact@amani-services.com</a>
            </p>
            <p>
              Vous pouvez également déposer une réclamation auprès de la Commission Nationale de contrôle
              de la Protection des Données à caractère Personnel (CNDP) au Maroc, ou de la CNIL si vous
              résidez en France.
            </p>
          </section>

          {/* 7. Cookies */}
          <section className="legal-page__section">
            <h2>7. Cookies</h2>
            <p>
              Notre site utilise des cookies. Pour plus d'informations sur les cookies utilisés et la manière
              de gérer vos préférences, veuillez consulter notre{" "}
              <a href="/politique-cookies">Politique des Cookies</a>.
            </p>
          </section>

          {/* 8. Sécurité */}
          <section className="legal-page__section">
            <h2>8. Sécurité des données</h2>
            <p>
              Amani Home SARLU met en œuvre des mesures techniques et organisationnelles appropriées pour
              protéger vos données contre tout accès non autorisé, perte, destruction ou divulgation. Le site
              est accessible en HTTPS et hébergé sur une infrastructure sécurisée (Vercel).
            </p>
          </section>

          {/* 9. Modifications */}
          <section className="legal-page__section">
            <h2>9. Modifications de la politique</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique à tout moment. La date de dernière mise
              à jour est indiquée en haut de cette page. Nous vous encourageons à la consulter régulièrement.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PolitiqueConfidentialite;

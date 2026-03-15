// src/pages/PolitiqueCookies.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeoHead from "../components/SeoHead";
import ScrollToTop from "../components/ScrollToTop";
import "../styles/_legal.scss";

const PolitiqueCookies = () => {
  return (
    <>
      <SeoHead
        titleKey="Politique des Cookies | Amani Home"
        descriptionKey="Politique d'utilisation des cookies sur le site Amani Home — types de cookies, durée et gestion des préférences."
        canonical="https://www.amani-services.com/politique-cookies"
      />
      <ScrollToTop />
      <Navbar />

      <main className="legal-page">
        <div className="legal-page__inner">
          <p className="legal-page__eyebrow">Cookies & Traceurs</p>
          <h1 className="legal-page__title">Politique des Cookies</h1>
          <p className="legal-page__date">Dernière mise à jour : mars 2025</p>

          {/* 1. Qu'est-ce qu'un cookie */}
          <section className="legal-page__section">
            <h2>1. Qu'est-ce qu'un cookie ?</h2>
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone)
              lors de votre visite sur un site web. Il permet au site de mémoriser des informations relatives
              à votre navigation, d'améliorer votre expérience et, le cas échéant, de mesurer l'audience du site.
            </p>
            <p>
              Conformément à l'article 5(3) de la directive européenne ePrivacy et au RGPD, nous vous informons
              de l'utilisation des cookies sur notre site et recueillons votre consentement pour ceux qui le
              requièrent.
            </p>
          </section>

          {/* 2. Cookies utilisés */}
          <section className="legal-page__section">
            <h2>2. Cookies utilisés sur ce site</h2>

            <h3>Cookies strictement nécessaires</h3>
            <p>
              Ces cookies sont indispensables au fonctionnement du site. Ils ne nécessitent pas votre
              consentement et ne peuvent pas être désactivés. Ils permettent notamment la navigation sur le
              site et l'accès aux espaces sécurisés (Portail Client, Portail Opérateur).
            </p>
            <ul>
              <li><strong>Session de navigation :</strong> maintien de votre session active</li>
              <li><strong>Préférences de langue :</strong> mémorisation de la langue sélectionnée (FR/EN/ES/IT/DE)</li>
              <li><strong>Consentement cookies :</strong> mémorisation de vos choix de cookies</li>
            </ul>

            <h3>Cookies analytiques (avec votre consentement)</h3>
            <p>
              Ces cookies nous permettent d'analyser la fréquentation et l'utilisation de notre site afin de
              l'améliorer. Ils sont déposés uniquement si vous avez donné votre consentement.
            </p>
            <ul>
              <li>
                <strong>Google Analytics :</strong> mesure d'audience (pages vues, durée de visite, provenance
                des visiteurs). Les données sont anonymisées et ne permettent pas de vous identifier personnellement.
                Durée de conservation : 13 mois.
              </li>
            </ul>

            <h3>Cookies de performance Vercel</h3>
            <p>
              Amani Home utilise Vercel Analytics pour mesurer les performances techniques du site (temps de
              chargement, erreurs). Ces données sont agrégées et anonymes.
            </p>
          </section>

          {/* 3. Durée de conservation */}
          <section className="legal-page__section">
            <h2>3. Durée de conservation des cookies</h2>
            <ul>
              <li><strong>Cookies de session :</strong> supprimés à la fermeture du navigateur</li>
              <li><strong>Cookies de préférence de langue :</strong> 12 mois</li>
              <li><strong>Cookie de consentement :</strong> 12 mois</li>
              <li><strong>Google Analytics :</strong> 13 mois</li>
            </ul>
          </section>

          {/* 4. Gestion des cookies */}
          <section className="legal-page__section">
            <h2>4. Comment gérer vos préférences ?</h2>

            <h3>Via le bandeau de consentement</h3>
            <p>
              Lors de votre première visite, un bandeau vous informe de l'utilisation des cookies. Vous pouvez
              accepter ou refuser les cookies non essentiels. Vous pouvez modifier vos préférences à tout moment.
            </p>

            <h3>Via votre navigateur</h3>
            <p>
              Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies. Voici les liens
              vers les paramètres des principaux navigateurs :
            </p>
            <ul>
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer noopener">
                  Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noreferrer noopener">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer noopener">
                  Apple Safari
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge" target="_blank" rel="noreferrer noopener">
                  Microsoft Edge
                </a>
              </li>
            </ul>
            <p>
              Attention : la désactivation de certains cookies peut altérer le fonctionnement du site ou
              limiter l'accès à certaines fonctionnalités.
            </p>

            <h3>Pour Google Analytics spécifiquement</h3>
            <p>
              Vous pouvez désactiver le suivi Google Analytics en installant le module complémentaire de
              navigateur disponible sur :{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer noopener">
                tools.google.com/dlpage/gaoptout
              </a>
            </p>
          </section>

          {/* 5. Données personnelles */}
          <section className="legal-page__section">
            <h2>5. Cookies et données personnelles</h2>
            <p>
              Certains cookies peuvent collecter des données à caractère personnel. Le traitement de ces données
              est encadré par notre{" "}
              <a href="/privacy">Politique de Confidentialité</a>. Pour exercer vos droits (accès, rectification,
              suppression), contactez-nous à{" "}
              <a href="mailto:contact@amani-services.com">contact@amani-services.com</a>.
            </p>
          </section>

          {/* 6. Modifications */}
          <section className="legal-page__section">
            <h2>6. Modifications</h2>
            <p>
              Cette politique peut être mise à jour pour refléter les évolutions de notre utilisation des
              cookies ou les changements réglementaires. La date de dernière mise à jour est indiquée en haut
              de cette page.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PolitiqueCookies;

// src/pages/MentionsLegales.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeoHead from "../components/SeoHead";
import ScrollToTop from "../components/ScrollToTop";
import "../styles/_legal.scss";

const MentionsLegales = () => {
  return (
    <>
      <SeoHead
        titleKey="Mentions Légales | Amani Home"
        descriptionKey="Mentions légales d'Amani Home SARLU — informations sur l'éditeur, l'hébergeur et les responsabilités."
        canonical="https://www.amani-services.com/mentions-legales"
      />
      <ScrollToTop />
      <Navbar />

      <main className="legal-page">
        <div className="legal-page__inner">
          <p className="legal-page__eyebrow">Informations légales</p>
          <h1 className="legal-page__title">Mentions Légales</h1>
          <p className="legal-page__date">Dernière mise à jour : mars 2025</p>

          {/* 1. Éditeur */}
          <section className="legal-page__section">
            <h2>1. Éditeur du site</h2>
            <p>
              Le présent site web <strong>www.amani-services.com</strong> est édité par :
            </p>
            <ul>
              <li><strong>Raison sociale :</strong> Amani Home SARLU</li>
              <li><strong>Forme juridique :</strong> Société à Responsabilité Limitée Unipersonnelle (SARLU)</li>
              <li><strong>Siège social :</strong> 22 Boulevard Lalla Yacout, Casablanca 20090, Maroc</li>
              <li><strong>Email :</strong> <a href="mailto:contact@amani-services.com">contact@amani-services.com</a></li>
              <li><strong>Téléphone :</strong> <a href="tel:+33670779256">+33 670 779 256</a></li>
            </ul>
          </section>

          {/* 2. Directeur de publication */}
          <section className="legal-page__section">
            <h2>2. Directeur de la publication</h2>
            <p>
              Le directeur de la publication est le représentant légal de la société Amani Home SARLU.
              Pour toute question relative au contenu du site, veuillez contacter :{" "}
              <a href="mailto:contact@amani-services.com">contact@amani-services.com</a>.
            </p>
          </section>

          {/* 3. Hébergeur */}
          <section className="legal-page__section">
            <h2>3. Hébergement</h2>
            <p>Le site est hébergé par :</p>
            <ul>
              <li><strong>Société :</strong> Vercel Inc.</li>
              <li><strong>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</li>
              <li><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noreferrer noopener">vercel.com</a></li>
            </ul>
          </section>

          {/* 4. Propriété intellectuelle */}
          <section className="legal-page__section">
            <h2>4. Propriété intellectuelle</h2>
            <p>
              L'ensemble des éléments constituant ce site (textes, images, logos, graphismes, structure, code source)
              est la propriété exclusive d'Amani Home SARLU ou de ses partenaires, et est protégé par les lois
              applicables en matière de propriété intellectuelle.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des
              éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sauf autorisation
              écrite préalable d'Amani Home SARLU.
            </p>
          </section>

          {/* 5. Responsabilité */}
          <section className="legal-page__section">
            <h2>5. Limitation de responsabilité</h2>
            <p>
              Amani Home SARLU s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur
              ce site. Cependant, elle ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations
              mises à disposition. En conséquence, Amani Home SARLU décline toute responsabilité pour toute
              imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
            </p>
          </section>

          {/* 6. Liens hypertextes */}
          <section className="legal-page__section">
            <h2>6. Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens vers des sites tiers. Amani Home SARLU n'exerce aucun contrôle
              sur ces sites et décline toute responsabilité quant à leur contenu ou leur politique de confidentialité.
            </p>
          </section>

          {/* 7. Droit applicable */}
          <section className="legal-page__section">
            <h2>7. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit marocain. En cas de litige et à défaut de
              résolution amiable, les tribunaux compétents de Casablanca (Maroc) seront seuls compétents.
            </p>
          </section>

          {/* 8. Contact */}
          <section className="legal-page__section">
            <h2>8. Contact</h2>
            <p>
              Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l'adresse
              suivante : <a href="mailto:contact@amani-services.com">contact@amani-services.com</a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default MentionsLegales;

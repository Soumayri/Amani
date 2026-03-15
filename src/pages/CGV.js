// src/pages/CGV.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeoHead from "../components/SeoHead";
import ScrollToTop from "../components/ScrollToTop";
import "../styles/_legal.scss";

const CGV = () => {
  return (
    <>
      <SeoHead
        titleKey="Conditions Générales de Vente | Amani Home"
        descriptionKey="Conditions générales de vente des abonnements et services Amani Home — tarifs, paiement, résiliation et droits."
        canonical="https://www.amani-services.com/terms"
      />
      <ScrollToTop />
      <Navbar />

      <main className="legal-page">
        <div className="legal-page__inner">
          <p className="legal-page__eyebrow">Conditions commerciales</p>
          <h1 className="legal-page__title">Conditions Générales de Vente</h1>
          <p className="legal-page__date">Dernière mise à jour : mars 2025</p>

          <div className="legal-page__highlight-box">
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent toute souscription aux abonnements
              et services proposés par Amani Home SARLU. Toute commande implique l'acceptation pleine et entière
              des présentes CGV.
            </p>
          </div>

          {/* 1. Vendeur */}
          <section className="legal-page__section">
            <h2>1. Identification du vendeur</h2>
            <ul>
              <li><strong>Société :</strong> Amani Home SARLU</li>
              <li><strong>Siège social :</strong> 29 Boulevard Lalla Yacout, Casablanca 20090, Maroc</li>
              <li><strong>Email :</strong> <a href="mailto:contact@amani-services.com">contact@amani-services.com</a></li>
              <li><strong>Téléphone :</strong> <a href="tel:+33670779256">+33 670 779 256</a></li>
            </ul>
          </section>

          {/* 2. Services */}
          <section className="legal-page__section">
            <h2>2. Description des services</h2>
            <p>Amani Home SARLU propose les prestations suivantes :</p>

            <h3>Abonnements (services récurrents) :</h3>
            <ul>
              <li><strong>Silver Plan — 39€/mois :</strong> Key Holding sécurisé + 1 Home Check/mois + 2 Seasonal Care/an</li>
              <li><strong>Gold Plan — 59€/mois :</strong> Key Holding + 2 Home Checks/mois + 2 Seasonal Care/an + Welcome Home (1×/an) + priorité ProAccess</li>
              <li><strong>Platinum Plan — 99€/mois :</strong> Key Holding + 4 Home Checks/mois + 4 Seasonal Care/an + Welcome Home inclus + ProAccess prioritaire + coordination renforcée</li>
            </ul>

            <h3>Services additionnels (one-shot) :</h3>
            <ul>
              <li><strong>Welcome Home Service :</strong> préparation du logement avant votre arrivée</li>
              <li><strong>ProAccess :</strong> accès ponctuel et supervision de professionnels de confiance</li>
              <li>
                <strong>Amani Works :</strong> coordination et supervision de travaux à distance (20% du budget
                travaux HT)
              </li>
            </ul>
            <p>
              Les caractéristiques détaillées de chaque prestation sont disponibles sur la page{" "}
              <a href="/plans">Abonnements</a> du site.
            </p>
          </section>

          {/* 3. Prix */}
          <section className="legal-page__section">
            <h2>3. Tarifs</h2>
            <p>
              Les tarifs sont indiqués en euros (€) toutes taxes comprises (TTC) sur la page{" "}
              <a href="/plans">Abonnements</a>. Amani Home SARLU se réserve le droit de modifier ses tarifs à
              tout moment, avec un préavis d'un mois pour les clients existants.
            </p>
            <p>
              Les services additionnels font l'objet d'un devis ou d'un tarif fixe communiqué avant toute
              réalisation de la prestation.
            </p>
          </section>

          {/* 4. Commande & contrat */}
          <section className="legal-page__section">
            <h2>4. Processus de souscription</h2>
            <ol>
              <li>Prise de contact via le formulaire ou WhatsApp</li>
              <li>Échange avec l'équipe Amani pour définir vos besoins</li>
              <li>Choix du plan et signature du contrat d'abonnement</li>
              <li>Remise des clés et démarrage de la prestation</li>
            </ol>
            <p>
              La souscription est formalisée par la signature d'un contrat d'abonnement. Toute commande est
              considérée définitive après confirmation écrite par Amani Home SARLU.
            </p>
          </section>

          {/* 5. Paiement */}
          <section className="legal-page__section">
            <h2>5. Conditions de paiement</h2>
            <p>
              Les abonnements sont facturés mensuellement ou annuellement selon le choix du client, par
              prélèvement bancaire, virement ou tout autre moyen convenu lors de la signature du contrat.
              Le paiement est dû à réception de facture.
            </p>
            <p>
              En cas de retard de paiement, Amani Home SARLU se réserve le droit de suspendre les prestations
              et d'appliquer des pénalités conformément à la législation applicable.
            </p>
          </section>

          {/* 6. Droit de rétractation */}
          <section className="legal-page__section">
            <h2>6. Droit de rétractation</h2>
            <p>
              Conformément à la directive européenne 2011/83/UE, les clients résidant dans l'Union Européenne
              bénéficient d'un droit de rétractation de <strong>14 jours calendaires</strong> à compter de la
              signature du contrat, sans avoir à justifier de motifs ni à payer de pénalités.
            </p>
            <p>
              Pour exercer ce droit, contactez-nous par email à{" "}
              <a href="mailto:contact@amani-services.com">contact@amani-services.com</a> dans le délai imparti.
            </p>
            <p>
              Ce droit de rétractation ne s'applique pas si la prestation a commencé, avec votre accord
              exprès, avant l'expiration du délai de 14 jours.
            </p>
          </section>

          {/* 7. Résiliation */}
          <section className="legal-page__section">
            <h2>7. Résiliation</h2>
            <p>
              L'abonnement est conclu pour une durée minimale d'un mois, renouvelable tacitement. Le client
              peut résilier son abonnement à tout moment avec un préavis de <strong>30 jours</strong> par email
              à <a href="mailto:contact@amani-services.com">contact@amani-services.com</a>.
            </p>
            <p>
              Amani Home SARLU se réserve le droit de résilier l'abonnement en cas de manquement grave du
              client à ses obligations contractuelles, notamment le non-paiement.
            </p>
          </section>

          {/* 8. Responsabilité */}
          <section className="legal-page__section">
            <h2>8. Responsabilité et obligations d'Amani</h2>
            <p>
              Amani Home SARLU s'engage à exécuter les prestations avec soin, diligence et professionnalisme.
              Sa responsabilité est limitée aux dommages directs causés par sa faute prouvée et ne saurait
              dépasser le montant des sommes versées par le client au cours des 12 derniers mois.
            </p>
            <p>
              Amani Home SARLU ne saurait être tenue responsable des dommages causés par un cas de force
              majeure, ni des dommages indirects ou immatériels.
            </p>
          </section>

          {/* 9. Propriété des données */}
          <section className="legal-page__section">
            <h2>9. Confidentialité</h2>
            <p>
              Amani Home SARLU s'engage à traiter les informations relatives au bien immobilier et au client
              avec la plus stricte confidentialité. Les données ne sont pas communiquées à des tiers sauf
              nécessité d'exécution du contrat ou obligation légale.
            </p>
          </section>

          {/* 10. Droit applicable */}
          <section className="legal-page__section">
            <h2>10. Droit applicable et litiges</h2>
            <p>
              Les présentes CGV sont soumises au droit marocain. En cas de litige, les parties s'engagent à
              rechercher une solution amiable. À défaut, les tribunaux de Casablanca seront seuls compétents.
            </p>
            <p>
              Pour les clients résidant dans l'Union Européenne, vous pouvez également recourir à la plateforme
              de règlement en ligne des litiges de la Commission Européenne :{" "}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer noopener">
                ec.europa.eu/consumers/odr
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CGV;

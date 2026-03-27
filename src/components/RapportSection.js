// src/components/RapportSection.js
import React from "react";

const checklist = [
  { label: "Accès & serrure", ok: true },
  { label: "Boîte aux lettres", ok: true },
  { label: "Aération", ok: true },
  { label: "Murs & plafonds", ok: false },
  { label: "Plomberie / Éviers", ok: false },
  { label: "Électricité", ok: true },
  { label: "Nuisibles", ok: true },
  { label: "Fermeture complète", ok: true },
];

export default function RapportSection() {
  return (
    <section className="rapport-section" id="rapport-digital">
      <div className="rapport-section__inner">

        {/* Colonne gauche — texte */}
        <div className="rapport-section__text">
          <span className="rapport-section__eyebrow">Rapport digital Amani</span>
          <h2 className="rapport-section__title">
            Vous savez ce qui se passe chez vous.
            <br />En temps réel.
          </h2>
          <p className="rapport-section__desc">
            Après chaque visite, votre agent envoie un rapport complet directement
            sur votre téléphone — photos, statut point par point, alertes si nécessaire.
            Vous n'avez pas à demander. C'est automatique.
          </p>

          <ul className="rapport-section__features">
            <li>
              <span className="rapport-section__feature-dot" />
              <span><strong>Envoyé dans la minute</strong> qui suit la fin de la visite</span>
            </li>
            <li>
              <span className="rapport-section__feature-dot" />
              <span>Photos de chaque pièce, compteurs et anomalies détectées</span>
            </li>
            <li>
              <span className="rapport-section__feature-dot" />
              <span><strong>Alerte urgente</strong> signalée immédiatement avec recommandation</span>
            </li>
            <li>
              <span className="rapport-section__feature-dot" />
              <span>Historique complet de toutes vos visites dans l'espace client</span>
            </li>
          </ul>

          <div className="rapport-section__live-badge">
            <span className="rapport-section__live-dot" />
            Envoi automatique après chaque visite · Inclus dans tous les abonnements
          </div>
        </div>

        {/* Colonne droite — preview rapport */}
        <div className="rapport-section__preview">
          <div className="rapport-card">

            <div className="rapport-card__header">
              <span className="rapport-card__brand">Amani Home · Rapport de visite</span>
              <span className="rapport-card__tier">✦ Silver</span>
            </div>

            <div className="rapport-card__client">
              <div className="rapport-card__name">EL HACHIMI Soumayri</div>
              <div className="rapport-card__meta">CL012 · Casablanca – Oulfa</div>
            </div>

            <div className="rapport-card__stats">
              <div className="rapport-card__stat">
                <span className="rapport-card__stat-val">17/03</span>
                <span className="rapport-card__stat-label">Date</span>
              </div>
              <div className="rapport-card__stat">
                <span className="rapport-card__stat-val">23h40</span>
                <span className="rapport-card__stat-label">Arrivée</span>
              </div>
              <div className="rapport-card__stat">
                <span className="rapport-card__stat-val">36 min</span>
                <span className="rapport-card__stat-label">Durée</span>
              </div>
              <div className="rapport-card__stat">
                <span className="rapport-card__stat-val">Aymen</span>
                <span className="rapport-card__stat-label">Agent</span>
              </div>
            </div>

            <div className="rapport-card__alert">
              <span className="rapport-card__alert-dot" />
              <span>Intervention urgente requise</span>
            </div>

            <div className="rapport-card__checklist">
              {checklist.map(({ label, ok }) => (
                <div key={label} className="rapport-card__check">
                  <span className="rapport-card__check-label">{label}</span>
                  <span className={`rapport-card__check-badge ${ok ? "ok" : "warn"}`}>
                    {ok ? "✓ OK" : "! Anomalie"}
                  </span>
                </div>
              ))}
            </div>

            <div className="rapport-card__rec">
              <div className="rapport-card__rec-title">Recommandation · Plomberie</div>
              <div className="rapport-card__rec-text">
                Infiltration d'eau détectée sur le mur du salon et la chambre à coucher.
                Intervention recommandée sous 48h.
              </div>
            </div>

            <div className="rapport-card__footer">
              <span>RPT-20260317-2241</span>
              <span>Envoyé à 00h18</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

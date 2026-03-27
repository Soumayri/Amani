// src/components/RapportSection.js
import React from "react";
import { useTranslation } from "react-i18next";

export default function RapportSection() {
  const { t } = useTranslation();

  const checklist = [
    { label: t("Access & lock"), ok: true },
    { label: t("Mailbox"), ok: true },
    { label: t("Ventilation"), ok: true },
    { label: t("Walls & ceilings"), ok: false },
    { label: t("Plumbing / Sinks"), ok: false },
    { label: t("Electricity"), ok: true },
    { label: t("Pests"), ok: true },
    { label: t("Full lock-up"), ok: true },
  ];

  return (
    <section className="rapport-section" id="rapport-digital">
      <div className="rapport-section__inner">

        {/* Colonne gauche — texte */}
        <div className="rapport-section__text">
          <span className="rapport-section__eyebrow">{t("Amani Digital Report")}</span>
          <h2 className="rapport-section__title">
            {t("You know what's happening at your home.")}
            <br />{t("In real time.")}
          </h2>
          <p className="rapport-section__desc">
            {t("After each visit, your agent sends a complete report directly to your phone — photos, point-by-point status, alerts if needed. You don't have to ask. It's automatic.")}
          </p>

          <ul className="rapport-section__features">
            <li>
              <span className="rapport-section__feature-dot" />
              <span><strong>{t("Sent within the minute")}</strong>{t(" following the end of the visit")}</span>
            </li>
            <li>
              <span className="rapport-section__feature-dot" />
              <span>{t("Photos of every room, meters and detected anomalies")}</span>
            </li>
            <li>
              <span className="rapport-section__feature-dot" />
              <span><strong>{t("Urgent alert")}</strong>{t(" reported immediately with a recommendation")}</span>
            </li>
            <li>
              <span className="rapport-section__feature-dot" />
              <span>{t("Full history of all your visits in the client area")}</span>
            </li>
          </ul>

          <div className="rapport-section__live-badge">
            <span className="rapport-section__live-dot" />
            {t("Automatic delivery after each visit · Included in all memberships")}
          </div>
        </div>

        {/* Colonne droite — preview rapport */}
        <div className="rapport-section__preview">
          <div className="rapport-card">

            <div className="rapport-card__header">
              <span className="rapport-card__brand">{t("Amani Home · Visit report")}</span>
              <span className="rapport-card__tier">✦ Silver</span>
            </div>

            <div className="rapport-card__client">
              <div className="rapport-card__name">EL HACHIMI Soumayri</div>
              <div className="rapport-card__meta">CL012 · Casablanca – Oulfa</div>
            </div>

            <div className="rapport-card__stats">
              <div className="rapport-card__stat">
                <span className="rapport-card__stat-val">17/03</span>
                <span className="rapport-card__stat-label">{t("Date")}</span>
              </div>
              <div className="rapport-card__stat">
                <span className="rapport-card__stat-val">23h40</span>
                <span className="rapport-card__stat-label">{t("Arrival")}</span>
              </div>
              <div className="rapport-card__stat">
                <span className="rapport-card__stat-val">36 min</span>
                <span className="rapport-card__stat-label">{t("Duration")}</span>
              </div>
              <div className="rapport-card__stat">
                <span className="rapport-card__stat-val">Aymen</span>
                <span className="rapport-card__stat-label">{t("Agent")}</span>
              </div>
            </div>

            <div className="rapport-card__alert">
              <span className="rapport-card__alert-dot" />
              <span>{t("Urgent intervention required")}</span>
            </div>

            <div className="rapport-card__checklist">
              {checklist.map(({ label, ok }) => (
                <div key={label} className="rapport-card__check">
                  <span className="rapport-card__check-label">{label}</span>
                  <span className={`rapport-card__check-badge ${ok ? "ok" : "warn"}`}>
                    {ok ? t("✓ OK") : t("! Anomaly")}
                  </span>
                </div>
              ))}
            </div>

            <div className="rapport-card__rec">
              <div className="rapport-card__rec-title">{t("Recommendation · Plumbing")}</div>
              <div className="rapport-card__rec-text">
                {t("Water infiltration detected on the living room wall and bedroom. Intervention recommended within 48 hours.")}
              </div>
            </div>

            <div className="rapport-card__footer">
              <span>RPT-20260317-2241</span>
              <span>{t("Sent at")} 00h18</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { FaSearch, FaWind, FaClipboardList, FaHome, FaExclamationTriangle } from "react-icons/fa";

const MonthlyChecks = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="service-page">
      {/* 🔹 HEADER AVEC IMAGE DE FOND UNIQUE POUR CE SERVICE */}
      <div className="service-header monthly-checks-header">
        <h1>{t("Monthly Property Checks")}</h1>
        
      </div>

      {/* 🔹 CONTENU PRINCIPAL */}
      <div className="service-content">
        <p className="service-intro">
          {t("Regular inspections to ensure your home stays safe, maintained, and problem-free while you're away.")}
        </p>
        <h2>{t("Why is this service essential?")}</h2>
        <ul className="service-benefits">
          <li>
            <FaExclamationTriangle className="benefit-icon" />
            {t("An unoccupied property can deteriorate quickly")}
            {t(" - leaks, power cuts, humidity… Our regular checks help detect issues before they become major problems.")}
          </li>
          <li>
            <FaHome className="benefit-icon" />
            {t("Frequent visits reduce the risk of squatters and burglary by maintaining an active presence.")}
          </li>
          <li>
            <FaClipboardList className="benefit-icon" />
            {t("In case of storms, heavy rains, or neighborhood incidents, we conduct an extra visit to ensure your property is intact.")}
          </li>
        </ul>

        <h2>{t("What does this service include?")}</h2>
        <ul className="service-benefits">
          <li>
            <FaSearch className="benefit-icon" />
            {t("Exterior & interior inspections – Checking doors, windows, walls, and roofing for damage.")}
          </li>
          <li>
            <FaWind className="benefit-icon" />
            {t("Ventilation & preventive maintenance – Windows opened, air refreshed, plumbing flushed to prevent odors.")}
          </li>
          <li>
            <FaClipboardList className="benefit-icon" />
            {t("Detailed report after each visit – Including photos and recommendations in case of detected issues.")}
          </li>
        </ul>

        <h3>{t("Good to know :")}</h3>
        <div className="faq-section">
          <h3>{t("📌 Frequency & flexibility?")}</h3>
          <p>{t("This service is included in our subscription plans but can also be requested on a one-time basis.")}</p>

          <h3>{t("📌 How will I be updated?")}</h3>
          <p>{t("You'll receive a full report with pictures after each visit, ensuring transparency and peace of mind.")}</p>

          <h3>{t("📌 What happens if an issue is found?")}</h3>
          <p>{t("We immediately inform you and propose a quick and suitable solution to fix the problem.")}</p>
        </div>

        {/* 🔹 BOUTONS CTA */}
        <div className="cta-section">
          <p>{t("Keep your property monitored and well-maintained, even when you're away.")}</p>
          <button className="cta-button" onClick={() => navigate("/plans")}>
            {t("Request This Service")}
          </button>
          <button className="back-button" onClick={() => navigate("/services")}>
            {t("Back to Services")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MonthlyChecks;

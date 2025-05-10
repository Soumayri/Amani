import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { FaTools, FaWater, FaBolt, FaWrench } from "react-icons/fa";
import ScrollToTop from "../../components/ScrollToTop";

const PreventiveMaintenance = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <ScrollToTop />
      <Navbar />
    <div className="service-page">
      {/* 🔹 HEADER AVEC TITRE & SOUS-TITRE */}
      <div className="service-header preventive-maintenance-header">
        <h1>{t("Preventive Maintenance")}</h1>
      </div>

      {/* 🔹 CONTENU DU SERVICE */}
      <div className="service-content">
        <p className="service-intro">
          {t("Ensure your home remains in top condition with regular inspections and upkeep.")}
        </p>
        <h2>{t("Why is this service essential?")}</h2>
        <ul className="service-benefits">
          <li>
            <FaTools className="benefit-icon" /> {t("Protect your investment – Regular maintenance prevents costly damage.")}
          </li>
          <li>
            <FaWater className="benefit-icon" /> {t("Avoid unexpected failures – No more water leaks or broken AC in the summer!")}
          </li>
          <li>
            <FaBolt className="benefit-icon" /> {t("Stay comfortable – Your property is always ready for use.")}
          </li>
        </ul>

        <h2>{t("What does our preventive maintenance include?")}</h2>
        <ul className="service-benefits">
          <li>
            <FaWrench className="benefit-icon" /> {t("Inspection of installations – AC, heating, electricity, plumbing… We check it all!")}
          </li>
          <li>
            <FaWater className="benefit-icon" /> {t("Leak detection – Prevent humidity issues and water damage.")}
          </li>
          <li>
            <FaBolt className="benefit-icon" /> {t("Electrical system check – Avoid power failures and short circuits.")}
          </li>
          <li>
            <FaTools className="benefit-icon" /> {t("Minor repairs – Door adjustments, locks, shutters, and general wear & tear fixes.")}
          </li>
        </ul>

        <h3>{t("Good to know:")}</h3>
        <div className="faq-section">
          <h3>{t("📌 How often is this service provided?")}</h3>
          <p>{t("It can be included in our monthly plans with regular check-ups or requested on-demand.")}</p>

          <h3>{t("📌 What installations are covered?")}</h3>
          <p>{t("We handle standard home installations: AC, water heaters, shutters, locks, smoke detectors…")}</p>

          <h3>{t("📌 What happens if a problem is detected?")}</h3>
          <p>{t("We notify you immediately and provide a transparent quote for necessary repairs or replacements.")}</p>
        </div>

        {/* 🔹 CTA */}
        <div className="cta-section">
          <p>{t("Keep your home in perfect condition all year round!")}</p>
          <button className="cta-button" onClick={() => navigate("/plans")}>
            {t("Request This Service")}
          </button>
          <button className="back-button" onClick={() => navigate("/services")}>
            {t("Back to Services")}
          </button>
        </div>
      </div>
    </div></>
  );
};

export default PreventiveMaintenance;

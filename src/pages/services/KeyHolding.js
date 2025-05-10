import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import {
  FaKey,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaExclamationTriangle,
  FaArrowLeft
} from "react-icons/fa";
import ScrollToTop from "../../components/ScrollToTop";

const KeyHolding = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <ScrollToTop />
      <Navbar />
    <div className="service-page">
      {/* 🔹 HEADER AVEC TITRE ET SOUS-TITRE */}
      <div className="service-header key-holding-header">
        
        <h1>{t("Secure Keys Holding")}</h1>
        
        
      </div>
{/* 🔹 Image illustrative */}


      {/* 🔹 CONTENU PRINCIPAL */}
      <div className="service-content">
        <p className="service-intro">
          {t(
            "Travel worry-free! Entrust us with your property keys and maintain full control, wherever you are."
          )}
        </p>
        <h2>{t("Why is it essential?")}</h2>
        <ul className="service-benefits">
          <li>
            <FaExclamationTriangle className="benefit-icon" />
            {t("Lost your keys? Have a guest arriving? We have a solution for every situation.")}
          </li>
          <li>
            <FaUsers className="benefit-icon" />
            {t("A service provider needs access to your home? We handle the coordination.")}
          </li>
          <li>
            <FaClock className="benefit-icon" />
            {t("Unexpected return to Morocco? No need to leave your keys with neighbors or family.")}
          </li>
        </ul>

        <h2>{t("Why choose our service?")}</h2>
        <ul className="service-benefits">
          <li>
            <FaShieldAlt className="benefit-icon" />
            {t("Secure & confidential storage – Your keys are kept in a secure vault with controlled access.")}
          </li>
          <li>
            <FaKey className="benefit-icon" />
            {t("Convenient access – We only hand over keys in the city where your property is located.")}
          </li>
          <li>
            <FaClock className="benefit-icon" />
            {t("24/7 availability in case of emergency – We can dispatch an agent whenever you need.")}
          </li>
          <li>
            <FaUsers className="benefit-icon" />
            {t("Stress-free management – Always know where your keys are, with no risk of loss.")}
          </li>
        </ul>

        {/* 🔹 FAQ SECTION */}
        <h3>{t("Good to know :")}</h3>
        <div className="faq-section">
          <h3>{t("📌 Where are the keys handed over?")}</h3>
          <p>{t("We organize key handovers ONLY in the city where your property is located.")}</p>

          <h3>{t("📌 Can I store multiple keys?")}</h3>
          <p>{t("Yes! You can entrust us with multiple sets of keys (main entrance, garage, technical room, etc.).")}</p>

          <h3>{t("📌 How do I access my home while away?")}</h3>
          <p>{t("Simply contact us, and we will arrange a key handover as per your instructions.")}</p>
        </div>

        {/* 🔹 BOUTONS CTA */}
        <div className="cta-section">
          <p>{t("Secure your keys today and simplify access to your property with complete peace of mind.")}</p>
          <button className="cta-button" onClick={() => navigate("/plans")}>
            {t("Request This Service")}
          </button>

          {/* 🔙 BOUTON BACK TO SERVICES */}
          <button className="back-button" onClick={() => navigate("/services")}>
            <FaArrowLeft className="back-icon" /> {t("Back to Services")}
          </button>
        </div>
      </div>
    </div></>
  );
};

export default KeyHolding;

import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
 // Styles CSS mis à jour
import { 
  FaHome, FaCheckCircle, FaShoppingCart, 
  FaConciergeBell, FaClock, FaTools 
} from "react-icons/fa";

const WelcomeHomeService = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="service-page">
      {/* 🔹 HEADER AVEC BACKGROUND IMAGE & TITRE */}
      <div className="service-header welcome-home-header">
        <h1>{t("Welcome Home Service")}</h1>
        
      </div>

      {/* 🔹 CONTENU PRINCIPAL */}
      <div className="service-content">
        <p className="service-intro">
          {t("Your home, perfectly prepared for your arrival. Relax and enjoy a stress-free return!")}
        </p>
        <h2>{t("Why is this service essential?")}</h2>
        <p className="service-description">
          {t("After months away, your home needs a refresh before your return: ")}
          <strong>{t("dust, stale air, disconnected appliances, etc.")}</strong>
        </p>
        
        <ul className="service-benefits">
          <li><FaCheckCircle className="benefit-icon" /> <strong>{t("Return to a spotless, fresh home")}</strong></li>
          <li><FaClock className="benefit-icon" /> {t("Save time and enjoy your stay immediately")}</li>
          <li><FaConciergeBell className="benefit-icon" /> {t("Avoid inconveniences like humidity, dust, or inactive appliances")}</li>
        </ul>

        {/* 🔹 FORMULES STANDARD & PREMIUM (NOUVEAU DESIGN) */}
        <h2>{t("Two Levels of Service Tailored to Your Needs")}</h2>
        
        <div className="service-levels">
          {/* ✅ STANDARD SERVICE */}
          <div className="service-box">
            <h3>{t("Standard Plan Service")}</h3>
            <ul>
              <li><FaHome /> {t("Utility setup (electricity, water, heating, AC...)")}</li>
              <li><FaCheckCircle /> {t("Air circulation & room refreshing")}</li>
              <li><FaConciergeBell /> {t("Quick cleaning (dust, floors, main surfaces...)")}</li>
              <li><FaClock /> {t("Linen preparation (clean sheets and towels)")}</li>
              <li><FaTools /> {t("Equipment check-up (leaks, light bulbs, etc.)")}</li>
            </ul>
          </div>

          {/* 🔥 PREMIUM SERVICE */}
          <div className="service-box premium-box">
            <h3>{t("Premium Plan Service")} <span className="premium-badge">{t("Exclusive Perks")}</span></h3>
            <ul>
              <li><FaCheckCircle /> <strong>{t("Deep cleaning (bathrooms, windows, kitchen, furniture...)")}</strong></li>
              <li><FaShoppingCart /> {t("Essential groceries delivered (water, coffee, bread, fruits…)")}</li>
              <li><FaTools /> {t("Free small repairs (light bulb replacement, minor fixes...)")}</li>
              <li><FaClock /> {t("Priority access to additional services (faster response time)")}</li>
              <li><FaConciergeBell /> {t("One free extra service per year (car wash, terrace cleaning...)")}</li>
            </ul>
          </div>
        </div>

        {/* 🔹 FAQ SECTION */}
        <h3>{t("Good to know:")}</h3>
        <div className="faq-section">
          <h4>{t("📌 Can I customize the service?")}</h4>
          <p>{t("Absolutely! You can adjust the package to fit your needs.")}</p>
          
          <h4>{t("📌 How do I schedule the service?")}</h4>
          <p>{t("Simply select the date and time, and we’ll handle the rest.")}</p>

          <h4>{t("📌 What if I need last-minute changes?")}</h4>
          <p>{t("We do our best to accommodate urgent requests.")}</p>
        </div>

        {/* 🔹 CTA BOUTONS */}
        <div className="cta-section">
          <p>{t("Secure your Welcome Home Service today and enjoy a seamless return.")}</p>
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

export default WelcomeHomeService;

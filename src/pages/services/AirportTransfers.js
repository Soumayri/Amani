import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { FaCar, FaClock, FaUserCheck, FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";

const MonthlyChecks = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="service-page">
      {/* 🔹 HEADER AVEC IMAGE DE FOND UNIQUE POUR CE SERVICE */}
      <div className="service-header airport-transfers-header">
        <h1>{t("Airport Transfers")}</h1>
        
      </div>

      {/* 🔹 CONTENU PRINCIPAL */}
      <div className="service-content">
        <p className="service-intro">
          {t("Start and end your trip stress-free with our private, punctual, and comfortable airport transfers.")}
        </p>
        <h2>{t("Why choose Our Service?")}</h2>
        <ul className="service-benefits">
        <li><FaUserCheck className="benefit-icon" /> <strong>{t("Personalized Pickup")}</strong> – {t("Your driver waits with a sign at the airport.")}</li>
          <li><FaMoneyBillWave className="benefit-icon" /> <strong>{t("Fixed Transparent Pricing")}</strong> – {t("No surprises! Know the fare in advance.")}</li>
          <li><FaCar className="benefit-icon" /> <strong>{t("Comfortable & Safe")}</strong> – {t("Modern, air-conditioned, and well-maintained.")}</li>
          <li><FaClock className="benefit-icon" /> <strong>{t("24/7 Availability")}</strong> – {t("Service at any hour, regardless of your flight schedule.")}</li>
          <li><FaCheckCircle className="benefit-icon" /> <strong>{t("Exclusive")}</strong> – {t("Available as an optional service for other plans.")}</li>
        </ul>

        <h2>{t("How It Works?")}</h2>
        <ul className="service-benefits">
        <li><strong>{t("1. Book Your Transfer")}</strong> – {t("Via our contact form or WhatsApp.")}</li>
          <li><strong>{t("2. Receive Confirmation")}</strong> – {t("driver details sended instantly.")}</li>
          <li><strong>{t("3. Meet Your Driver")}</strong> – {t("At the agreed pickup point.")}</li>
          <li><strong>{t("4. Enjoy a Comfortable Ride")}</strong> – {t("Straight to your home.")}</li>
        </ul>

        <h3>{t("Good to know :")}</h3>
        <div className="faq-section">
          <h3>{t("📌 Currently Available in Casablanca")}</h3>
          <p>{t("We plan to expand soon.")}</p>

          <h3>{t("📌 Book at Least 24h in Advance")}</h3>
          <p>{t("To guarantee driver availability.")}</p>

          <h3>{t("📌 Round-Trip Service Available")}</h3>
          <p>{t("Reserve both your arrival and departure rides.")}</p>

          <h3>{t("📌 Family & Business Friendly")}</h3>
          <p>{t("Need a child seat or extra luggage space? Just let us know!")}</p>
        </div>

        {/* 🔹 BOUTONS CTA */}
        <div className="cta-section">
          <p>{t("Keep your property monitored and well-maintained, even when you're away.")}</p>
          <button className="cta-button" onClick={() => navigate("/contact?service=Airport Transfers")}>
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

import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { FaEnvelope, FaLock, FaHome, FaPlane, FaClipboardList } from "react-icons/fa";
import ScrollToTop from "../../components/ScrollToTop";
const MailCollection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <ScrollToTop />
    <Navbar />
    <div className="service-page">
      {/* 🔹 HEADER AVEC IMAGE DE FOND */}
      <div className="service-header mail-collection-header">
        <h1>{t("Mail Collection")}</h1>
       
      </div>

      <div className="service-content"> <p className="service-intro">{t("Your Mail, Handled with Care and Security")}</p>
        <h2>{t("Why is it essential?")}</h2>
        <ul className="service-benefits">
          <li><FaEnvelope className="benefit-icon" /> {t("Receive all your mail safely, even when you’re away for months.")}</li>
          <li><FaHome className="benefit-icon" /> {t("Keep your mailbox empty and secure, preventing mail overflow and unwanted attention.")}</li>
          <li><FaClipboardList className="benefit-icon" /> {t("Easily access your documents whenever needed, no matter where you are.")}</li>
        </ul>

        <h2>{t("Why choose our service?")}</h2>
        <ul className="service-benefits">
          <li><FaLock className="benefit-icon" /> {t("Secure & confidential storage – Your mail is handled with discretion and stored safely until retrieval.")}</li>
          <li><FaClipboardList className="benefit-icon" /> {t("Regular mail checks & sorting – We organize, filter, and secure your important letters.")}</li>
          <li><FaPlane className="benefit-icon" /> {t("Mail forwarding option – We can send your urgent documents anywhere in the world upon request.")}</li>
        </ul>

        <h3>{t("Good to know:")}</h3>
        <div className="faq-section">
          <h3>{t("📌 Where is the mail collected?")}</h3>
          <p>{t("We retrieve mail from your home mailbox or PO box.")}</p>
          
          <h3>{t("📌 How often is mail checked?")}</h3>
          <p>{t("Monthly as part of your subscription, or upon request for extra visits.")}</p>

          <h3>{t("📌 What about parcels?")}</h3>
          <p>{t("Small parcels can be secured; larger deliveries require prior arrangements.")}</p>
        </div>

        {/* ✅ BOUTONS */}
        <div className="cta-section">
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

export default MailCollection;

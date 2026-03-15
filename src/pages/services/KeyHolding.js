// src/pages/KeyHoldingService.js
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaKey,
  FaShieldAlt,
  FaClock,
  FaHome,
  FaUserFriends,
  FaFingerprint,
  FaLock,
} from "react-icons/fa";
import { useEffect } from "react";
import SeoHead from "../../components/SeoHead.js";
import Navbar from "../../components/Navbar";



const KeyHolding = () => {
  const { t } = useTranslation();
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      icon: <FaHome />,
      title: t("We register your property and access rules"),
      text: t(
        "We confirm your address, who is allowed to use your keys and in which situations we can open your home."
      ),
    },
    {
      icon: <FaKey />,
      title: t("We collect and code your keys securely"),
      text: t(
        "Keys are collected during your FreshStart visit or securely shipped from abroad. Each set is assigned a unique generated ID – no name, no address. Only the Amani scheduler can link this ID to your property."
      ),
    },
    {
      icon: <FaShieldAlt />,
      title: t("Keys locked in a secure safe, one agent, zero exceptions"),
      text: t(
        "Your keys are stored in a physical safe in a secure location in Casablanca. Only one authorised Amani agent holds access. Every key exit is logged with the date, reason and recipient – and your keys never leave the safe without your prior authorisation."
      ),
    },
    {
      icon: <FaClock />,
      title: t("Every exit requires your authorisation and identity verification"),
      text: t(
        "For any key handover to a third party – a professional, a technician or a visitor – we require your explicit prior approval and a copy of that person's ID. The only exceptions are Amani's own service operations (Home Check, Seasonal Care, FreshStart), which are already covered by your membership agreement."
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <SeoHead
        titleKey="Key Holding in Casablanca | Amani Home"
        descriptionKey="Amani key holding service with secure storage and controlled access for your home in Morocco."
        canonical="https://www.amani-services.com/services/key-holding"
      />

      <section className="service service--keyholding">
        <div className="service__inner">
          {/* Header */}
          <p className="service__eyebrow">
            {t("Services · Included in every membership")}
          </p>

          <div className="service__header-row">
            <div className="service__header-main">
              <h1 className="service__title">
                {t("Key Holding")}
              </h1>
              <p className="service__lead">
                {t(
                  "Amani holds your keys in a secure safe in Casablanca, accessible only to a single authorised Amani agent. Your keys are managed anonymously: each set carries a unique generated ID, never your name or address. Even if a key were lost, no one could link it to your home."
                )}
              </p>

              <div className="service__badges">
                <span className="service__badge">
                  {t("Included in Silver, Gold & Platinum")}
                </span>
                <span className="service__badge service__badge--accent">
                  {t("From 39€/month with home checks")}
                </span>
              </div>
            </div>

            {/* Carte “What’s included” */}
            <aside className="service__aside-card">
              <h2 className="service__aside-title">
                {t("What’s included with Key Holding")}
              </h2>
              <ul className="service__list">
                <li>
                  <FaLock />{" "}
                  <span>
                    {t("Keys stored in a physical safe in a secure location in Casablanca")}
                  </span>
                </li>
                <li>
                  <FaUserFriends />{" "}
                  <span>
                    {t("Single authorised Amani agent holds access – no one else")}
                  </span>
                </li>
                <li>
                  <FaFingerprint />{" "}
                  <span>
                    {t("Each key set identified by a unique generated ID, never your name or address")}
                  </span>
                </li>
                <li>
                  <FaShieldAlt />{" "}
                  <span>
                    {t("Only the Amani scheduler can link the ID to your property")}
                  </span>
                </li>
                <li>
                  <FaClock />{" "}
                  <span>{t("Every key exit logged: date, reason and recipient")}</span>
                </li>
                <li>
                  <FaUserFriends />{" "}
                  <span>{t("Prior client authorisation required for any third-party handover")}</span>
                </li>
                <li>
                  <FaShieldAlt />{" "}
                  <span>{t("ID copy taken for every external handover – except Amani service operations")}</span>
                </li>
              </ul>

              <p className="service__aside-note">
                {t(
                  "Key holding is the foundation of every membership. If a key were ever lost, no one could connect it to your home. Your property stays protected at every level."
                )}
              </p>
            </aside>
          </div>

          {/* Section “How we hold your keys” */}
          <div className="service__section">
            <h2 className="service__section-title">
              {t("How our key holding works")}
            </h2>
            <p className="service__section-lead">
              {t(
                "We follow a clear, documented process so you always know where your keys are and how they can be used."
              )}
            </p>

            <div className="service__steps-grid">
              {steps.map((step, index) => (
                <article key={index} className="service__step-card">
                  <div className="service__step-icon">{step.icon}</div>
                  <h3 className="service__step-title">{step.title}</h3>
                  <p className="service__step-text">{step.text}</p>
                </article>
              ))}
            </div>
          </div>

          {/* CTA bas de page */}
          <div className="service__cta">
            <Link to="/plans" className="service__btn">
              {t("Compare memberships")}
            </Link>
        <Link to="/#services-section" className="service__btn--glass">
                      {t("Discover services")}
                    </Link>

          </div>
        </div>
      </section>
    </>
  );
};



export default KeyHolding;

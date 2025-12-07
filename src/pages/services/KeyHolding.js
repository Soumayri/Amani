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
        "Keys are collected during your FreshStart visit or via a trusted person, then coded and stored without your address written on them."
      ),
    },
    {
      icon: <FaShieldAlt />,
      title: t("Keys stored in a secure key cabinet"),
      text: t(
        "Your keys are held in Casablanca in a locked system with restricted access, used only for authorised visits or emergencies."
      ),
    },
    {
      icon: <FaClock />,
      title: t("Available when you or your providers need us"),
      text: t(
        "When you need access for yourself, a guest or a professional, we organise the handover or activate services like ProAccess."
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
            {t("Service · Included in every membership")}
          </p>

          <div className="service__header-row">
            <div className="service__header-main">
              <h1 className="service__title">
                {t("Key Holding")}
              </h1>
              <p className="service__lead">
                {t(
                  "Amani holds your keys securely in Casablanca so your home is always accessible for planned visits, emergencies and trusted professionals – without relying on friends or neighbours."
                )}
              </p>

              <div className="service__badges">
                <span className="service__badge">
                  {t("Included in Basic, Standard & Premium")}
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
                  <FaKey />{" "}
                  <span>
                    {t("Secure storage of your keys in Casablanca")}
                  </span>
                </li>
                <li>
                  <FaShieldAlt />{" "}
                  <span>
                    {t("Keys coded and stored without visible address")}
                  </span>
                </li>
                <li>
                  <FaUserFriends />{" "}
                  <span>
                    {t("Authorisation list for who can access your home")}
                  </span>
                </li>
                <li>
                  <FaClock />{" "}
                  <span>{t("Access for emergencies and urgent visits")}</span>
                </li>
              </ul>

              <p className="service__aside-note">
                {t(
                  "Key holding is the base of every membership – it allows us to inspect, prepare and protect your home while you’re abroad."
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
              {t("Compare memberships from 39€/month")}
            </Link>
            <Link to="/contact" className="service__btn--glass">
  {t("Talk to Amani about your keys")}
</Link>

          </div>
        </div>
      </section>
    </>
  );
};



export default KeyHolding;

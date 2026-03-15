// src/pages/ProAccessService.js
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaDoorOpen,
  FaUserTie,
  FaTools,
  FaClipboardCheck,
  FaShieldAlt,
  FaIdCard,
} from "react-icons/fa";
import SeoHead from "../../components/SeoHead";
import Navbar from "../../components/Navbar";

const ProAccessService = () => {
  const { t } = useTranslation();

  // Toujours arriver en haut de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      icon: <FaUserTie />,
      title: t("You tell us who needs access and why"),
      text: t(
        "You share who is coming (plumber, electrician, delivery, technician, mover), on which day and at what time. We confirm the slot directly with the professional and keep you informed."
      ),
    },
    {
      icon: <FaDoorOpen />,
      title: t("We welcome the professional and open your home securely"),
      text: t(
        "Our agent arrives at the agreed time, greets the professional at your property, verifies their identity if required and provides secure access to the home – no keys circulating from hand to hand."
      ),
    },
    {
      icon: <FaTools />,
      title: t("We stay present for the entire intervention – your eyes and hands on-site"),
      text: t(
        "From the moment the professional enters to the moment they leave, we are present throughout the entire intervention. We supervise the work, take photos of key moments and relay any questions or approvals directly between you and the professional in real time."
      ),
    },
    {
      icon: <FaClipboardCheck />,
      title: t("We secure the property and send you the full report within 24 hours"),
      text: t(
        "Once the intervention is complete, we verify the work matches what was agreed, secure your home and return the keys to the safe. You receive your Amani Report within 24 hours – photos, intervention summary and any follow-up points to note."
      ),
    },
  ];

  return (
    <>
      <Navbar />

      <SeoHead
        titleKey="ProAccess Service | Amani Home"
        descriptionKey="ProAccess by Amani: Amani coordinates the slot, welcomes the professional, stays present throughout the entire intervention and sends a full report within 24h. Available to all members."
        canonical="https://www.amani-services.com/services/pro-access"
      />

      <section className="service service--keyholding">
        <div className="service__inner">
          {/* Eyebrow + header */}
          <p className="service__eyebrow">
            {t("Add-on · Open your home for trusted professionals")}
          </p>

          <div className="service__header-row">
            <div className="service__header-main">
              <h1 className="service__title">
                {t("ProAccess")}
              </h1>
              <p className="service__lead">
                {t(
                  "ProAccess is our on-site access and supervision service for when a professional needs to enter your home and you can't be in Morocco. Amani coordinates the slot, welcomes the professional, stays present throughout the entire intervention – your eyes and hands on-site – then secures the property and sends you a full report."
                )}
              </p>

              <div className="service__badges">
                <span className="service__badge">
                  {t("Available for all membership plans")}
                </span>
                <span className="service__badge service__badge--accent">
                  {t("Coordination & supervision fee: 20% of the intervention cost")}
                </span>
              </div>
            </div>

            {/* Aside "What ProAccess is for" */}
            <aside className="service__aside-card">
              <h2 className="service__aside-title">
                {t("When to use ProAccess")}
              </h2>
              <ul className="service__list">
                <li>
                  <FaTools />
                  <span>
                    {t("Repairs and maintenance: plumber, electrician, AC technician")}
                  </span>
                </li>
                <li>
                  <FaUserTie />
                  <span>
                    {t("Delivery that must be received inside the property")}
                  </span>
                </li>
                <li>
                  <FaDoorOpen />
                  <span>
                    {t("Moving, furniture delivery or large item installation")}
                  </span>
                </li>
                <li>
                  <FaIdCard />
                  <span>
                    {t("Any professional access requiring identity verification and supervision")}
                  </span>
                </li>
                <li>
                  <FaShieldAlt />
                  <span>
                    {t("Emergency situations: urgent repairs or inspections while you are abroad")}
                  </span>
                </li>
              </ul>

              <p className="service__aside-note">
                {t(
                  "ProAccess is priced per visit with a 20% coordination and supervision fee. A clear confirmation is sent before each intervention. Available for all Amani membership plans."
                )}
              </p>
            </aside>
          </div>

          {/* Section "How ProAccess works" */}
          <div className="service__section">
            <h2 className="service__section-title">
              {t("How ProAccess works")}
            </h2>
            <p className="service__section-lead">
              {t(
                "You no longer need to send your keys via family or neighbours. Amani opens the door, stays present for the entire intervention and closes your home again under a clear, professional process – with a full report to follow."
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

          {/* Lien croisé */}
          <p className="service__footer-note">
            {t("ProAccess works because your keys are always with us – secured and anonymised through our")}{" "}
            <Link to="/services/key-holding" className="service__link-inline">
              {t("Key Holding")}
            </Link>
            {t(" service. If the professional's visit reveals work that needs managing, see")}{" "}
            <Link to="/services/amani-works" className="service__link-inline">
              {t("Amani Works")}
            </Link>
            {t(".")}
          </p>

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

export default ProAccessService;

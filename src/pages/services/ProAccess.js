// src/pages/ProAccessService.js
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaDoorOpen,
  FaUserTie,
  FaTools,
  FaClipboardCheck,
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
        "You share who is coming (plumber, electrician, delivery, technician), on which day and at what time, so we can organise the access slot."
      ),
    },
    {
      icon: <FaDoorOpen />,
      title: t("We open and close your home for them"),
      text: t(
        "An Amani operator goes on site, opens the property, lets the professional in and stays available on site or nearby depending on what is needed."
      ),
    },
    {
      icon: <FaTools />,
      title: t("We keep an eye on what’s being done"),
      text: t(
        "We supervise the visit for a short period, check that the work or intervention matches what was agreed and answer basic questions if needed."
      ),
    },
    {
      icon: <FaClipboardCheck />,
      title: t("We close, secure and report back to you"),
      text: t(
        "Once the visit is over, we close and secure your property again and send you a short summary with photos or notes, depending on the situation."
      ),
    },
  ];

  return (
    <>
      <Navbar />

      <SeoHead
        titleKey="ProAccess Service | Amani Home"
        descriptionKey="ProAccess by Amani: one-off access and short supervision for trusted professionals when you can’t be in Morocco to open the door yourself."
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
                  "ProAccess is our one-off access service when a professional needs to enter your home and you can’t be in Morocco. We open, supervise shortly and secure the property again so your keys never circulate from hand to hand."
                )}
              </p>

              <div className="service__badges">
                <span className="service__badge">
                  {t("Available to members and non-members")}
                </span>
                <span className="service__badge service__badge--accent">
                  {t("Priority access for Standard & Premium members")}
                </span>
              </div>
            </div>

            {/* Aside “What ProAccess is for” */}
            <aside className="service__aside-card">
              <h2 className="service__aside-title">
                {t("When to use ProAccess")}
              </h2>
              <ul className="service__list">
                <li>
                  <FaTools />
                  <span>
                    {t("Repairs and maintenance: plumber, electrician, AC, etc.")}
                  </span>
                </li>
                <li>
                  <FaUserTie />
                  <span>
                    {t("Technicians, inspections or meter readings")}
                  </span>
                </li>
                <li>
                  <FaDoorOpen />
                  <span>
                    {t("Deliveries that must be received inside the property")}
                  </span>
                </li>
                <li>
                  <FaClipboardCheck />
                  <span>
                    {t("Any situation where a trusted professional needs access while you are abroad")}
                  </span>
                </li>
              </ul>

              <p className="service__aside-note">
                {t(
                  "ProAccess is priced per visit with a clear confirmation before each intervention. Standard and Premium members benefit from priority when booking time slots."
                )}
              </p>
            </aside>
          </div>

          {/* Section “How ProAccess works” */}
          <div className="service__section">
            <h2 className="service__section-title">
              {t("How ProAccess works")}
            </h2>
            <p className="service__section-lead">
              {t(
                "You don’t need to send your keys through family or neighbours anymore. Amani opens the door, stays present for a short supervision and closes your home again under a clear, professional process."
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
              {t("Ask Amani to organise a ProAccess visit")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProAccessService;

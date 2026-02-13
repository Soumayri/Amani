// src/pages/HomeCheckService.js
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaClipboardCheck,
  FaCamera,
  FaBell,
} from "react-icons/fa";
import SeoHead from "../../components/SeoHead";
import Navbar from "../../components/Navbar";

const HomeCheckService = () => {
  const { t } = useTranslation();

  // Toujours arriver en haut de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      icon: <FaClipboardCheck />,
      title: t("We plan your visits based on your membership"),
      text: t(
        "Depending on your plan, we schedule 1, 2 or 4 home checks per month and define the days and time slots that work best for you."
      ),
    },
    {
      icon: <FaHome />,
      title: t("We visit your home with a clear checklist"),
      text: t(
        "During each visit, we follow a structured checklist: doors and windows, signs of humidity, leaks, electricity, appliances, balconies, and overall condition."
      ),
    },
    {
      icon: <FaCamera />,
      title: t("We document what we see"),
      text: t(
        "If something looks unusual, we take photos or short videos so you can see exactly what we see from abroad."
      ),
    },
    {
      icon: <FaBell />,
      title: t("You receive a short report after each check"),
      text: t(
        "After every home check, you receive a brief summary with key observations and, when necessary, suggestions for next steps."
      ),
    },
  ];

  return (
    <>
      <Navbar />

      <SeoHead
        titleKey="Monthly Home Checks | Amani Home Casablanca"
        descriptionKey="Amani monthly home check service with structured inspections, checklists and reports for your home in Morocco."
        canonical="https://www.amani-services.com/services/monthly-checks"
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
                {t("Monthly Home Checks")}
              </h1>
              <p className="service__lead">
                {t(
                  "We visit your home in Casablanca at a regular rhythm to make sure everything is in order – so your property doesn’t stay closed and unchecked for months while you’re abroad."
                )}
              </p>

              <div className="service__badges">
                <span className="service__badge">
                  {t("Included in Silver, Gold & Platinum")}
                </span>
                <span className="service__badge service__badge--accent">
                  {t("1, 2 or 4 visits per month depending on your plan")}
                </span>
              </div>
            </div>

            {/* Aside “What’s included” */}
            <aside className="service__aside-card">
              <h2 className="service__aside-title">
                {t("What’s included with Home Checks")}
              </h2>
              <ul className="service__list">
                <li>
                  <FaHome />
                  <span>
                    {t("Regular on-site visits to your property")}
                  </span>
                </li>
                <li>
                  <FaClipboardCheck />
                  <span>
                    {t("Structured checklist for every home check")}
                  </span>
                </li>
                <li>
                  <FaCamera />
                  <span>
                    {t("Photos or videos when something needs your attention")}
                  </span>
                </li>
                <li>
                  <FaBell />
                  <span>
                    {t("Short written report after each visit")}
                  </span>
                </li>
              </ul>

              <p className="service__aside-note">
                {t(
                  "Home checks are the core of your membership: they help detect small issues before they become expensive problems."
                )}
              </p>
            </aside>
          </div>

          {/* Section “How our home checks work” */}
          <div className="service__section">
            <h2 className="service__section-title">
              {t("How our home checks work")}
            </h2>
            <p className="service__section-lead">
              {t(
                "From scheduling to reporting, the process is clear so you always know when your home was last visited and what we observed."
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

export default HomeCheckService;

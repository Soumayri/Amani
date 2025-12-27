// src/pages/SeasonalCareService.js
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaBroom,
  FaWind,
  FaSprayCan,
} from "react-icons/fa";
import SeoHead from "../../components/SeoHead";
import Navbar from "../../components/Navbar";

const SeasonalCare = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      icon: <FaCalendarAlt />,
      title: t("We plan your seasonal visits ahead of time"),
      text: t(
        "We agree on the best periods for Seasonal Care based on how often you visit Morocco and how your home is used."
      ),
    },
    {
      icon: <FaBroom />,
      title: t("We refresh and reset your home"),
      text: t(
        "Our team cleans, dusts, airs out and resets the main rooms so your home doesn’t stay closed and stale for months."
      ),
    },
    {
      icon: <FaWind />,
      title: t("We air, ventilate and check for humidity"),
      text: t(
        "We open windows where possible, check for damp, odors or signs of mold, and let you know if something needs extra attention."
      ),
    },
    {
      icon: <FaSprayCan />,
      title: t("You arrive to a home that feels alive again"),
      text: t(
        "Seasonal Care makes it easier to arrive, unpack and enjoy your stay instead of starting with cleaning and inspections."
      ),
    },
  ];

  return (
    <>
      <Navbar />

      <SeoHead
        titleKey="Seasonal Care | Amani Home Casablanca"
        descriptionKey="Seasonal Care service by Amani: seasonal cleaning, airing and reset of your home in Morocco, included with your membership."
        canonical="https://www.amani-services.com/services/seasonal-care"
      />

      <section className="service service--keyholding">
        <div className="service__inner">
          {/* Eyebrow + header */}
          <p className="service__eyebrow">
            {t("Services · Included in every membership")}
          </p>

          <div className="service__header-row">
            <div className="service__header-main">
              <h1 className="service__title">
                {t("Seasonal Care")}
              </h1>
              <p className="service__lead">
                {t(
                  "Seasonal Care is a deeper refresh of your home before and after the main seasons, so your property doesn’t sit closed, dusty or humid for too long while you’re abroad."
                )}
              </p>

              <div className="service__badges">
                <span className="service__badge">
                  {t("2 Seasonal Care visits per year in Basic & Standard")}
                </span>
                <span className="service__badge service__badge--accent">
                  {t("4 Seasonal Care visits per year in Premium")}
                </span>
              </div>
            </div>

            {/* Aside “What’s included” */}
            <aside className="service__aside-card">
              <h2 className="service__aside-title">
                {t("What’s included with Seasonal Care")}
              </h2>
              <ul className="service__list">
                <li>
                  <FaBroom />
                  <span>
                    {t("Seasonal cleaning of key living areas")}
                  </span>
                </li>
                <li>
                  <FaWind />
                  <span>
                    {t("Airing and ventilation of the property")}
                  </span>
                </li>
                <li>
                  <FaCalendarAlt />
                  <span>
                    {t("Planned visits before and after key seasons")}
                  </span>
                </li>
                <li>
                  <FaSprayCan />
                  <span>
                    {t("Quick reset so your home feels ready sooner")}
                  </span>
                </li>
              </ul>

              <p className="service__aside-note">
                {t(
                  "Seasonal Care works together with your monthly home checks so your property stays clean, aired and easier to enjoy when you return."
                )}
              </p>
            </aside>
          </div>

          {/* Section “How Seasonal Care works” */}
          <div className="service__section">
            <h2 className="service__section-title">
              {t("How Seasonal Care works")}
            </h2>
            <p className="service__section-lead">
              {t(
                "We combine planning, cleaning and airing so your seasonal visits to Morocco start smoother, with less effort on your side."
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
              {t("Compare memberships from 49€/month")}
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

export default SeasonalCare;

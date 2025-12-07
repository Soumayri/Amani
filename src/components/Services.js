// src/components/HomeOverviewSection.js
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaKey,
  FaDoorOpen,
  FaConciergeBell,
  FaHammer,
} from "react-icons/fa";

const Services= () => {
  const { t } = useTranslation();

  return (
    <section className="home-overview">
      <div className="home-overview__inner">
        {/* Eyebrow */}
        <p className="home-overview__eyebrow">
          {t("Remote home care for Moroccan properties")}
        </p>

        {/* Titre */}
        <h2 className="home-overview__title">
          {t("What we do while you’re away")}
        </h2>

        {/* Intro */}
        <p className="home-overview__lead">
          {t(
            "Every membership includes regular home checks, seasonal care and secure key holding in Casablanca. Amani acts as your eyes and hands on the ground while you’re abroad."
          )}
        </p>

        {/* Grid des services inclus dans les abonnements */}
        <div className="home-overview__grid">
          {/* Key Holding */}
          <Link
  to="/services/key-holding"
  className="home-overview__card-link"
>
          <article className="home-overview__card">
            <div className="home-overview__icon">
              <FaKey aria-hidden="true" />
            </div>
            <h3 className="home-overview__card-title">
              {t("Key Holding")}
            </h3>
            <p className="home-overview__card-text">
              {t(
                "Your keys are stored securely, ready for emergencies, visits or trusted professionals."
              )}
            </p>
            <p className="home-overview__badge">
              {t("Secure key holding included in all plans")}
            </p>
            </article></Link>
          

          {/* Monthly Home Check */}
         
          <Link
  to="/services/monthly-checks"
  className="home-overview__card-link"
>
          <article className="home-overview__card">
            <div className="home-overview__icon">
              <FaHome aria-hidden="true" />
            </div>
            <h3 className="home-overview__card-title">
              {t("Home Check")}
            </h3>
            <p className="home-overview__card-text">
              {t(
                "Scheduled visits to your property with a clear checklist and a short report after each round."
              )}
            </p>
            <p className="home-overview__badge">
              {t("Included in every membership")}
            </p>
          </article>
</Link>
          {/* Seasonal Care */}
          <Link
  to="/services/seasonal-care"
  className="home-overview__card-link"
>
          <article className="home-overview__card">
            <div className="home-overview__icon">
              <FaCalendarAlt aria-hidden="true" />
            </div>
            <h3 className="home-overview__card-title">
              {t("Seasonal Care")}
            </h3>
            <p className="home-overview__card-text">
              {t(
                "Seasonal cleaning to freshen, air out and reset your home before and after the main seasons."
              )}
            </p>
            <p className="home-overview__badge">
              {t("2 to 4 visits per year depending on your plan")}
            </p>
          </article>
</Link>
        </div>
{/* ADD-ONS */}
<div className="home-overview__addons">
  <h3 className="home-overview__addons-title">
    {t("Add services when you need more")}
  </h3>
  <p className="home-overview__addons-text">
    {t(
      "On top of your membership, you can activate extra services for special stays, a fresh start or renovation projects."
    )}
  </p>

  <div className="home-overview__addons-grid">
            {/* Welcome Home */}
    <Link
  to="/services/welcome-home"
  className="home-overview__card-link"
>
    <div className="home-overview__addon-card">
      <div className="home-overview__addon-icon">
        <FaConciergeBell aria-hidden="true" />
      </div>
      <div className="home-overview__addon-title">{t("Welcome Home")}</div>
      <p className="home-overview__addon-desc">
        {t("Before you arrive, we bring your home back to life.")}
      </p>
      
    </div>
</Link>
            {/* ProAccess */}
            <Link
  to="/services/pro-access"
  className="home-overview__card-link"
>
    <div className="home-overview__addon-card">
      <div className="home-overview__addon-icon">
        <FaDoorOpen aria-hidden="true" />
      </div>
      <div className="home-overview__addon-title">{t("ProAccess service")}</div>
      <p className="home-overview__addon-desc">
        {t("One-off access and short supervision for trusted professionals.")}
      </p>
      
    </div>
</Link>
            {/* Amani Works */}
            <Link
  to="/services/amani-works"
  className="home-overview__card-link"
>
    <div className="home-overview__addon-card">
      <div className="home-overview__addon-icon">
        <FaHammer aria-hidden="true" />
      </div>
      <div className="home-overview__addon-title">{t("Amani Works")}</div>
      <p className="home-overview__addon-desc">
        {t("Remote supervision for your renovation and works.")}
      </p>
    
    </div></Link>
  </div>

  <div className="home-overview__cta">
   
    <Link to="/plans" className="home-overview__link">
      {t("Compare memberships from 39€/month")}
    </Link>
  </div>
</div>

      </div>
    </section>
  );
};


export default Services;
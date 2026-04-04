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
  FaBroom,
} from "react-icons/fa";

const Services= () => {
  const { t } = useTranslation();

  return (
    <section className="home-overview" id="services-section">

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
            "We take care of your home so nothing is left to chance while you’re away."
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
                "Your keys are securely stored and ready when needed — with controlled access and full traceability."
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
                "Regular visits to make sure everything stays in order — and nothing goes unnoticed."
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
                "Your home is refreshed, aired and maintained throughout the year — so it never feels closed or neglected."
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
    {t("When your home needs more, we handle it.")}
  </h3>
  <p className="home-overview__addons-text">
    {t(
      "From preparing your arrival to handling unexpected issues or supervising work, we take care of everything — without you needing to be there."
    )}
  </p>

  <div className="home-overview__addons-grid">
            {/* FreshStart */}
    <Link
  to="/services/freshstart"
  className="home-overview__card-link"
>
    <div className="home-overview__addon-card">
      <div className="home-overview__addon-icon">
        <FaBroom aria-hidden="true" />
      </div>
      <div className="home-overview__addon-title">{t("FreshStart")}</div>
      <p className="home-overview__addon-desc">
        {t("We inspect, prepare and set everything right from the start — so your home is ready from day one.")}
      </p>
    </div>
</Link>
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
        {t("Before you arrive, your home is cleaned, aired and prepared — so you walk into comfort, not chores.")}
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
      <div className="home-overview__addon-title">{t("ProAccess")}</div>
      <p className="home-overview__addon-desc">
        {t("We open, supervise and secure your home for any trusted professional — so you don't have to manage it remotely.")}
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
        {t("We manage and supervise your renovation on site — with updates, coordination and control from a distance.")}
      </p>
    
    </div></Link>
  </div>

  <div className="home-overview__cta">
   
    <Link to="/plans" className="home-overview__link">
      {t("See plans")}
    </Link>
  </div>
</div>

      </div>
    </section>
  );
};


export default Services;
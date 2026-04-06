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

  {/* Powered by Amani Control System */}
  <div className="home-overview__control-system">
    <div className="home-overview__control-badge">
      <span className="home-overview__control-dot" />
      Amani Control System
    </div>
    <div className="home-overview__control-text">
      <span className="home-overview__control-headline">
        {t("All our services run on one integrated system")}
      </span>
      <span className="home-overview__control-tags">
        <span>{t("Automated")}</span>
        <span className="home-overview__control-sep">·</span>
        <span>{t("Traceable")}</span>
        <span className="home-overview__control-sep">·</span>
        <span>{t("Secure")}</span>
      </span>
    </div>
  </div>

  {/* CTA */}
  <div className="home-overview__cta">
    <Link to="/plans" className="home-overview__btn-primary">
      {t("See plans")}
    </Link>
    <a
      href="https://wa.me/33670779256"
      target="_blank"
      rel="noopener noreferrer"
      className="home-overview__btn-whatsapp"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.122 1.524 5.855L.057 23.882a.5.5 0 0 0 .606.63l6.288-1.651A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 0 1-5.031-1.378l-.36-.214-3.733.98.997-3.642-.235-.374A9.869 9.869 0 0 1 2.118 12C2.118 6.533 6.533 2.118 12 2.118c5.467 0 9.882 4.415 9.882 9.882 0 5.467-4.415 9.882-9.882 9.882z"/>
      </svg>
      {t("Talk to Amani")}
    </a>
  </div>
</div>

      </div>
    </section>
  );
};


export default Services;
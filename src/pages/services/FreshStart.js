// src/pages/services/FreshStart.js
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaKey,
  FaBroom,
  FaClipboardCheck,
  FaCamera,
  FaTachometerAlt,
  FaShieldAlt,
  FaLock,
} from "react-icons/fa";
import SeoHead from "../../components/SeoHead";
import Navbar from "../../components/Navbar";

const FreshStart = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      icon: <FaKey />,
      title: t("Your keys arrive at our secure address"),
      text: t(
        "You send your keys from abroad via DHL or a France-Morocco carrier to our secure Casablanca address. We track the parcel, confirm reception by WhatsApp and assign your keys a unique anonymous code. Your FreshStart is then scheduled within 7 days."
      ),
    },
    {
      icon: <FaBroom />,
      title: t("Full clean, deep airing and humidity reset"),
      text: t(
        "Our team carries out a full clean of every room: floors, surfaces, bathrooms and kitchen. All windows are opened to air the property thoroughly and eliminate any humidity, stale air or odors built up during the closed period."
      ),
    },
    {
      icon: <FaClipboardCheck />,
      title: t("Room-by-room inspection on a 20-point checklist"),
      text: t(
        "We go through each room methodically: ceilings, walls, floors, plumbing fixtures, electrical points, locks, shutters and windows. Every observation is noted. Any issue requiring your attention is flagged immediately by WhatsApp."
      ),
    },
    {
      icon: <FaCamera />,
      title: t("Meter readings and before/after photo report"),
      text: t(
        "We record your water and electricity meter readings to establish a reference point for your membership. Before and after photos covering all rooms are compiled into your first Amani Report, sent to you on the day of the visit."
      ),
    },
  ];

  return (
    <>
      <Navbar />

      <SeoHead
        titleKey="FreshStart | Amani Home – Property Onboarding in Morocco"
        descriptionKey="FreshStart by Amani: the mandatory onboarding visit that keys in your home, runs a full inspection and deep clean before your membership begins."
        canonical="https://www.amani-services.com/services/freshstart"
      />

      <section className="service service--keyholding">
        <div className="service__inner">

          {/* Eyebrow */}
          <p className="service__eyebrow">
            {t("Services · One-time onboarding visit")}
          </p>

          <div className="service__header-row">
            <div className="service__header-main">
              <h1 className="service__title">
                {t("FreshStart")}
              </h1>
              <p className="service__lead">
                {t(
                  "Before your membership begins, your home needs a starting point. FreshStart is the visit we carry out once – to receive your keys, inspect every room, run a full clean and establish the baseline reference for all future reports."
                )}
              </p>

              <div className="service__badges">
                <span className="service__badge">
                  {t("Required for all new members")}
                </span>
                <span className="service__badge service__badge--accent">
                  {t("One-time visit · Membership starts from this point")}
                </span>
              </div>
            </div>

            {/* Aside "What's included" */}
            <aside className="service__aside-card">
              <h2 className="service__aside-title">
                {t("What's included in FreshStart")}
              </h2>
              <ul className="service__list">
                <li>
                  <FaLock />
                  <span>
                    {t("Keys received, coded and registered in our secure system")}
                  </span>
                </li>
                <li>
                  <FaBroom />
                  <span>
                    {t("Full clean of all rooms: floors, surfaces, bathroom and kitchen")}
                  </span>
                </li>
                <li>
                  <FaShieldAlt />
                  <span>
                    {t("Deep airing of the entire property to eliminate humidity and odors")}
                  </span>
                </li>
                <li>
                  <FaClipboardCheck />
                  <span>
                    {t("20-point room-by-room inspection checklist")}
                  </span>
                </li>
                <li>
                  <FaTachometerAlt />
                  <span>
                    {t("Water and electricity meter readings as reference baseline")}
                  </span>
                </li>
                <li>
                  <FaCamera />
                  <span>
                    {t("Before and after photo report sent on the day of the visit")}
                  </span>
                </li>
              </ul>

              <p className="service__aside-note">
                {t(
                  "FreshStart is not optional – it is the condition that allows your membership to start. Without it, we have no key, no baseline and no reference point to work from."
                )}
              </p>
            </aside>
          </div>

          {/* Section steps */}
          <div className="service__section">
            <h2 className="service__section-title">
              {t("How FreshStart works")}
            </h2>
            <p className="service__section-lead">
              {t(
                "Four clear steps, from the moment your keys leave your hands to the moment your first Amani Report lands in your inbox."
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

          {/* Notice: frais supplémentaires en cas d'état dégradé */}
          <div className="service__notice">
            <p>
              {t(
                "Should the property require work beyond the standard FreshStart scope – such as significant remediation following long-term closure, water damage or a severely degraded condition – an itemised supplementary quote will be submitted for your approval before any additional work proceeds. The standard FreshStart package remains due in all cases."
              )}
            </p>
          </div>

          {/* Lien croisé */}
          <p className="service__footer-note">
            {t("FreshStart is the moment your keys enter our system. From there, your keys are protected under our")}{" "}
            <Link to="/services/key-holding" className="service__link-inline">
              {t("Key Holding")}
            </Link>
            {t(" protocol for the lifetime of your membership.")}
          </p>

          {/* CTA */}
          <div className="service__cta">
            <Link to="/plans" className="service__btn">
              {t("Start your membership")}
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

export default FreshStart;

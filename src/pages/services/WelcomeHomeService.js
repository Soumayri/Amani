// src/pages/WelcomeHomeService.js
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaConciergeBell,
  FaDoorOpen,
  FaBed,
  FaShoppingBag,
  FaCamera,
  FaThermometerHalf,
} from "react-icons/fa";
import SeoHead from "../../components/SeoHead";
import Navbar from "../../components/Navbar";

const WelcomeHomeService = () => {
  const { t } = useTranslation();

  // Toujours arriver en haut de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      icon: <FaConciergeBell />,
      title: t("You send us a WhatsApp message with your arrival date and needs"),
      text: t(
        "Simply message us on WhatsApp with your arrival date, time and any preferences – groceries, AC on arrival, beds to prepare, specific rooms to prioritise. We confirm the slot and build your preparation checklist."
      ),
    },
    {
      icon: <FaDoorOpen />,
      title: t("We prepare your home the day before or morning of arrival"),
      text: t(
        "Our agent and a supervised housekeeper carry out a full clean – floors, surfaces, bathrooms – and prepare the beds with fresh clean sheets. We open the water and electricity, run a general test that everything works and switch on the AC if you requested it."
      ),
    },
    {
      icon: <FaShoppingBag />,
      title: t("We receive your groceries and put everything away"),
      text: t(
        "You order your groceries via Glovo or another delivery app. We receive the delivery on-site, refrigerate fresh items, store everything in your kitchen and remove all packaging before you arrive."
      ),
    },
    {
      icon: <FaCamera />,
      title: t("Your home is ready – you get the photo report before landing"),
      text: t(
        "Before you even land, you receive a WhatsApp photo report: every room clean and ready, fridge stocked, beds made. You turn the key and start your stay immediately – no cleaning, no supermarket run, no stress."
      ),
    },
  ];

  return (
    <>
      <Navbar />

      <SeoHead
        titleKey="Welcome Home Service | Amani Home"
        descriptionKey="Welcome Home by Amani: pre-arrival preparation, full clean, beds made, groceries received via Glovo and a photo report sent before you land. For members in Casablanca."
        canonical="https://www.amani-services.com/services/welcome-home"
      />

      <section className="service service--keyholding">
        <div className="service__inner">
          {/* Eyebrow + header */}
          <p className="service__eyebrow">
            {t("Add-on · For your arrivals in Morocco")}
          </p>

          <div className="service__header-row">
            <div className="service__header-main">
              <h1 className="service__title">
                {t("Welcome Home")}
              </h1>
              <p className="service__lead">
                {t(
                  "Welcome Home is our pre-arrival preparation service. Before you land, we carry out a full clean, prepare the beds, receive your groceries via "
                )}
                <a
                  href="https://glovoapp.com/"
                  className="service__link-inline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Glovo
                </a>
                {t(
                  " or another delivery app and send you a photo report so you can arrive, unpack and feel at home straight away."
                )}
              </p>

              <div className="service__badges">
                <span className="service__badge">
                  {t("Included 1×/year in Gold · Unlimited in Platinum")}
                </span>
                <span className="service__badge service__badge--accent">
                  {t("À la carte from")}{" "}
                  <span style={{ fontWeight: 600 }}>59€</span>
                  {t(" per visit for Silver (excl. groceries)")}
                </span>
              </div>
            </div>

            {/* Aside "What's included" */}
            <aside className="service__aside-card">
              <h2 className="service__aside-title">
                {t("What's included with Welcome Home")}
              </h2>
              <ul className="service__list">
                <li>
                  <FaDoorOpen />
                  <span>
                    {t("Full clean by our agent and a supervised housekeeper")}
                  </span>
                </li>
                <li>
                  <FaBed />
                  <span>
                    {t("Beds prepared with clean sheets for your first night")}
                  </span>
                </li>
                <li>
                  <FaShoppingBag />
                  <span>
                    {t("Groceries received via Glovo or delivery app and stored in your kitchen")}
                  </span>
                </li>
                <li>
                  <FaThermometerHalf />
                  <span>
                    {t("AC switched on before your arrival, on request")}
                  </span>
                </li>
                <li>
                  <FaConciergeBell />
                  <span>
                    {t("Water and electricity opened and tested")}
                  </span>
                </li>
                <li>
                  <FaCamera />
                  <span>
                    {t("WhatsApp photo report sent before you land")}
                  </span>
                </li>
              </ul>

              <p className="service__aside-note">
                {t(
                  "Included once per year in Gold, unlimited in Platinum. Available à la carte for Silver members and non-members from"
                )}{" "}
                <span style={{ fontWeight: 600 }}>59€</span>{" "}
                {t(
                  "per visit. Groceries are ordered from your account or arranged together."
                )}
              </p>
            </aside>
          </div>

          {/* Section "How Welcome Home works" */}
          <div className="service__section">
            <h2 className="service__section-title">
              {t("How Welcome Home works")}
            </h2>
            <p className="service__section-lead">
              {t(
                "One WhatsApp message from you triggers everything. We coordinate the visit, cleaning, groceries and preparation so your home is ready before you turn the key."
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

export default WelcomeHomeService;

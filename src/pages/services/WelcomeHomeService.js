// src/pages/WelcomeHomeService.js
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaConciergeBell,
  FaDoorOpen,
  FaBed,
  FaShoppingBag,
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
      title: t("You tell us when you’re coming – and what you need"),
      text: t(
        "Before your trip, you share your arrival date, time and whether you’d like us to prepare basics like water, breakfast items or a full fridge."
      ),
    },
    {
      icon: <FaDoorOpen />,
      title: t("We open and refresh your home before you arrive"),
      text: t(
        "We go on site ahead of your arrival to open the apartment, air it out, check the main rooms and make sure everything feels safe and ready."
      ),
    },
    {
      icon: <FaShoppingBag />,
      title: t("We manage your groceries via Glovo and put everything away"),
      text: t(
        "Using your Glovo order or a shopping list you approve, we receive the delivery on your behalf, store fresh items in the fridge and cupboards and remove the packaging."
      ),
    },
    {
      icon: <FaBed />,
      title: t("You arrive to a home that feels lived-in, not closed"),
      text: t(
        "Beds and essentials can be prepared, the apartment is aired and stocked, so you start your stay by resting – not by cleaning and running to the supermarket."
      ),
    },
  ];

  return (
    <>
      <Navbar />

      <SeoHead
        titleKey="Welcome Home Service | Amani Home"
        descriptionKey="Welcome Home by Amani: pre-arrival preparation, airing, light reset and groceries via Glovo so you arrive to a ready home in Morocco."
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
    "Welcome Home is our pre-arrival service so you don’t open a closed, dusty apartment after a long flight. We refresh your home, receive your groceries via "
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
    " and put everything away so you can simply arrive and feel at home."
  )}
</p>


              <div className="service__badges">
                <span className="service__badge">
                  {t("Reserved for Amani members in Casablanca")}
                </span>
                <span className="service__badge service__badge--accent">
                  {t("Welcome Home from")}{" "}
                  <span style={{ fontWeight: 600 }}>59€</span>
                  {t(" per visit (excluding groceries)")}
                </span>
              </div>
            </div>

            {/* Aside “What’s included” */}
            <aside className="service__aside-card">
              <h2 className="service__aside-title">
                {t("What’s included with Welcome Home")}
              </h2>
              <ul className="service__list">
                <li>
                  <FaDoorOpen />
                  <span>
                    {t("Pre-arrival visit to open, air and check your home")}
                  </span>
                </li>
                <li>
                  <FaConciergeBell />
                  <span>
                    {t("Light reset of main rooms so the apartment feels fresh")}
                  </span>
                </li>
                <li>
                  <FaShoppingBag />
                  <span>
                    {t("Groceries managed via Glovo and stored in your kitchen")}
                  </span>
                </li>
                <li>
                  <FaBed />
                  <span>
                    {t("Beds and essentials ready for your first night")}
                  </span>
                </li>
              </ul>

              <p className="service__aside-note">
                {t(
                  "The service starts from"
                )}{" "}
                <span style={{ fontWeight: 600 }}>59€</span>{" "}
                {t(
                  "per visit for our members in Casablanca. The Glovo order itself is paid directly from your Glovo account or according to the arrangement we agree together."
                )}
              </p>
            </aside>
          </div>

          {/* Section “How Welcome Home works” */}
          <div className="service__section">
            <h2 className="service__section-title">
              {t("How Welcome Home works")}
            </h2>
            <p className="service__section-lead">
              {t(
                "From the moment you share your arrival date, we coordinate the visit, groceries and preparation so your home feels open, stocked and welcoming when you turn the key."
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

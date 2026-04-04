// src/pages/Plans.js
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import SeoHead from "../components/SeoHead";

const Plans = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const plans = [
    {
      id: "silver",
      name: "Silver Plan",
      price: "39€",
      badge: t("Essential"),
      tagline: t("A reliable presence. Every month. Nothing left unchecked."),
      features: [
        { label: t("Secure key holding"), href: "/services/key-holding" },
        { label: t("1 home check per month"), href: "/services/monthly-checks" },
        { label: t("2 seasonal care visits per year"), href: "/services/seasonal-care" },
      ],
      bestFor: t(
        "Owners who want a dependable baseline — checked once a month, with a report after every visit."
      ),
    },
    {
      id: "gold",
      name: "Gold Plan",
      price: "59€",
      badge: t("Most popular"),
      highlight: true,
      tagline: t("Twice-monthly visits. A home you can trust from afar."),
      features: [
        { label: t("Secure key holding"), href: "/services/key-holding" },
        { label: t("2 home checks per month"), href: "/services/monthly-checks" },
        { label: t("2 seasonal care visits per year"), href: "/services/seasonal-care" },

        // ✅ Welcome Home ajouté + bon lien
        { label: t("Welcome Home (1×/year)"), href: "/services/welcome-home" },

        { label: t("Priority on ProAccess visits"), href: "/services/pro-access" },
      ],
      bestFor: t(
        "Owners who want more frequent oversight and a Welcome Home preparation included once a year."
      ),
    },
    {
      id: "platinum",
      name: "Platinum Plan",
      price: "99€", 
      badge: t("Maximum vigilance"),
      tagline: t("Every week, someone is there. Nothing goes unnoticed."),
      features: [
        { label: t("Secure key holding"), href: "/services/key-holding" },
        { label: t("4 home checks per month (weekly)"), href: "/services/monthly-checks" },
        { label: t("4 seasonal care visits per year"), href: "/services/seasonal-care" },

        // ✅ Welcome Home ajouté + bon lien
        { label: t("Welcome Home (included)"), href: "/services/welcome-home" },

        { label: t("High priority on ProAccess"), href: "/services/pro-access" },
        { label: t("Full coordination for unexpected issues and works"), href: "/services/amani-works" },
      ],
      bestFor: t(
        "Owners who want the highest level of monitoring — and a team that acts before being asked."
      ),
    },
  ];

  const handleSelectPlan = (planName) => {
    navigate(`/contact?plan=${encodeURIComponent(planName)}`);
  };

  return (
    <>
      <SeoHead
        titleKey="Home Care Memberships in Morocco | Amani Home"
        descriptionKey="PlansMetaDescription"
        canonical="https://www.amani-services.com/plans"
      />
      <ScrollToTop />
      <Navbar />

      <div className="plans-page">
        <header className="plans-header">
          <p className="plans-eyebrow">{t("Memberships · Casablanca")}</p>
          <h1 className="plans-title">{t("An empty home doesn't maintain itself. Choose how closely we care for yours.")}</h1>
          <p className="plans-subtitle">
            {t(
              "Every membership includes key holding, regular home checks and seasonal care. 6-month membership — because real care requires consistency."
            )}
          </p>
        </header>

        <div className="plans-container">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`plan-card ${plan.highlight ? "highlight" : ""}`}
            >
              {plan.badge && <p className="plan-badge">{plan.badge}</p>}

              <h2 className="plan-title">{t(plan.name)}</h2>

              <p className="plan-price">
                <span className="plan-price-main">{plan.price}</span>
                <span className="plan-price-period"> / {t("month")}</span>
              </p>

              {plan.tagline && <p className="plan-tagline">{plan.tagline}</p>}

              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="plan-feature-item">
                    {feature.href ? (
                      <Link to={feature.href} className="plan-feature-link">
                        {feature.label}
                      </Link>
                    ) : (
                      feature.label
                    )}
                  </li>
                ))}
              </ul>

              {plan.bestFor && (
                <p className="plan-bestfor">
                  <span className="plan-bestfor-label">{t("Best for")}:</span>{" "}
                  {plan.bestFor}
                </p>
              )}

              <button
                className="plan-button"
                onClick={() => handleSelectPlan(plan.name)}
              >
                {t("Start with this plan")}
              </button>
            </div>
          ))}
        </div>

        <section className="plans-extra">
          <div className="plans-extra__column">
            <h3 className="plans-extra__title">{t("What every membership includes")}</h3>
            <ul className="plans-extra__list">
              <li>
                <Link to="/services/key-holding" className="plans-extra__link">
                  {t("Secure key holding in Casablanca")}
                </Link>
              </li>
              <li>
                <Link to="/services/monthly-checks" className="plans-extra__link">
                  {t("Home checks — frequency based on your plan")}
                </Link>
              </li>
              <li>
                {/* ✅ correction du lien (seasonsal -> seasonal) */}
                <Link to="/services/seasonal-care" className="plans-extra__link">
                  {t("Seasonal care")}
                </Link>
              </li>
              <li>{t("A written report after every visit")}</li>
            </ul>
          </div>

          <div className="plans-extra__column">
            <h3 className="plans-extra__title">{t("On-demand services")}</h3>
            <ul className="plans-extra__list">
              <li>
                <Link to="/services/welcome-home" className="plans-extra__link">
                  {t("Welcome Home – home preparation")}
                </Link>
              </li>
              <li>
                <Link to="/services/pro-access" className="plans-extra__link">
                  {t("ProAccess – access and short supervision")}
                </Link>
              </li>
              <li>
                <Link to="/services/amani-works" className="plans-extra__link">
                  {t("Amani Works – remote supervision")}
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Plans;

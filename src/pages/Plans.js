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
      price: "49€",
      badge: t("Light care"),
      tagline: t("Essential care while you’re abroad."),
      features: [
        { label: t("key holding"), href: "/services/key-holding" },
        { label: t("1 home check per month"), href: "/services/monthly-checks" },
        { label: t("2 seasonal care visits per year"), href: "/services/seasonal-care" },
      ],
      bestFor: t(
        "Owners who want us to keep an eye on the home without too much intervention."
      ),
    },
    {
      id: "gold",
      name: "Gold Plan",
      price: "79€",
      badge: t("Most popular"),
      highlight: true,
      tagline: t("Closer follow-up for complete peace of mind."),
      features: [
        { label: t("key holding"), href: "/services/key-holding" },
        { label: t("2 home checks per month"), href: "/services/monthly-checks" },
        { label: t("2 seasonal care visits per year"), href: "/services/seasonal-care" },

        // ✅ Welcome Home ajouté + bon lien
        { label: t("Welcome Home (1×/year)"), href: "/services/welcome-home" },

        { label: t("Priority on ProAccess visits"), href: "/services/pro-access" },
      ],
      bestFor: t(
        "Owners who want us to look after their home more closely and receive regular updates."
      ),
    },
    {
      id: "platinum",
      name: "Platinum Plan",
      price: "129€", // ✅ mis à jour de 119€ -> 129€
      badge: t("Maximum vigilance"),
      tagline: t("We look after your home as if it were ours."),
      features: [
        { label: t("key holding"), href: "/services/key-holding" },
        { label: t("4 home checks per month (weekly)"), href: "/services/monthly-checks" },
        { label: t("4 seasonal care visits per year"), href: "/services/seasonal-care" },

        // ✅ Welcome Home ajouté + bon lien
        { label: t("Welcome Home (included)"), href: "/services/welcome-home" },

        { label: t("High priority on ProAccess"), href: "/services/pro-access" },
        { label: t("Enhanced coordination for issues and works"), href: "/services/amani-works" },
      ],
      bestFor: t(
        "Owners who expect full vigilance and premium responsiveness while they’re abroad."
      ),
    },
  ];

  const handleSelectPlan = (planName) => {
    navigate(`/contact?plan=${encodeURIComponent(planName)}`);
  };

  return (
    <>
      <SeoHead
        titleKey="Memberships & Pricing | AMANI HOME"
        descriptionKey="PlansMetaDescription"
        canonical="https://www.amani-services.com/plans"
      />
      <ScrollToTop />
      <Navbar />

      <div className="plans-page">
        <header className="plans-header">
          <p className="plans-eyebrow">{t("Memberships · Casablanca")}</p>
          <h1 className="plans-title">{t("Choose how closely we look after your home.")}</h1>
          <p className="plans-subtitle">
            {t(
              "From 49€/month, every plan includes secure key holding, home checks and seasonal care. You only add extra services when you need more."
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
                {t("Choose this plan")}
              </button>
            </div>
          ))}
        </div>

        <section className="plans-extra">
          <div className="plans-extra__column">
            <h3 className="plans-extra__title">{t("Included in every membership")}</h3>
            <ul className="plans-extra__list">
              <li>
                <Link to="/services/key-holding" className="plans-extra__link">
                  {t("Secure key holding in Casablanca")}
                </Link>
              </li>
              <li>
                <Link to="/services/monthly-checks" className="plans-extra__link">
                  {t("Home checks according to your plan")}
                </Link>
              </li>
              <li>
                {/* ✅ correction du lien (seasonsal -> seasonal) */}
                <Link to="/services/seasonal-care" className="plans-extra__link">
                  {t("Seasonal care")}
                </Link>
              </li>
              <li>{t("Short report after every visit")}</li>
            </ul>
          </div>

          <div className="plans-extra__column">
            <h3 className="plans-extra__title">{t("Available as add-ons")}</h3>
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

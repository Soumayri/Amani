import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Plans = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const plans = [
    {
      name: "Basic Plan",
      price: "29.90€",
      features: [
        { label: "Key Holding - Secure key storage", href: "/services/key-holding" },
        { label: "Mail Collection - Mail retrieval & safekeeping", href: "/services/mail-collection" },
        { label: "1 Monthly Check - Property inspection with report", href: "/services/monthly-checks" }
      ],
    },
    {
      name: "Standard Plan",
      price: "49.90€",
      features: [
        { label: "Everything in Basic Plan" },
        { label: "2 Monthly Checks - Twice-a-month property inspection", href: "/services/monthly-checks" },
        { label: "Preventive Maintenance - Essential system checks", href: "/services/preventive-maintenance" },
        { label: "Welcome Home Service (Standard) - Pre-arrival home setup", href: "/services/welcome-home" },
        { label: "Priority Support - Faster assistance" }
      ],
    },
    {
      name: "Premium Plan",
      price: "99.90€",
      features: [
        { label: "Everything in Standard Plan" },
        { label: "Free Property Insurance Assistance", href: "/services" },
        { label: "Welcome Home Service (Premium) - Deep cleaning & home stocking", href: "/services/welcome-home" },
        { label: "1 Free Airport Transfer per year", href: "/services/airport-transfers" },
        { label: "1 Free Emergency Dispatch per year" },
        { label: "Extra Keys Stored - Additional security", href: "/services/key-holding" },
        { label: "Faster Response Time - Priority interventions" },
        { label: "Exclusive Perks & VIP Access" }
      ],
      highlight: true,
    },
  ];

  return (
    <div className="plans-page">
      <div className="plans-header">
        <h1>{t("Choose the Right Plan for Your Home")}</h1>
        <p>{t("Flexible subscription plans tailored to your needs and property size.")}</p>
      </div>

      <div className="plans-container">
        {plans.map((plan, index) => (
          <div key={index} className={`plan-card ${plan.highlight ? "highlight" : ""}`}>
            <h2 className="plan-title">{t(plan.name)}</h2>
            <p className="plan-price">{plan.price} <span>/ month</span></p>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>
                  {feature.href ? (
                    <a href={feature.href} className="text-blue-500 hover:underline">
                      {t(feature.label)}
                    </a>
                  ) : (
                    t(feature.label || feature)
                  )}
                </li>
              ))}
            </ul>
            <button
              className="plan-button"
              onClick={() => navigate(`/contact?plan=${encodeURIComponent(plan.name)}`)}
            >
              {t("Subscribe")}
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Plans;

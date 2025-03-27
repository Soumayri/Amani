import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
 // Fichier CSS pour styliser la page

const Plans = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const plans = [
    {
      name: "Basic Plan",
      price: "29.90€",
      features: [
        "Key Holding - Secure key storage",
        "Mail Collection - Mail retrieval & safekeeping",
        "1 Monthly Check - Property inspection with report",
      ],
    },
    {
      name: "Standard Plan",
      price: "49.90€",
      features: [
        "Everything in Basic Plan",
          "2 Monthly Checks - Twice-a-month property inspection",
          "Preventive Maintenance - Essential system checks",
        "Welcome Home Service (Standard) - Pre-arrival home setup",
        "Priority Support - Faster assistance",
        
      ],
    },
    {
      name: "Premium Plan",
      price: "99.90€",
      features: [
        "Everything in Standard Plan",
        "Free Property Insurance Assistance",
        "Welcome Home Service (Premium) - Deep cleaning & home stocking",
        "1 Free Airport Transfer per year",
        "1 Free Emergency Dispatch per year",
        "Extra Keys Stored - Additional security",
        "Faster Response Time - Priority interventions",
        "Exclusive Perks & VIP Access",
      ],
      highlight: true, // Pour mettre en avant l'abonnement Premium
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
                <li key={i}>{t(feature)}</li>
              ))}
            </ul>
            <button className="plan-button" onClick={() => navigate(`/contact?plan=${encodeURIComponent(plan.name)}`)}>
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

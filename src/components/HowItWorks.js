// src/components/HowItWorksSection.js
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaComments, FaFileSignature, FaBroom, FaSyncAlt } from "react-icons/fa";

const HowItWorksSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <FaComments />,
      label: t("Step 1"),
      title: t("Get in touch & tell us about your home"),
      text: t(
        "Reach out on WhatsApp or through our form and tell us where your home is, how often you use it and what you need while you’re abroad."
      ),
    },
    {
      icon: <FaFileSignature />,
      label: t("Step 2"),
      title: t("Choose your membership & sign your contract"),
      text: t(
        "We help you choose between Basic, Standard or Premium, then we sign your membership contract and agree on how you want us to look after your home."
      ),
    },
    {
      icon: <FaBroom />,
      label: t("Step 3"),
      title: t("FreshStart visit & key handover"),
      text: t(
        "We schedule your FreshStart: an initial visit with cleaning, airing and a full check of your home. During this visit, we collect your keys securely and register them in our key holding system."
      ),
    },
    {
      icon: <FaSyncAlt />,
      label: t("Step 4"),
      title: t("Ongoing care while you’re away"),
      text: t(
        "Your membership starts: monthly home checks, seasonal care and reports after each visit. When you need more, we activate add-ons like Welcome Home, ProAccess or Amani Works."
      ),
    },
  ];

  return (
    <section className="how-it-works">
      <div className="how-it-works__inner">
        <p className="how-it-works__eyebrow">
          {t("How it works")}
        </p>

        <h2 className="how-it-works__title">
          {t("From first contact to regular care, step by step.")}
        </h2>

        <p className="how-it-works__lead">
          {t(
            "We keep the process simple and transparent so you always know what happens next and when your membership starts."
          )}
        </p>

        {/* Timeline */}
        <div className="how-it-works__timeline">
          {steps.map((step, index) => (
            <div className="how-it-works__step" key={index}>
              {/* Colonne gauche : juste la ligne verticale */}
              <div className="how-it-works__rail">
                {index !== steps.length - 1 && (
                  <div className="how-it-works__line" />
                )}
              </div>

              {/* Colonne droite : contenu */}
              <div className="how-it-works__step-content">
                <div className="how-it-works__step-header">
                  <span className="how-it-works__step-label">
                    {step.label}
                  </span>
                  <div className="how-it-works__step-icon">
                    {step.icon}
                  </div>
                </div>

                <h3 className="how-it-works__step-title">{step.title}</h3>
                <p className="how-it-works__step-text">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bas de block */}
        <div className="how-it-works__cta">
          <Link to="/plans" className="how-it-works__btn">
            {t("Compare memberships")}
          </Link><br />
          <Link to="/contact" className="how-it-works__link">
            {t("Talk to Amani about your home")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

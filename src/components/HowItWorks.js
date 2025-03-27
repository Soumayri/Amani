import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { FaUserCheck, FaKey, FaShieldAlt, FaTools } from "react-icons/fa"; // Icônes


const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <FaUserCheck className="step-icon" />,
      title: t("Sign Up & Choose Your Plan"),
      description: t("Create your account and select the plan that suits your needs."),
    },
    {
      icon: <FaKey className="step-icon" />,
      title: t("Key Deposit & Security Setup"),
      description: t("We securely collect your keys and activate the property management."),
    },
    {
      icon: <FaShieldAlt className="step-icon" />,
      title: t("Property Monitoring & Maintenance"),
      description: t("Regular inspections and preventive maintenance for your peace of mind."),
    },
    {
      icon: <FaTools className="step-icon" />,
      title: t("Emergency Response & Additional Services"),
      description: t("Need an urgent repair or extra service? We handle everything for you."),
    },
  ];

  return (
    <section className="how-it-works">
      <div className="how-content">
        {/* IMAGE OU ILLUSTRATION À GAUCHE */}
        <div className="how-image">
          <img src="/process-illustration.png" alt="How Amani Works" />
        </div>

        {/* ÉTAPES À DROITE */}
        <div className="how-steps">
          <h2>{t("How It Works")}</h2>
          <p className="how-description">
            {t("A simple, secure, and professional process to keep your property in perfect condition.")}
          </p>
          
          <div className="steps-list">
            {steps.map((step, index) => (
              <div className="step-item" key={index}>
                <div className="step-icon-container">
                  {step.icon}
                  <div className="step-line"></div>
                </div>
                <div className="step-text">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Link to="/plans" className="cta-button">
  Start Your Journey
</Link>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

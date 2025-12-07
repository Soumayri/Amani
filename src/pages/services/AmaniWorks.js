// src/pages/AmaniWorksService.js
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaHammer,
  FaDraftingCompass,
  FaCamera,
  FaClipboardCheck,
  FaUserTie,
} from "react-icons/fa";
import SeoHead from "../../components/SeoHead";
import Navbar from "../../components/Navbar";

const AmaniWorksService = () => {
  const { t } = useTranslation();

  // Toujours arriver en haut de la page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      icon: <FaDraftingCompass />,
      title: t("You tell us what you want to transform"),
      text: t(
        "You explain your project – repainting, bathroom upgrade, new kitchen, built-in furniture – and share your preferences, timing and approximate budget."
      ),
    },
    {
      icon: <FaUserTie />,
      title: t("We find the right contractors and gather quotes"),
      text: t(
        "Based on your project, we consult our network and other professionals, request detailed quotes and shortlist one or two options that match your budget and expectations."
      ),
    },
    {
      icon: <FaHammer />,
      title: t("You choose the quote, we launch and coordinate"),
      text: t(
        "You validate the quote you prefer and the way you want to phase payments. We confirm everything with the contractor and become their main contact on your behalf."
      ),
    },
    {
      icon: <FaCamera />,
      title: t("We supervise on site and control quality until handover"),
      text: t(
        "We visit the site at key stages, share photos and videos, flag problems early, and help you request corrections so that the final result is as close as possible to what you agreed."
      ),
    },
  ];

  return (
    <>
      <Navbar />

      <SeoHead
        titleKey="Amani Works | Remote supervision of renovations in Morocco"
        descriptionKey="With Amani Works, you describe your renovation project, we find the right contractors, present quotes, then coordinate and supervise the work on site in Morocco for you."
        canonical="https://www.amani-services.com/services/amani-works"
      />

      <section className="service service--keyholding">
        <div className="service__inner">
          {/* Eyebrow + header */}
          <p className="service__eyebrow">
            {t("Add-on · Remote supervision for works and renovations")}
          </p>

          <div className="service__header-row">
            <div className="service__header-main">
              <h1 className="service__title">
                {t("Amani Works")}
              </h1>
              <p className="service__lead">
                {t(
                  "With Amani Works, you tell us what you want to change in your home, we find the right artisans, present you with quotes and then supervise the project on site in Morocco on your behalf."
                )}
              </p>

              <div className="service__badges">
                <span className="service__badge">
                  {t("Available for members and non-members")}
                </span>
                <span className="service__badge service__badge--accent">
                  {t("Project fee:")}{" "}
                  <span style={{ fontWeight: 600 }}>25%</span>{" "}
                  {t("of the agreed works budget")}
                </span>
              </div>
            </div>

            {/* Aside – What Amani Works covers */}
            <aside className="service__aside-card">
              <h2 className="service__aside-title">
                {t("What Amani Works covers")}
              </h2>
              <ul className="service__list">
                <li>
                  <FaDraftingCompass />
                  <span>
                    {t("Clarifying your project, priorities and budget")}
                  </span>
                </li>
                <li>
                  <FaUserTie />
                  <span>
                    {t("Sourcing and shortlisting artisans and contractors")}
                  </span>
                </li>
                <li>
                  <FaHammer />
                  <span>
                    {t("Collecting one or two detailed quotes for you to choose from")}
                  </span>
                </li>
                <li>
                  <FaCamera />
                  <span>
                    {t("On-site supervision with photos, videos and regular updates")}
                  </span>
                </li>
                <li>
                  <FaClipboardCheck />
                  <span>
                    {t("Checks at key stages and before final payment")}
                  </span>
                </li>
              </ul>

              <p className="service__aside-note">
                {t("Our fee is set at")}{" "}
                <span style={{ fontWeight: 600 }}>25%</span>{" "}
                {t(
                  "of the works budget we agree together before starting. This covers sourcing contractors, coordination, supervision visits in Casablanca and reporting throughout the project."
                )}
              </p>
            </aside>
          </div>

          {/* Section – How Amani Works works */}
          <div className="service__section">
            <h2 className="service__section-title">
              {t("How Amani Works works")}
            </h2>
            <p className="service__section-lead">
              {t(
                "Instead of trying to run a renovation from abroad with random photos on WhatsApp, Amani becomes your project partner on the ground, from first idea to final checks."
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
{/* Statement de positionnement */}
<p className="service__footer-note">
  {t(
    "Amani is not a contractor — we represent your interests only. Our role is to make sure the work you pay for is done properly, transparently, and safely while you're abroad."
  )}
</p>

          {/* CTA bas de page */}
          <div className="service__cta">
            <Link to="/contact" className="service__btn">
              {t("Talk to Amani about your renovation project")}
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

export default AmaniWorksService;

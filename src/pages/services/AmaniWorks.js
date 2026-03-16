// src/pages/AmaniWorksService.js
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
 
  FaDraftingCompass,
  FaCamera,
  FaClipboardCheck,
  FaUserTie,
  FaFileInvoiceDollar,
  FaShieldAlt,
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
      title: t("You describe your project"),
      text: t(
        "Whether Amani spotted something during a home check or you have decided it is time to renovate, you describe what you want: repainting, bathroom upgrade, kitchen, built-in furniture, full renovation. We note your budget, priorities and timeline."
      ),
    },
    {
      icon: <FaUserTie />,
      title: t("We select the right artisan – or work with yours"),
      text: t(
        "We propose a trusted artisan from our network, or if you already have a professional you trust, we work with them directly. Either way, Amani collects the detailed quote on your behalf."
      ),
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: t("One single transparent quote lands in your inbox"),
      text: t(
        "We consolidate the artisan's quote, add Amani's 20% coordination and supervision fee and send you a single, clear quote. You pay Amani. Amani pays the artisan. No direct negotiations, no separate invoices, no surprises."
      ),
    },
    {
      icon: <FaCamera />,
      title: t("We supervise the site with daily simplified reporting"),
      text: t(
        "We are on-site at key stages of the project – presence adapted to the size and complexity of the works. You receive a simplified daily update with photos, progress notes and any issues flagged to you immediately."
      ),
    },
    {
      icon: <FaShieldAlt />,
      title: t("You confirm the work is done. The artisan gets paid."),
      text: t(
        "The artisan is not paid a single dirham until you confirm in writing that the work is complete and satisfactory. Amani holds the payment throughout the project. It is the protection you would want if you were standing on-site yourself."
      ),
    },
  ];

  return (
    <>
      <Navbar />

      <SeoHead
        titleKey="Amani Works | Remote supervision of renovations in Morocco"
        descriptionKey="With Amani Works, you describe your renovation project, we source the right artisan, send one transparent quote and supervise on-site in Casablanca. The artisan is only paid after your written confirmation."
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
                  "With Amani Works, you describe your renovation project, we find the right artisan or work with yours, send you a single transparent quote and supervise the works on-site in Morocco on your behalf. The artisan is not paid until you confirm the work is done."
                )}
              </p>

              <div className="service__badges">
                <span className="service__badge">
                  {t("Available for members and non-members")}
                </span>
                <span className="service__badge service__badge--accent">
                  {t("Project fee:")}{" "}
                  <span style={{ fontWeight: 600 }}>20%</span>{" "}
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
                    {t("Sourcing a trusted artisan or working with your chosen professional")}
                  </span>
                </li>
                <li>
                  <FaFileInvoiceDollar />
                  <span>
                    {t("One single quote: artisan cost + 20% Amani fee, transparent and agreed upfront")}
                  </span>
                </li>
                <li>
                  <FaCamera />
                  <span>
                    {t("On-site supervision with daily photo updates and simplified reporting")}
                  </span>
                </li>
                <li>
                  <FaClipboardCheck />
                  <span>
                    {t("Quality checks at key stages and before final handover")}
                  </span>
                </li>
                <li>
                  <FaShieldAlt />
                  <span>
                    {t("Payment protection: artisan is paid only after your written confirmation of completion")}
                  </span>
                </li>
              </ul>

              <p className="service__aside-note">
                {t("Our fee is")}{" "}
                <span style={{ fontWeight: 600 }}>20%</span>{" "}
                {t(
                  "of the works budget, agreed before starting. This covers artisan sourcing, coordination, on-site supervision and full reporting throughout the project. The artisan receives payment only after you confirm the work in writing."
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
                "Instead of managing a renovation from abroad with random WhatsApp photos, Amani becomes your project partner on the ground – from first idea to final payment release."
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
              "Amani is not a contractor – we represent your interests only. Our role is to make sure the work you pay for is done properly, transparently, and safely while you are abroad. The work you would have done yourself if you were on-site."
            )}
          </p>

          {/* Devis supplémentaire */}
          <p className="service__footer-note">
            {t(
              "If once works begin the scope expands or additional issues are discovered on-site, a supplementary quote is prepared and submitted to you for approval before any additional work proceeds. Nothing is done without your written agreement."
            )}
          </p>

          {/* Lien croisé */}
          <p className="service__footer-note">
            {t("For smaller interventions that don't require a full project – a plumber, an electrician, a technician – our")}{" "}
            <Link to="/services/pro-access" className="service__link-inline">
              {t("ProAccess")}
            </Link>
            {t(" service handles the access and supervision without the coordination fee.")}
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

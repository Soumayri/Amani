import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SeoHead from "../components/SeoHead";
import ContactRequestForm from "../components/contact/ContactRequestForm";

const WHATSAPP_PHONE = "33670779256";

const Contact = () => {
  const { t } = useTranslation();

  const whatsappHref = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    t("Hello, I'd like to know more about Amani Home services.")
  )}`;

  function scrollToForm() {
    const el = document.getElementById("contact-request-form");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <SeoHead
        titleKey="Contact Amani Home | Home Care in Morocco for Owners Abroad"
        descriptionKey="Tell us about your home in Morocco and let Amani Home recommend the right care plan for regular checks, key holding, seasonal care and arrival preparation."
        canonical="https://www.amani-services.com/contact"
      />
      <ScrollToTop />
      <Navbar />

      <section className="contact-hero">
        <div className="contact-hero__card">
          <h1 className="contact-hero__title">{t("Tell us about your home")}</h1>
          <p className="contact-hero__subtitle">
            {t("A few details, and we'll know exactly how to take care of it.")}
          </p>
          <p className="contact-hero__intro">
            {t(
              "Share a little about you, your property in Morocco and what matters most to you. Amani Home will use it to recommend the right level of care — no commitment, no pressure."
            )}
          </p>
          <div className="contact-hero__actions">
            <button
              type="button"
              className="contact-hero__btn contact-hero__btn--primary"
              onClick={scrollToForm}
            >
              {t("Start my request")}
            </button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-hero__btn contact-hero__btn--ghost"
            >
              {t("Chat on WhatsApp")}
            </a>
          </div>
        </div>
      </section>

      <section id="contact-request-form" className="contact-section">
        <div className="contact-section__inner">
          <ContactRequestForm />
        </div>
      </section>

      <section className="contact-whatsapp-block">
        <div className="contact-whatsapp-block__inner">
          <h2 className="contact-whatsapp-block__title">{t("Prefer to speak directly?")}</h2>
          <p className="contact-whatsapp-block__text">
            {t("Send us a message on WhatsApp and one of our advisors will get back to you shortly.")}
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-whatsapp-block__btn"
          >
            {t("Chat on WhatsApp")}
          </a>
        </div>
      </section>

      <section className="contact-next-steps">
        <div className="contact-next-steps__inner">
          <h2 className="contact-next-steps__title">{t("What happens next?")}</h2>
          <div className="contact-next-steps__timeline">
            <div className="contact-next-steps__step">
              <span className="contact-next-steps__icon">1</span>
              <h3 className="contact-next-steps__step-title">{t("We review your request")}</h3>
              <p className="contact-next-steps__step-text">
                {t("Our team looks at your property and your situation to understand what you really need.")}
              </p>
            </div>
            <div className="contact-next-steps__step">
              <span className="contact-next-steps__icon">2</span>
              <h3 className="contact-next-steps__step-title">{t("We recommend a care plan")}</h3>
              <p className="contact-next-steps__step-text">
                {t("We suggest the Silver, Gold or Platinum plan that fits your home best — explained clearly, with no obligation.")}
              </p>
            </div>
            <div className="contact-next-steps__step">
              <span className="contact-next-steps__icon">3</span>
              <h3 className="contact-next-steps__step-title">{t("We get started together")}</h3>
              <p className="contact-next-steps__step-text">
                {t("Once you're ready, we set everything up so your home is looked after, even from a distance.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;

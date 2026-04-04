// src/components/Hero.js
import React from "react";
import { useTranslation } from "react-i18next";

const logoAmani = "/LogoAmani.webp";

const Hero = () => {
  const { t } = useTranslation();

  const handleViewPlans = () => {
    const section = document.getElementById("services-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    const phone = "+33670779256";
    const message = encodeURIComponent(
      "Hi Amani, I’d like to know more about your home care memberships."
    );
    window.open(`https://wa.me/${phone.replace("+", "")}?text=${message}`, "_blank");
  };

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url("/hero.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="hero__overlay" />

      <div className="hero__inner">
        {/* Carte centrale */}
        <div className="hero__card hero__card--animated">
          {/* Logo */}
          <img src={logoAmani} alt="Amani Logo" className="hero__logo" />

          {/* Localisation */}
          <p className="hero__location">{t("Amani Home · Casablanca")}</p>

          {/* Titre */}
          <h1 className="hero__title">
            {t("We take care of your home in")}{" "}
            <span className="hero__highlight">{t("Morocco")}</span>
            <br />
            <span className="hero__subtitle">{t("when you can’t be there.")}</span>
          </h1>

          {/* Paragraphe d’accroche */}
          <p className="hero__text">
            {t(
              "We check, maintain and follow your home throughout the year, with regular visits and detailed reports — so you always know what’s happening, even from abroad."
            )}
          </p>

          {/* Slogan */}
          <p className="hero__tagline">{t("Welcome back to peace of mind.")}</p>

          {/* Boutons */}
          <div className="hero__buttons">
            <button
              type="button"
              onClick={handleViewPlans}
              className="hero__btn hero__btn--primary"
            >
              {t("See how it works")}
            </button>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="hero__btn hero__btn--ghost"
            >
              {t("Start a conversation")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

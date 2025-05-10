import React from "react";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div className="about-page">
        {/* 🔹 Header avec image */}
        <div className="about-header"style={{
    background: `url("/img/aboutBanner.webp") center/cover no-repeat`,
  }}>
          <div className="about-overlay">
            <h1>{t("About Us")}</h1>
            <p>{t("Your trusted property partner in Morocco")}</p>
          </div>
        </div>

        {/* 🔹 Who We Are */}
        <div className="about-card">
          <h2>{t("Who We Are")}</h2>
          <p>
            <strong>Amani</strong>{" "}
            {t(
              "is your reliable local partner for remote property management in Morocco, built especially for Moroccans living abroad (MRE) and international homeowners."
            )}{" "}
            {t("We make sure distance never becomes a barrier to peace of mind.")}
          </p>
          <p>
            {t(
              "Whether you're managing a vacation home, an inherited property, or a real estate investment, we care for your home as if it were our own — with transparency, trust, and local expertise."
            )}
          </p>
        </div>

        {/* 🔹 Our Mission */}
        <div className="about-card">
          <h2>{t("Our Mission")}</h2>
          <p>
            {t(
              "At Amani, we believe that every homeowner deserves to feel supported and stress-free — no matter where they are."
            )}{" "}
            <strong>
              {t(
                "Our mission is to provide reliable, transparent, and human-centered services that simplify your life and protect your property."
              )}
            </strong>
          </p>
        </div>

        {/* 🔹 Our Values */}
        <div className="about-card">
          <h2>{t("Our Core Values")}</h2>
          <ul className="about-values">
            <li>
              <strong>{t("Trust")}</strong> — {t("We handle your home and keys with care and confidentiality.")}
            </li>
            <li>
              <strong>{t("Responsiveness")}</strong> — {t("Our team is ready to act when you need us.")}
            </li>
            <li>
              <strong>{t("Human Approach")}</strong> — {t("We are real people who listen, advise and act.")}
            </li>
            <li>
              <strong>{t("Excellence")}</strong> — {t("We ensure high-quality service with trusted local partners.")}
            </li>
          </ul>
        </div>

        {/* 🔹 The Team */}
        <div className="about-card">
          <h2>{t("The Team Behind Amani")}</h2>
          <p>
            {t(
              "Led by a new generation of Moroccan entrepreneurs, our team combines local knowledge and global standards."
            )}{" "}
            {t("We select every collaborator based on values, professionalism, and reliability.")}
          </p>
        </div>

        {/* 🔹 Why We Do It */}
        <div className="about-card">
          <h2>{t("Why We Do What We Do")}</h2>
          <p>
            {t("Because we've been there. Because we’ve seen properties left unmanaged. And because the diaspora deserves better.")}
          </p>
          <p>
            <strong>{t("Amani is the long-term solution that homeowners abroad have been waiting for.")}</strong>
          </p>
        </div>

        {/* 🔹 CTA */}
        <div className="about-card cta">
          <h2>{t("Let’s Take Care of It — Together")}</h2>
          <p>
            {t("Whether you're in Paris, Montreal, Dubai, or Madrid — Amani is your hands, your eyes, and your support in Morocco.")}
          </p>
          <div className="about-buttons">
            <a className="cta-button" href="/services">
              {t("Discover Services")}
            </a>
            <a className="cta-button" href="/contact">
              {t("Get in Touch")}
            </a>
          </div>
        </div>
      </div>

      <Footer /> {/* ✅ Ajout du footer ici */}
    </>
  );
};

export default AboutUs;

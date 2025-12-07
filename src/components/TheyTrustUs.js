// src/components/TheyTrustUs.js
import { useTranslation } from "react-i18next";

const partners = [
  { name: "Attijariwafa Bank", logo: "/partners/Attijariwafa.webp", link: "https://www.attijariwafabank.com/" },
  { name: "Sanlam Maroc", logo: "/partners/Sanlam.webp", link: "https://www.sanlam.ma/" },
];

const numbersData = [
  { value: "20+", label: "Properties Managed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24H", label: "Guaranteed Response Time" },
];

const TheyTrustUs = () => {
  const { t } = useTranslation();

  return (
    <section className="they-trust-us">
      <div className="they-trust-us__inner">

        {/* Eyebrow */}
        <p className="they-trust-us__eyebrow">
          {t("Partnerships & Reputation")}
        </p>

        {/* Title */}
        <h2 className="they-trust-us__title">
          {t("Trusted by key institutions in Morocco")}
        </h2>

        {/* Intro Text */}
        <p className="they-trust-us__lead">
          {t(
            "Banks and insurance companies rely on Amani for reliable home care, transparency and long-term service. Here are some of the partners who trust us."
          )}
        </p>

        {/* PARTNERS GRID */}
        <div className="they-trust-us__partners-grid">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="they-trust-us__partner-card"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="they-trust-us__partner-logo"
                loading="lazy"
              />
            </a>
          ))}
        </div>

        {/* EYEBROW 2 – numbers */}
        <p className="they-trust-us__numbers-eyebrow">
          {t("Amani home in numbers")}
        </p>

        {/* Numbers Title */}
        <h3 className="they-trust-us__numbers-title">
          {t("Numbers that speak for themselves")}
        </h3>

        {/* NUMBERS GRID */}
        <div className="they-trust-us__numbers-grid">
          {numbersData.map((item, index) => (
            <div key={index} className="they-trust-us__number-card">
              <h3 className="they-trust-us__number-value">{item.value}</h3>
              <div className="they-trust-us__number-line"></div>
              <p className="they-trust-us__number-label">{t(item.label)}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TheyTrustUs;


import { useTranslation } from "react-i18next";

// 📌 Liste des partenaires (tu pourras en ajouter d'autres facilement ici)
const partners = [
  { name: "Attijariwafa Bank", logo: "/partners/Attijariwafa.webp", link: "https://www.attijariwafabank.com/" },
  { name: "Sanlam Maroc", logo: "/partners/Sanlam.webp", link: "https://www.sanlam.ma/" },
];

const numbersData = [
    { value: "50+", label: "Properties Managed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24H", label: "Guaranteed Response Time" },
   
  ];
  

const TheyTrustUs = () => {
  const { t } = useTranslation();

  return (
    <section className="they-trust-us">
      <div className="container">
        <h2 className="section-title">{t("They Trust Us")}</h2>

        {/* 🔹 Logos des partenaires */}
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <a key={index} href={partner.link} target="_blank" rel="noopener noreferrer" className="partner-card">
              <img src={partner.logo} alt={partner.name} className="partner-logo" />
            </a>
          ))}
        </div>

        {/* 🔹 Amani en chiffres */}
{/* 🌟 Section "Amani en chiffres" */}
<div className="numbers-section">
  <h2 className="numbers-title">{t("Numbers that speak for themselves")}</h2>

  <div className="numbers-container">
    {numbersData.map((number, index) => (
      <div key={index} className="number-item">
        <h3 className="number-value">{number.value}</h3>
        <div className="number-line"></div> {/* 🔥 Trait sous le chiffre */}
        <p className="number-label">{t(number.label)}</p>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default TheyTrustUs;

import { useTranslation } from "react-i18next";
import { FaShieldAlt, FaTools, FaBolt, FaCogs } from "react-icons/fa"; // Icônes modernes


const WhyAmani = () => {
  const { t } = useTranslation();

  return (
    <section className="why-amani">
      <div className="why-amani-content">
        {/* IMAGE OCCUPANT L’ESPACE GAUCHE */}
        <div className="why-image">
          <img src="/CompoAmani.png" alt="Why Choose Amani" />
        </div>

        {/* TEXTE À DROITE AVEC STYLE ÉLÉGANT */}
        <div className="why-text">
          <h2>{t("Why Choose Amani?")}</h2>
          <p className="why-description">
            {t("Your property is more than just a place, it's your home. Amani ensures it remains safe, maintained, and ready whenever you need it.")}
          </p>

          <div className="why-list">
            <div className="why-item">
              <FaShieldAlt className="why-icon" />
              <span>{t("Trusted and secure property management")}</span>
            </div>
            <div className="why-item">
              <FaTools className="why-icon" />
              <span>{t("Regular maintenance and inspections")}</span>
            </div>
            <div className="why-item">
              <FaBolt className="why-icon" />
              <span>{t("Fast response to emergencies")}</span>
            </div>
            <div className="why-item">
              <FaCogs className="why-icon" />
              <span>{t("Tailor-made services that adapt to your needs")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAmani;

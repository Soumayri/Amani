import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SeoHead from "../components/SeoHead";
import { FaKey, FaEnvelope, FaHome, FaTools, FaShieldAlt, FaCar } from "react-icons/fa";

const Services = () => {
  const { t } = useTranslation();

  // Liste des services avec leurs routes
  const servicesList = [
    { icon: <FaKey className="service-icon" aria-label={t("Keys Care")} />, title: t("Keys Care"), path: "/services/key-holding" },
    { icon: <FaEnvelope className="service-icon" aria-label={t("Mail Collection")} />, title: t("Mail Collection"), path: "/services/mail-collection" },
    { icon: <FaHome className="service-icon" aria-label={t("Monthly Checks")} />, title: t("Monthly Checks"), path: "/services/monthly-checks" },
    { icon: <FaTools className="service-icon" aria-label={t("Preventive Maintenance")} />, title: t("Preventive Maintenance"), path: "/services/preventive-maintenance" },
    { icon: <FaShieldAlt className="service-icon" aria-label={t("Welcome Home Service")} />, title: t("Welcome Home Service"), path: "/services/welcome-home" },
    { icon: <FaCar className="service-icon" aria-label={t("Airport Transfers")} />, title: t("Airport Transfers"), path: "/services/airport-transfers" }
  ];

  return (
    <>
      <SeoHead
        titleKey="Services de Gestion Immobilière | AMANI HOME"
        descriptionKey="ServicesMetaDescription"
        canonical="https://www.amani-services.com/services"
      />
      <section className="services" id="services">
        <h1>{t("Discover our services tailored to your needs")}</h1>
        <div className="services-container">
          {servicesList.map((service, index) => (
            <Link to={service.path} key={index} className="service-card">
              {service.icon}
              <h2>{service.title}</h2>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
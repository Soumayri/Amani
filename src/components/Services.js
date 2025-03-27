import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // ✅ Utilisation de Link pour navigation

import { FaKey, FaEnvelope, FaHome, FaTools, FaShieldAlt, FaCar } from "react-icons/fa";

const Services = () => {
  const { t } = useTranslation();

  // Liste des services avec leurs routes
  const servicesList = [
    { icon: <FaKey className="service-icon" />, title: t("Keys Holding"), path: "/services/key-holding" },
    { icon: <FaEnvelope className="service-icon" />, title: t("Mail Collection"), path: "/services/mail-collection" },
    { icon: <FaHome className="service-icon" />, title: t("Monthly Checks"), path: "/services/monthly-checks" },
    { icon: <FaTools className="service-icon" />, title: t("Preventive Maintenance"), path: "/services/preventive-maintenance" },
    { icon: <FaShieldAlt className="service-icon" />, title: t("Welcome Home Service"), path: "/services/welcome-home" },
    { icon: <FaCar className="service-icon" />, title: t("Airport Transfers"), path: "/services/airport-transfers" }
  ];

  return (
    <section className="services" id="services">
      <h2>{t("Discover our services tailored to your needs")}</h2>
      <div className="services-container">
        {servicesList.map((service, index) => (
          <Link to={service.path} key={index} className="service-card">
            {service.icon}
            <h3>{service.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;

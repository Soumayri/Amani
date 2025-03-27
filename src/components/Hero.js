import { useTranslation } from "react-i18next";
const logoAmani = "/logoAmani.png"; // Chemin vers le fichier dans public


const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero" style={{
      background: `url("/hero-image.webp") center/cover no-repeat`,
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      backgroundBlendMode: "darken",
    }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <img src={logoAmani} alt="Amani Logo" className="hero-logo" />
        <h1 className="hero-slogan">{t("The Key to Your Comfort")}</h1>
        <a href="/services" className="hero-btn">
          {t("Discover Services")}
        </a>
        <a href="/plans" className="hero-btn">
          {t("Discover Plans")}
        </a>
      </div>
    </section>
  );
};

export default Hero;

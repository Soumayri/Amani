import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const SeoHead = ({ titleKey, descriptionKey, canonical }) => {
  const { t, i18n } = useTranslation();

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{t(titleKey)}</title>
      <meta name="description" content={t(descriptionKey)} />
      <meta property="og:title" content={t(titleKey)} />
      <meta property="og:description" content={t(descriptionKey)} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={i18n.language === "fr" ? "fr_FR" : "en_US"} />
      <meta property="og:site_name" content="AMANI HOME" />
      <meta property="og:image" content="https://www.amani-services.com/LogoAmaniFull.webp" />
      <meta property="og:url" content={canonical || window.location.href} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t(titleKey)} />
      <meta name="twitter:description" content={t(descriptionKey)} />
      <meta name="twitter:image" content="https://www.amani-services.com/LogoAmaniFull.webp" />
      <link rel="canonical" href={canonical || window.location.href} />
    </Helmet>
  );
};

export default SeoHead;
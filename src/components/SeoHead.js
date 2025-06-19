
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const SeoHead = ({ titleKey, descriptionKey }) => {
  const { t, i18n } = useTranslation();

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{t(titleKey)}</title>
      <meta name="description" content={t(descriptionKey)} />
      <meta property="og:title" content={t(titleKey)} />
      <meta property="og:description" content={t(descriptionKey)} />
    </Helmet>
  );
};

export default SeoHead;

// src/components/SeoHead.js
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const SeoHead = ({ titleKey, descriptionKey, canonical }) => {
  const { t, i18n } = useTranslation();

  const title = t(titleKey);
  const description = t(descriptionKey);

  // URL canonique sécurisée (évite les erreurs côté build/SSR)
  const resolvedCanonical =
    canonical ||
    (typeof window !== "undefined"
      ? window.location.href
      : "https://www.amani-services.com/");

  // Locale principale + alternatives (tu peux ajuster selon les langues activées)
  const currentLang = i18n.language || "en";
  const ogLocale =
    currentLang.startsWith("fr")
      ? "fr_FR"
      : currentLang.startsWith("es")
      ? "es_ES"
      : currentLang.startsWith("de")
      ? "de_DE"
      : currentLang.startsWith("it")
      ? "it_IT"
      : "en_US";

  const ogLocaleAlternates = ["fr_FR", "en_US", "es_ES", "it_IT", "de_DE"].filter(
    (loc) => loc !== ogLocale
  );

  const siteUrl = "https://www.amani-services.com";
  const defaultImage = `${siteUrl}/LogoAmaniFull.webp`;

  // -------- JSON-LD schema.org --------
  const schemaOrgJSON = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "Amani Home",
        "description":
          "Remote home care, key holding, home checks and seasonal care for properties in Morocco.",
        "inLanguage": currentLang,
        "publisher": {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "Amani Home",
        "url": siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/LogoAmaniFull.webp`,
        },
        "email": "contact.amani.home@gmail.com",
        "telephone": "+33 670 779 256",
        "sameAs": [
          "https://www.instagram.com/amani.home.services/",
        ],
      },
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": `${siteUrl}/#localbusiness`,
        "name": "Amani Home – Remote home care in Morocco",
        "url": siteUrl,
        "image": `${siteUrl}/testhero.jpg`,
        "description":
          "Amani Home looks after your property in Casablanca with secure key holding, regular home checks, seasonal care and on-demand services while you live or travel abroad.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "29 Bd Lalla Yacout",
          "addressLocality": "Casablanca",
          "addressCountry": "MA",
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Casablanca",
          },
        ],
      },
    ],
  };

  return (
    <Helmet htmlAttributes={{ lang: currentLang }}>
      {/* 🔹 Title & description */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* 🔹 Canonical */}
      <link rel="canonical" href={resolvedCanonical} />

      {/* 🔹 Robots (par défaut index/follow) */}
      <meta name="robots" content="index,follow" />

      {/* 🔹 Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Amani Home" />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:locale" content={ogLocale} />
      {ogLocaleAlternates.map((loc) => (
        <meta key={loc} property="og:locale:alternate" content={loc} />
      ))}

      {/* 🔹 Twitter cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />

      {/* 🔹 Hreflang basique (tu peux affiner plus tard) */}
      <link rel="alternate" href={siteUrl} hrefLang="x-default" />
      <link rel="alternate" href={siteUrl} hrefLang="en" />
      <link rel="alternate" href={siteUrl + "/?lang=fr"} hrefLang="fr" />
      <link rel="alternate" href={siteUrl + "/?lang=es"} hrefLang="es" />
      <link rel="alternate" href={siteUrl + "/?lang=it"} hrefLang="it" />
      <link rel="alternate" href={siteUrl + "/?lang=de"} hrefLang="de" />

      {/* 🔹 JSON-LD schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSON)}
      </script>
    </Helmet>
  );
};

export default SeoHead;

// src/portal/components/PortalLangSwitcher.js
import React from "react";
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "it", label: "IT" },
];

const PortalLangSwitcher = () => {
  const { i18n } = useTranslation();
  const current = (i18n.language || "en").slice(0, 2);

  return (
    <nav
      className="portal-lang-switcher"
      aria-label="Language switcher"
    >
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => i18n.changeLanguage(code)}
          className={`portal-lang-switcher__btn${
            current === code ? " portal-lang-switcher__btn--active" : ""
          }`}
          aria-pressed={current === code}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};

export default PortalLangSwitcher;

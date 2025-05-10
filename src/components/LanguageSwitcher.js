import React from "react";

const LanguageSwitcher = () => {
  const switchLanguage = (langCode) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div className="language-switcher">
      <button onClick={() => switchLanguage("en")}>🇬🇧 English</button>
      <button onClick={() => switchLanguage("fr")}>🇫🇷 Français</button>
          <button onClick={() => switchLanguage("es")}>🇪🇸 Español</button>
          <button onClick={() => switchLanguage("it")}>🇪🇸 Italiano</button>
      <button onClick={() => switchLanguage("ar")}>🇲🇦 عربي</button>
    </div>
  );
};

export default LanguageSwitcher;

import React from "react";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "../../i18n";
import "../../style/styles/languageSwitcher.css";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const current = i18n.resolvedLanguage || i18n.language;

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div className="language-switcher" role="group" aria-label={t("language.label")}>
      {SUPPORTED_LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={`lang-btn${current === code ? " active" : ""}`}
          aria-pressed={current === code}
          onClick={() => changeLanguage(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

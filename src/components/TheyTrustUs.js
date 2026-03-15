// src/components/TheyTrustUs.js
import { useTranslation } from "react-i18next";

const standardsData = [
  {
    value: "7j",
    label: "FreshStart guaranteed",
  },
  {
    value: "Right away",
    label: "Amani Report after each visit",
  },
  {
    value: "10+",
    label: "Photos per home check",
  },
];

const TheyTrustUs = () => {
  const { t } = useTranslation();

  return (
    <section className="they-trust-us">
      <div className="they-trust-us__inner">

        {/* Eyebrow */}
        <p className="they-trust-us__eyebrow">
          {t("Service standards")}
        </p>

        {/* Title */}
        <h2 className="they-trust-us__title">
          {t("What every membership guarantees")}
        </h2>

        {/* Lead */}
        <p className="they-trust-us__lead">
          {t(
            "Every Amani membership runs on a structured process so you always know what happens, when and how. These are the commitments included in every plan from day one."
          )}
        </p>

        {/* Standards grid */}
        <div className="they-trust-us__numbers-grid">
          {standardsData.map((item, index) => (
            <div key={index} className="they-trust-us__number-card">
              <h3 className="they-trust-us__number-value">{t(item.value)}</h3>
              <div className="they-trust-us__number-line"></div>
              <p className="they-trust-us__number-label">{t(item.label)}</p>
            </div>
          ))}
        </div>

        {/* Alert note */}
        <p className="they-trust-us__numbers-eyebrow" style={{ marginTop: "2rem", fontStyle: "italic", opacity: 0.85 }}>
          {t("If we notice anything unusual during a visit, we send a WhatsApp alert with photos before the written report.")}
        </p>

      </div>
    </section>
  );
};

export default TheyTrustUs;

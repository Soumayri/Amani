import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import StyledSelect from "./StyledSelect";
import SelectCards from "./SelectCards";
import {
  PREFERRED_LANGUAGE_OPTIONS,
  PROPERTY_TYPE_OPTIONS,
  VISIT_FREQUENCY_OPTIONS,
  MAIN_CONCERN_OPTIONS,
  CARE_LEVEL_OPTIONS,
  YES_SOMETIMES_NO_NOTSURE_OPTIONS,
  AMANI_WORKS_OPTIONS,
  START_TIMELINE_OPTIONS,
  PLAN_QUERY_TO_CARE_LEVEL,
} from "./contactFormOptions";
import { computeRecommendedPlanHint } from "../../utils/contactPlanHint";
import {
  submitContactRequest,
  buildWhatsAppUrl,
} from "../../utils/contactSubmission";

const initialFormState = {
  fullName: "",
  whatsapp: "",
  email: "",
  country: "",
  preferredLanguage: "",
  city: "",
  district: "",
  propertyType: "",
  visitFrequency: "",
  mainConcern: "",
  careLevel: "",
  welcomeHome: "",
  proAccess: "",
  amaniWorks: "",
  startTimeline: "",
  message: "",
};

const stepsMeta = [
  { id: "client", requiredFields: ["fullName", "whatsapp", "email", "country", "preferredLanguage"] },
  { id: "property", requiredFields: ["city", "district", "propertyType"] },
  { id: "situation", requiredFields: ["visitFrequency"] },
  { id: "concern", requiredFields: ["mainConcern"] },
  { id: "careLevel", requiredFields: ["careLevel"] },
  { id: "welcomeHome", requiredFields: ["welcomeHome"] },
  { id: "proAccess", requiredFields: ["proAccess"] },
  { id: "amaniWorks", requiredFields: ["amaniWorks"] },
  { id: "timeline", requiredFields: ["startTimeline"] },
];

function ContactRequestForm() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const [formState, setFormState] = useState(initialFormState);
  const [currentStep, setCurrentStep] = useState(0);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [showStepError, setShowStepError] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [deliveredVia, setDeliveredVia] = useState("endpoint");

  // Preserve the /plans -> /contact?plan=Silver|Gold|Platinum deep link by
  // pre-selecting a sensible care level, without skipping the step.
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const plan = params.get("plan");
    if (plan && PLAN_QUERY_TO_CARE_LEVEL[plan]) {
      setFormState((prev) => ({ ...prev, careLevel: PLAN_QUERY_TO_CARE_LEVEL[plan] }));
    }
  }, [location.search]);

  const totalSteps = stepsMeta.length;
  const progressPercent = useMemo(
    () => Math.round(((currentStep + 1) / totalSteps) * 100),
    [currentStep, totalSteps]
  );

  function handleTextChange(event) {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  }

  function handleCardChange(name, value) {
    setFormState((prev) => ({ ...prev, [name]: value }));
    setShowStepError(false);
  }

  function isStepValid(stepIndex) {
    const { requiredFields } = stepsMeta[stepIndex];
    return requiredFields.every((field) => String(formState[field] || "").trim() !== "");
  }

  function handleNext() {
    if (!isStepValid(currentStep)) {
      setShowStepError(true);
      return;
    }
    setShowStepError(false);
    setCurrentStep((step) => Math.min(step + 1, totalSteps - 1));
  }

  function handleBack() {
    setShowStepError(false);
    setCurrentStep((step) => Math.max(step - 1, 0));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!isStepValid(currentStep)) {
      setShowStepError(true);
      return;
    }

    setStatus("loading");

    try {
      const recommendedPlanHint = computeRecommendedPlanHint({
        careLevel: formState.careLevel,
        welcomeHome: formState.welcomeHome,
        proAccess: formState.proAccess,
        amaniWorks: formState.amaniWorks,
        mainConcern: formState.mainConcern,
      });

      const payload = {
        createdAt: new Date().toISOString(),
        fullName: formState.fullName,
        whatsapp: formState.whatsapp,
        email: formState.email,
        country: formState.country,
        preferredLanguage: formState.preferredLanguage,
        city: formState.city,
        district: formState.district,
        propertyType: formState.propertyType,
        visitFrequency: formState.visitFrequency,
        mainConcern: formState.mainConcern,
        careLevel: formState.careLevel,
        welcomeHomeNeed: formState.welcomeHome,
        proAccessNeed: formState.proAccess,
        amaniWorksNeed: formState.amaniWorks,
        startTimeline: formState.startTimeline,
        message: formState.message,
        recommendedPlanHint,
      };

      const result = await submitContactRequest(payload);
      const url = buildWhatsAppUrl(payload);
      setWhatsappUrl(url);
      setStatus("success");
      setDeliveredVia(result && result.ok ? "endpoint" : "whatsapp-fallback");
      // WhatsApp is no longer opened automatically: it stays reserved for
      // quick, direct requests. The qualification form is delivered
      // silently (email + Amani Board) and WhatsApp remains an optional,
      // user-initiated link on the success screen below.
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Amani contact form: unexpected submission error", error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="contact-result contact-result--success">
        <h2 className="contact-result__title">{t("Request received")}</h2>
        <p className="contact-result__text">
          {deliveredVia === "endpoint"
            ? t(
                "Thank you. Your request has been sent to our team — we'll review it and get back to you shortly. If you'd like to speak with us right away, you can also continue on WhatsApp."
              )
            : t(
                "Thank you. Your request has been prepared — continue on WhatsApp so our team can confirm the details with you directly."
              )}
        </p>
        <div className="contact-result__actions">
          <a
            className="contact-form__btn contact-form__btn--primary"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("Continue on WhatsApp")}
          </a>
          <button
            type="button"
            className="contact-form__btn contact-form__btn--ghost"
            onClick={() => navigate("/")}
          >
            {t("Back to home")}
          </button>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="contact-result contact-result--error">
        <h2 className="contact-result__title">{t("Something went wrong")}</h2>
        <p className="contact-result__text">
          {t("Please try again, or reach us directly on WhatsApp.")}
        </p>
        <div className="contact-result__actions">
          <button
            type="button"
            className="contact-form__btn contact-form__btn--primary"
            onClick={() => setStatus("idle")}
          >
            {t("Try again")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__progress">
        <div className="contact-form__progress-bar">
          <div
            className="contact-form__progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="contact-form__progress-label">
          {t("Step {{current}} of {{total}}", { current: currentStep + 1, total: totalSteps })}
        </span>
      </div>

      <div className="contact-form__step">
        {currentStep === 0 && (
          <>
            <h2 className="contact-form__step-title">{t("Tell us about you")}</h2>
            <div className="contact-form__grid">
              <label className="contact-form__field">
                <span>{t("Full name")}</span>
                <input
                  type="text"
                  name="fullName"
                  value={formState.fullName}
                  onChange={handleTextChange}
                  required
                />
              </label>
              <label className="contact-form__field">
                <span>{t("WhatsApp number")}</span>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formState.whatsapp}
                  onChange={handleTextChange}
                  required
                />
              </label>
              <label className="contact-form__field">
                <span>{t("Email")}</span>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleTextChange}
                  required
                />
              </label>
              <label className="contact-form__field">
                <span>{t("Country")}</span>
                <input
                  type="text"
                  name="country"
                  value={formState.country}
                  onChange={handleTextChange}
                  required
                />
              </label>
              <label className="contact-form__field">
                <span>{t("Preferred language")}</span>
                <StyledSelect
                  id="preferredLanguage"
                  name="preferredLanguage"
                  value={formState.preferredLanguage}
                  onChange={handleTextChange}
                  options={PREFERRED_LANGUAGE_OPTIONS}
                  required
                />
              </label>
            </div>
          </>
        )}

        {currentStep === 1 && (
          <>
            <h2 className="contact-form__step-title">{t("Tell us about your property")}</h2>
            <div className="contact-form__grid">
              <label className="contact-form__field">
                <span>{t("City")}</span>
                <input
                  type="text"
                  name="city"
                  value={formState.city}
                  onChange={handleTextChange}
                  required
                />
              </label>
              <label className="contact-form__field">
                <span>{t("District")}</span>
                <input
                  type="text"
                  name="district"
                  value={formState.district}
                  onChange={handleTextChange}
                  required
                />
              </label>
            </div>
            <p className="contact-form__label">{t("Property type")}</p>
            <SelectCards
              name="propertyType"
              options={PROPERTY_TYPE_OPTIONS}
              value={formState.propertyType}
              onChange={handleCardChange}
            />
          </>
        )}

        {currentStep === 2 && (
          <>
            <h2 className="contact-form__step-title">{t("How often do you visit your property?")}</h2>
            <SelectCards
              name="visitFrequency"
              options={VISIT_FREQUENCY_OPTIONS}
              value={formState.visitFrequency}
              onChange={handleCardChange}
            />
          </>
        )}

        {currentStep === 3 && (
          <>
            <h2 className="contact-form__step-title">{t("What's your main concern right now?")}</h2>
            <SelectCards
              name="mainConcern"
              options={MAIN_CONCERN_OPTIONS}
              value={formState.mainConcern}
              onChange={handleCardChange}
            />
          </>
        )}

        {currentStep === 4 && (
          <>
            <h2 className="contact-form__step-title">{t("How often would you like us to check on your home?")}</h2>
            <SelectCards
              name="careLevel"
              options={CARE_LEVEL_OPTIONS}
              value={formState.careLevel}
              onChange={handleCardChange}
            />
          </>
        )}

        {currentStep === 5 && (
          <>
            <h2 className="contact-form__step-title">{t("Would you like someone to welcome you on arrival?")}</h2>
            <p className="contact-form__hint">
              {t("Welcome Home is included in our Gold and Platinum plans.")}
            </p>
            <SelectCards
              name="welcomeHome"
              options={YES_SOMETIMES_NO_NOTSURE_OPTIONS}
              value={formState.welcomeHome}
              onChange={handleCardChange}
            />
          </>
        )}

        {currentStep === 6 && (
          <>
            <h2 className="contact-form__step-title">{t("Would you like priority access to trusted professionals?")}</h2>
            <p className="contact-form__hint">
              {t("ProAccess connects you with vetted professionals whenever you need one.")}
            </p>
            <SelectCards
              name="proAccess"
              options={YES_SOMETIMES_NO_NOTSURE_OPTIONS}
              value={formState.proAccess}
              onChange={handleCardChange}
            />
          </>
        )}

        {currentStep === 7 && (
          <>
            <h2 className="contact-form__step-title">{t("Do you have any works or renovation needs?")}</h2>
            <p className="contact-form__hint">
              {t("Amani Works manages renovation and repair projects on your behalf.")}
            </p>
            <SelectCards
              name="amaniWorks"
              options={AMANI_WORKS_OPTIONS}
              value={formState.amaniWorks}
              onChange={handleCardChange}
            />
          </>
        )}

        {currentStep === 8 && (
          <>
            <h2 className="contact-form__step-title">{t("When would you like to start?")}</h2>
            <SelectCards
              name="startTimeline"
              options={START_TIMELINE_OPTIONS}
              value={formState.startTimeline}
              onChange={handleCardChange}
            />
            <label className="contact-form__field contact-form__field--textarea">
              <span>{t("Additional message")}</span>
              <textarea
                name="message"
                rows={4}
                value={formState.message}
                onChange={handleTextChange}
                placeholder={t("Anything else you'd like us to know? (optional)")}
              />
            </label>
          </>
        )}

        {showStepError && (
          <p className="contact-form__error">
            {t("Please complete the required fields to continue.")}
          </p>
        )}
      </div>

      <div className="contact-form__actions">
        {currentStep > 0 && (
          <button
            type="button"
            className="contact-form__btn contact-form__btn--ghost"
            onClick={handleBack}
          >
            {t("Back")}
          </button>
        )}

        {currentStep < totalSteps - 1 && (
          <button
            type="button"
            className="contact-form__btn contact-form__btn--primary"
            onClick={handleNext}
          >
            {t("Continue")}
          </button>
        )}

        {currentStep === totalSteps - 1 && (
          <button
            type="submit"
            className="contact-form__btn contact-form__btn--primary"
            disabled={status === "loading"}
          >
            {status === "loading" ? t("Sending...") : t("Send my request")}
          </button>
        )}
      </div>
    </form>
  );
}

export default ContactRequestForm;

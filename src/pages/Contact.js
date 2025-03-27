import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";


const Contact = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const serviceParam = queryParams.get("service");
  const planParam = queryParams.get("plan");

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    propertyAddress: "",
    propertySize: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const prefilledService = serviceParam || planParam || "";
    setForm((prev) => ({ ...prev, service: prefilledService }));
  }, [serviceParam, planParam]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `👋 Hello Amani! \n
Name: ${form.fullName}
Email: ${form.email}
Phone: ${form.phone}
Client address: ${form.address}
Property address: ${form.propertyAddress}
Property size: ${form.propertySize}
Service requested: ${form.service}
Message: ${form.message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/33670779256?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <div className="contact-page">
        <h1>{t("Let's get in touch")}</h1>
        <p className="contact-subtitle">
          {t("Tell us more about your request and we’ll get back to you shortly.")}
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder={t("Full Name")}
            value={form.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("Email")}
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder={t("Phone Number")}
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder={t("Your Address (City, Country)")}
            value={form.address}
            onChange={handleChange}
          />
          <input
            type="text"
            name="propertyAddress"
            placeholder={t("Property Address in Morocco")}
            value={form.propertyAddress}
            onChange={handleChange}
          />
          <input
            type="text"
            name="propertySize"
            placeholder={t("Approximate Size (in m²)")}
            value={form.propertySize}
            onChange={handleChange}
          />
          <input
            type="text"
            name="service"
            placeholder={t("Which service or plan are you interested in?")}
            value={form.service}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows="4"
            placeholder={t("Additional notes (optional)")}
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="contact-submit">
            {t("Send via WhatsApp")}
          </button>
        </form>
      </div>

      <Footer /> {/* ✅ Ajout du footer ici */}
    </>
  );
};

export default Contact;

// 📁 src/pages/Faq.js
import React from "react";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Faq = () => {
  const { t } = useTranslation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
    <div className="faq-page">
      <div className="faq-header">
        <h1>{t("Frequently Asked Questions")}</h1>
        <p>{t("Here are some answers to common questions about our services and how Amani works.")}</p>
      </div>

      <div className="faq-content">
        <div className="faq-item">
          <h3>{t("Do I need to live in Morocco to use Amani?")}</h3>
          <p>{t("Not at all! Amani was created specifically for people living abroad. We are your local support team, taking care of your property while you're away.")}</p>
        </div>

        <div className="faq-item">
          <h3>{t("Is Amani available all over Morocco?")}</h3>
          <p>{t("Our operations are currently based in Casablanca, but we are expanding. Feel free to contact us if you're located elsewhere — your feedback helps us grow!")}</p>
        </div>

        <div className="faq-item">
          <h3>{t("What kind of properties do you manage?")}</h3>
          <p>{t("We manage apartments, villas, holiday homes, and long-term investments — whether it's a small studio or a family estate.")}</p>
        </div>

        <div className="faq-item">
          <h3>{t("How do you handle emergencies or urgent repairs?")}</h3>
          <p>{t("We have a local network of qualified professionals ready to intervene quickly. You’ll receive a full report and photos after each intervention.")}</p>
        </div>

        <div className="faq-item">
          <h3>{t("Do I need to give you my keys?")}</h3>
          <p>{t("Yes — securely storing your keys allows us to intervene anytime, even without your presence. Key holding is included in all our subscription plans.")}</p>
        </div>

        <div className="faq-item">
          <h3>{t("How do I subscribe to a plan or request a service?")}</h3>
          <p>{t("Simply visit our 'Pricing & Plans' or 'Services' pages, click the request button, and fill out the contact form. We'll take it from there.")}</p>
        </div>

        <div className="faq-item">
          <h3>{t("Is there a long-term commitment when I subscribe?")}</h3>
          <p>{t("No! All our plans are monthly with no long-term commitment. You can cancel anytime with just one message.")}</p>
        </div>

        <div className="faq-item">
          <h3>{t("Can I combine services from different plans?")}</h3>
          <p>{t("Of course! You can subscribe to a plan and add extra services à la carte at any time.")}</p>
        </div>
      </div>

      <Footer />
    </div></>
  );
};

export default Faq;

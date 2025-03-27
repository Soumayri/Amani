import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaPlus, FaMinus } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const MiniFAQ = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const faqRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ✅ Fermer la FAQ si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (faqRef.current && !faqRef.current.contains(event.target)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const faqs = [
    {
      question: t("How does Amani help MRE (Moroccans Residing Abroad) with property management in Morocco?"),
      answer: t("Amani provides a full-service property management solution tailored for MRE who own homes in Morocco but live abroad. Our key-holding service ensures secure access, while our regular property checks prevent any maintenance issues from escalating. We also offer a direct communication channel, allowing you to receive reports, updates, and urgent alerts. Our goal is to give you complete peace of mind, knowing your property in Morocco is well-maintained, even when you’re miles away."),
    },
    {
      question: t("Can I request additional services like home maintenance, security, or concierge services?"),
      answer: t("Yes! In addition to our core property management services, we offer a wide range of à la carte solutions. This includes emergency repairs (plumbing, electricity, HVAC), smart security installations (cameras, alarm systems), and home preparation services such as deep cleaning and grocery stocking before your arrival. Our services are designed to give you full flexibility, whether you need one-time assistance or regular upkeep."),
    },
    {
      question: t("How do I subscribe to Amani’s property management services in Morocco?"),
      answer: t("Subscribing to Amani is quick and straightforward. You can sign up online via our website or contact our support team for a personalized consultation. We will guide you through the different plans, from basic key-holding to full-service property maintenance, helping you choose the best option based on your needs. If you require additional services, you can always upgrade or customize your plan."),
    },
  ];

  return (
    <section className="mini-faq">
      <div className="faq-container" ref={faqRef}>
        <h2 className="faq-title">{t("Need Quick Answers?")}</h2>
        <p className="faq-subtitle">{t("Here are some of the most common questions we get from property owners.")}</p>

        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              {openIndex === index ? <FaMinus className="faq-icon" /> : <FaPlus className="faq-icon" />}
            </div>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}

        <button className="faq-cta" onClick={() => navigate("/faq")}>
          {t("See All FAQs")}
        </button>
      </div>
    </section>
  );
};

export default MiniFAQ;

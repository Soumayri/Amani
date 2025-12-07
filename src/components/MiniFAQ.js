// src/components/MiniFAQ.js
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// 🟡 Mots / expressions à mettre en avant (SEO + visuel)
const HIGHLIGHT_TERMS = [
  "39€/month",
  "membership",
  "memberships",
  "FreshStart",
  "Welcome Home",
  "ProAccess",
  "Amani Works",
  "key holding",
  "home checks",
  "seasonal care",
  "Casablanca"
];

// petite fonction utilitaire pour échapper les caractères spéciaux regex
const escapeRegex = (str) =>
  str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// 🔍 Met en <strong> les mots-clés définis dans HIGHLIGHT_TERMS
const highlightText = (text) => {
  if (!text) return text;

  const pattern = new RegExp(
    `(${HIGHLIGHT_TERMS.map(escapeRegex).join("|")})`,
    "gi"
  );

  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const isHighlight = HIGHLIGHT_TERMS.some(
      (term) => term.toLowerCase() === part.toLowerCase()
    );

    if (isHighlight) {
      return (
        <strong key={index} className="mini-faq__highlight">
          {part}
        </strong>
      );
    }

    return <span key={index}>{part}</span>;
  });
};

const MiniFAQ = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [openIndex, setOpenIndex] = useState(null);
  const faqRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Fermer toutes les réponses si clic en dehors du bloc FAQ
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (faqRef.current && !faqRef.current.contains(event.target)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const faqs = [
    {
      question: t("What exactly does Amani do while I’m abroad?"),
      answer: t(
        "Amani looks after your home in Casablanca while you’re away: we hold your keys securely, visit your property on a fixed schedule, check for issues and keep you updated after each visit. Depending on your membership, we also organise seasonal care to air, clean and reset your home before and after key periods."
      ),
    },
    {
      question: t("How do your memberships work?"),
      answer: t(
        "You choose between three memberships from 39€/month. Each plan includes secure key holding and regular home checks, with more visits and seasonal care as you move from Basic to Premium. You can then add services like Welcome Home, ProAccess or Amani Works whenever you need more support."
      ),
    },
    {
      question: t("Do I need to be in Morocco to start with Amani?"),
      answer: t(
        "No. Many of our clients live abroad. We can start with a remote onboarding, then schedule your FreshStart visit and key handover when someone you trust is available on site. From there, your membership begins and we take care of your home according to the plan you’ve chosen."
      ),
    },
  ];

  return (
    <section className="mini-faq">
      <div className="mini-faq__container" ref={faqRef}>
        <p className="mini-faq__eyebrow">
          {t("Questions from owners like you")}
        </p>

        <h2 className="mini-faq__title">
          {t("Need quick answers before you decide?")}
        </h2>

        <p className="mini-faq__subtitle">
          {t(
            "Here are some of the most common questions we get from MRE and expatriate owners."
          )}
        </p>

        {faqs.map((faq, index) => (
          <div key={index} className="mini-faq__item">
            <button
              type="button"
              className="mini-faq__question"
              onClick={() => toggleFAQ(index)}
            >
              <span className="mini-faq__question-text">
                {faq.question}
              </span>
              <span className="mini-faq__icon">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>

            {openIndex === index && (
              <div className="mini-faq__answer">
                <p>{highlightText(faq.answer)}</p>
              </div>
            )}
          </div>
        ))}

        <button
          className="mini-faq__cta"
          type="button"
          onClick={() => navigate("/faq")}
        >
          {t("See all FAQs")}
        </button>
      </div>
    </section>
  );
};

export default MiniFAQ;

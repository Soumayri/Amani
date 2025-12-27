// src/components/HomeFAQSection.js
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeoHead from "../components/SeoHead";
import ScrollToTop from "../components/ScrollToTop";

/* ---------------------------------------------
   🔍 Mots-clés SEO à mettre automatiquement en gras
---------------------------------------------- */
const HIGHLIGHT_TERMS = [
  "39€/month",
  "Morocco",
  "Moroccans living abroad",
  "MRE",
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

// Sécurise les caractères spéciaux pour la RegExp
const escapeRegex = (str) =>
  str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Fonction React-safe qui renvoie un tableau React (PAS innerHTML)
const highlightText = (text) => {
  if (!text || typeof text !== "string") return text;

  const pattern = new RegExp(
    `(${HIGHLIGHT_TERMS.map(escapeRegex).join("|")})`,
    "gi"
  );

  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const isHighlight = HIGHLIGHT_TERMS.some(
      (term) => term.toLowerCase() === part.toLowerCase()
    );

    return isHighlight ? (
      <strong key={index} className="faq__highlight">
        {part}
      </strong>
    ) : (
      <span key={index}>{part}</span>
    );
  });
};

const HomeFAQSection = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);
  const faqRef = useRef(null);

  const toggleFAQ = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  // Fermer si clic en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (faqRef.current && !faqRef.current.contains(event.target)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ---------------------------------------------
     📌 FAQ LIST — inchangée mais highlight appliqué
  ---------------------------------------------- */
  const faqs = [
    {
      question: t(
        "What is Amani and how does your remote home care service in Morocco work?"
      ),
      answer: t(
        "Amani is a remote home care and property management service for owners who have a home in Morocco but live abroad or travel often. We store your keys securely in Casablanca, organise regular Home Checks and Seasonal Care, and coordinate extra services when you need more support. You receive clear reports after each visit so you always know what is happening in your Moroccan property, even when you are not there."
      ),
    },
    {
      question: t(
        "How much does an Amani membership cost and what is included from 49€/month?"
      ),
      answer: t(
        "Our memberships start from 49€/month and include secure key holding, regular Home Checks and basic Seasonal Care depending on the plan you choose. You can then add on extra services such as Welcome Home, ProAccess or Amani Works when you need deeper cleaning, professional access or renovation support."
      ),
    },
    {
      question: t(
        "Is Amani only for Moroccans living abroad (MRE) or can local owners also use your service?"
      ),
      answer: t(
        "Amani was created first for MRE and international owners who cannot be in Morocco regularly, but local owners in Casablanca and surroundings also use our service. If you travel often, live in another city or simply prefer a professional team to look after your home, you can subscribe to any of our memberships."
      ),
    },
    {
      question: t(
        "What is FreshStart and how do Home Checks help protect my property while I am away?"
      ),
      answer: t(
        "FreshStart is our initial visit before your membership really starts. During this visit, we air the property, check each room, do a first cleaning and document the current state of your home with photos and notes. Then, your regular Home Checks follow a clear checklist: doors and windows, water and electricity, signs of humidity or leaks, mail, and general condition. This helps catch small issues before they become bigger problems."
      ),
    },
    {
      question: t(
        "How does Amani Works manage renovation and construction projects remotely?"
      ),
      answer: t(
        "Amani Works is our coordination and supervision service for renovation and works when you cannot be on site yourself. You tell us about your project, we source and shortlist trusted professionals, then present you one or two quotes so you can decide how you want to move forward. Once you choose, we coordinate the works, follow progress on the ground, check quality and keep you updated with photos, videos and reports until completion. Our fee is 25% of the total works budget."
      ),
    },
    {
      question: t(
        "How are my keys and access to my home in Morocco kept safe with Amani?"
      ),
      answer: t(
        "Your keys are stored in a secure key holding system in Casablanca with a unique code instead of your name or address. Only authorised Amani operators can access the keys when a visit or a service is planned, and every movement is logged."
      ),
    },
  ];

  return (
    <>
      <SeoHead
        titleKey="FAQ | Amani Home"
        descriptionKey="All your questions about remote home care in Morocco, Amani memberships, FreshStart and Amani Works."
        canonical="https://www.amani-services.com/faq"
      />
      <ScrollToTop />
      <Navbar />

      <section className="home-faq">
        <div className="home-faq__inner" ref={faqRef}>
          <p className="home-faq__eyebrow">
            {t("Frequently asked questions")}
          </p>

          <h2 className="home-faq__title">
            {t("Understand how Amani protects your home in Morocco")}
          </h2>

          <p className="home-faq__lead">
            {highlightText(
              t(
                "Here are answers to the main questions owners ask us about memberships, FreshStart, Amani Works and how remote home care works when you live abroad."
              )
            )}
          </p>

          <div className="home-faq__list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`home-faq__item ${
                  openIndex === index ? "home-faq__item--open" : ""
                }`}
              >
                <button
                  type="button"
                  className="home-faq__question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="home-faq__question-text">
                    {highlightText(faq.question)}
                  </span>

                  <span className="home-faq__icon">
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="home-faq__answer">
                    <p>{highlightText(faq.answer)}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="home-faq__cta">
            <Link to="/plans" className="home-faq__btn">
              {t("Compare memberships from 39€/month")}
            </Link>
            <Link to="/contact" className="home-faq__link">
              {t("Still unsure? Talk to Amani about your home")}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomeFAQSection;

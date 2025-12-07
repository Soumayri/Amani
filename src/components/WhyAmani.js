// src/components/WhyAmaniSection.js
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaShieldAlt,
  FaFileAlt,
  FaKey,
  FaPlaneDeparture,
} from "react-icons/fa";

const WhyAmaniSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  // 👉 ton image
  const pillarImage = "/agent.webp";

  const pillars = [
    {
      icon: <FaShieldAlt />,
      title: t("Trusted local presence"),
      text: t(
        "A dedicated team looking after your home with structure, consistency and care."
      ),
    },
    {
      icon: <FaFileAlt />,
      title: t("Clear reporting after each visit"),
      text: t(
        "Every home check comes with photos, a short report and follow-up when something needs attention."
      ),
    },
    {
      icon: <FaKey />,
      title: t("Controlled & secure key holding"),
      text: t(
        "Your keys stay in a documented system. Access is only given to trusted, identified professionals."
      ),
    },
    {
      icon: <FaPlaneDeparture />,
      title: t("Built for MREs and second-home owners"),
      text: t(
        "We design everything for people living abroad who want peace of mind, not property logistics."
      ),
    },
  ];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasRevealed(true);
            observer.unobserve(entry.target); // on ne rejoue pas l’anim
          }
        });
      },
      {
        threshold: 0.25,          // quand ~25% de la section est visible
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-amani" ref={sectionRef}>
      <div className="why-amani__inner">
        {/* IMAGE BLOCK */}
        <div className="why-amani__image-block">
          <img
            src={pillarImage}
            alt="Amani Home remote home care"
            className="why-amani__image"
          />
        </div>

        {/* TEXT + PILLARS */}
        <div className="why-amani__content">
          <p className="why-amani__eyebrow">
            {t("Why owners choose Amani ?")}
          </p>

          <h2 className="why-amani__title">
            {t("More than a service. A trusted presence on the ground.")}
          </h2>

          <p className="why-amani__lead">
            {t(
              "Amani was created for owners who live abroad but want their home in Morocco to stay protected, cared for and ready. Here is what makes our approach different."
            )}
          </p>

          <div className="why-amani__grid">
            {pillars.map((pillar, index) => (
              <article
                key={index}
                className={
                  "why-amani__card" +
                  (hasRevealed ? " why-amani__card--visible" : "")
                }
                style={{
                  transitionDelay: hasRevealed
                    ? `${index * 0.12}s`
                    : "0s", // décalage progressif
                }}
              >
                <div className="why-amani__icon">{pillar.icon}</div>
                <h3 className="why-amani__card-title">{pillar.title}</h3>
                <p className="why-amani__card-text">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAmaniSection;

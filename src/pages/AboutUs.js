// src/pages/About.js
import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeoHead from "../components/SeoHead";
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <SeoHead
        titleKey="About Amani Home | Remote Home Care in Morocco"
        descriptionKey="Learn more about Amani Home, our mission, values and how we help owners look after their homes in Morocco while they live abroad."
        canonical="https://www.amani-services.com/about"
      />
      <ScrollToTop />
      <Navbar />

      <main className="about-page">
        {/* HERO */}
        <section className="about-hero">
          <div className="about-hero__inner">
            <div className="about-hero__text">
              <p className="about-hero__eyebrow">
                {t("About Amani Home")}
              </p>
              <h1 className="about-hero__title">
                {t("A local team looking after your home in Morocco while you’re away")}
              </h1>
              <p className="about-hero__lead">
                {t(
                  "Amani Home was created for owners who love their home in Morocco but cannot be there all year. We provide structured, local care so your property stays ready, safe and alive between each stay."
                )}
              </p>
              <div className="about-hero__bullets">
                <p>
                  <strong>{t("Based in Casablanca")}</strong>{" "}
                  {t("with operators on the ground visiting your home in person.")}
                </p>
                <p>
                  <strong>{t("Built for owners abroad")}</strong>{" "}
                  {t("who need clarity, trust and a simple way to stay in control.")}
                </p>
                <p>
                  <strong>{t("From 39€/month")}</strong>{" "}
                  {t("you get regular home checks, secure key holding and seasonal care.")}
                </p>
              </div>
            </div>

            <div className="about-hero__image-wrap">
              {/* Remplace ce path par ton image */}
              <img
                src="/Team.webp"
                alt={t("Amani Home operator visiting a property in Morocco")}
                className="about-hero__image"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* MISSION & WHY SECTION */}
        <section className="about-section about-section--mission">
          <div className="about-section__inner">
            <div className="about-section__block">
              <p className="about-section__eyebrow">
                {t("Our mission")}
              </p>
              <h2 className="about-section__title">
                {t("Giving you peace of mind between every stay")}
              </h2>
              <p className="about-section__text">
                {t(
                  "When a home stays closed for months, small issues can quickly become big problems: humidity, leaks, insects, dust, angry neighbours or lost value. Amani exists to prevent this and to give you a clear, structured way to look after your property from abroad."
                )}
              </p>
            </div>

            <div className="about-section__block">
              <p className="about-section__eyebrow">
                {t("Why owners choose Amani")}
              </p>
              <p className="about-section__text">
                {t(
                  "Instead of relying on neighbours, family or improvised solutions, you have a dedicated contact, scheduled visits and written reports. Your keys are stored securely in Casablanca and every visit follows a standard checklist, so nothing is left to chance."
                )}
              </p>
              <p className="about-section__text">
                {t(
                  "Whether you come once a year or every month, Amani helps you arrive to a home that feels cared for, not abandoned."
                )}
              </p>
            </div>
          </div>
        </section>

        {/* VALUES / PILLARS */}
        <section className="about-section about-section--values">
          <div className="about-section__inner">
            <p className="about-section__eyebrow">
              {t("How we work")}
            </p>
            <h2 className="about-section__title">
              {t("Four things you can expect from us")}
            </h2>

            <div className="about-values">
              <article className="about-values__card">
                <h3 className="about-values__title">
                  {t("Transparency")}
                </h3>
                <p className="about-values__text">
                  {t(
                    "After each visit, you receive a short report with photos, notes and clear next steps if we notice something unusual."
                  )}
                </p>
              </article>

              <article className="about-values__card">
                <h3 className="about-values__title">
                  {t("Trust & security")}
                </h3>
                <p className="about-values__text">
                  {t(
                    "Your keys are coded and stored securely in Casablanca. Access is tracked and only used for planned visits or agreed interventions."
                  )}
                </p>
              </article>

              <article className="about-values__card">
                <h3 className="about-values__title">
                  {t("Consistency")}
                </h3>
                <p className="about-values__text">
                  {t(
                    "Monthly home checks follow a fixed checklist so the same points are verified every time, not just when someone remembers."
                  )}
                </p>
              </article>

              <article className="about-values__card">
                <h3 className="about-values__title">
                  {t("Local coordination")}
                </h3>
                <p className="about-values__text">
                  {t(
                    "For deeper work, cleaning or renovation, we coordinate local professionals, supervise and keep you updated remotely."
                  )}
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* SMALL TEAM / LOCAL PRESENCE SECTION */}
        <section className="about-section about-section--team">
          <div className="about-section__inner about-section__inner--team">
            <div className="about-team__text">
              <p className="about-section__eyebrow">
                {t("A small, dedicated structure")}
              </p>
              <h2 className="about-section__title">
                {t("Close enough to knock on your door, even when you can’t")}
              </h2>
              <p className="about-section__text">
                {t(
                  "Amani is based in Casablanca with operators who physically visit your home, speak with neighbours when needed and understand how buildings really age in Morocco."
                )}
              </p>
              <p className="about-section__text">
                {t(
                  "Around this core, we work with a network of trusted cleaning teams, maintenance specialists and renovation professionals that we activate when your project requires it."
                )}
              </p>
              <p className="about-section__text">
                {t(
                  "You keep control of the decisions. We handle the ground work."
                )}
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINALE */}
        <section className="about-section about-section--cta">
          <div className="about-section__inner about-section__inner--cta">
            <h2 className="about-section__title about-section__title--center">
              {t("Ready to talk about your home in Morocco?")}
            </h2>
            <p className="about-section__text about-section__text--center">
              {t(
                "Tell us where your property is, how often you use it and what you worry about the most. We’ll help you choose the right membership and first steps."
              )}
            </p>
            <div className="about-cta__buttons">
              <Link to="/contact" className="about-cta__btn about-cta__btn--primary">
                {t("Talk to Amani")}
              </Link>
              <Link to="/plans" className="about-cta__btn about-cta__btn--ghost">
                {t("Compare memberships from 39€/month")}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;

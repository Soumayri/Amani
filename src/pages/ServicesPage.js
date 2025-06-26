import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  FaKey, FaEnvelope, FaHome, FaTools, FaShieldAlt, FaCar,
 FaBroom, FaShoppingCart, FaTree, FaLock,FaCouch,FaPaintRoller
} from "react-icons/fa";
import Navbar  from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
 // Importation du CSS pour cette page

const Services = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  // 📌 Services inclus dans les abonnements
  const mainServices = [
    { icon: <FaKey />, title: t("Key Holding"), path: "/services/key-holding" },
    { icon: <FaEnvelope />, title: t("Mail Collection"), path: "/services/mail-collection" },
    { icon: <FaHome />, title: t("Monthly Checks"), path: "/services/monthly-checks" },
    { icon: <FaTools />, title: t("Preventive Maintenance"), path: "/services/preventive-maintenance" },
    { icon: <FaShieldAlt />, title: t("Welcome Home Service"), path: "/services/welcome-home" },
    { icon: <FaCar />, title: t("Airport Transfers"), path: "/services/airport-transfers" }
  ];

  // 📌 Services additionnels (à la carte)
  const additionalServices = [
    {
      icon: <FaTools />,
      title: t("Emergency Repairs"),
      description: t("Fast intervention for urgent issues: plumbing, electrical..."),
      details: (
        <div>
          <p> <strong>{t("When a problem can't wait, we're here.")}</strong><br />
          {t("A water leak, an electrical outage, a malfunctioning air conditioner... These are the kinds of emergencies that require quick and reliable action — especially when you're not there to handle it yourself.")}<br /><br />
          {t("Our teams intervene promptly to minimize damage, restore functionality, and give you peace of mind.")}<br /><br />
          <strong>{t("What we cover:")}</strong></p>
          <ul className="modal-list">
            <li>{t("Urgent plumbing issues (leaks, clogged drains, burst pipes)")}</li>
            <li>{t("Electrical failures (short circuits, power loss, tripped breakers)")}</li>
            <li>{t("Air conditioning or heating breakdowns")}</li>
            <li>{t("Basic troubleshooting and temporary fixes when a full repair needs scheduling")}</li>
          </ul>
          <strong>{t("Why choose Amani for emergency repairs?")}</strong>
          <ul className="modal-list">
            <li>{t("  Fast dispatch of qualified technicians")}</li>
            <li>{t("  Transparent follow-up with photos and report")}</li>
            <li>{t("  Clear quote if additional repairs are needed")}</li>
            <li>{t("  No need to be present — we coordinate everything")}</li>
          </ul>
          <p><em>{t("With Amani, your property is in safe hands — even when the unexpected strikes.")}</em></p>
        </div>
      ),
      image: "/img/EmergencyRepairs.webp"
    },
     
   
    {
      icon: <FaPaintRoller />,
      title: t("Handyman Services"),
      description: t("Painting, renovations, and general maintenance."),
      details: (
        <div>
          <strong>{t("Reliable fixes for a flawless home.")}</strong>
          <p>
            {t("From fixing that squeaky door to repainting your living room, Amani's handyman services are designed to keep your property in perfect condition — effortlessly.")}
          </p>
    
          <strong>{t("Tasks we handle for you:")}</strong>
          <ul className="modal-list">
            <li>{t("Interior painting and wall repairs")}</li>
            <li>{t("Small carpentry jobs and adjustments")}</li>
            <li>{t("Shelving, curtain rods, and decorative installations")}</li>
            <li>{t("Fixing doors, locks, windows, and handles")}</li>
            <li>{t("Assembly of small furniture pieces")}</li>
          </ul>
    
          <strong>{t("What sets Amani apart in home maintenance & handyman services?")}</strong>
          <ul className="modal-list">
            <li>{t(" Punctual, courteous, and qualified operators")}</li>
            <li>{t(" Clean work and attention to detail")}</li>
            <li>{t(" No need to coordinate – we manage everything")}</li>
          </ul>
    
          <em>{t("We make home maintenance simple, so you can focus on what matters most.")}</em>
        </div>
      ),
      image: "/img/HandyMan.webp"
    }
    
  , {
    icon: <FaShieldAlt />,
    title: t("Property Insurance Assistance"),
    description: t("Guidance for home insurance subscription and claims."),
    details: (
      <div>
        <strong>{t("Protect your investment, without the paperwork headache.")}</strong>
        <p>
          {t("Navigating property insurance in Morocco can be complex — especially when you live abroad. With Amani, you gain peace of mind knowing your home is protected, and that a trusted partner is managing the process with precision and care.")}
        </p>
  
        <strong>{t("What's included in our assistance:")}</strong>
        <ul className="modal-list">
          <li>{t("Support with choosing the right insurance policy for your property")}</li>
          <li>{t("Help gathering and submitting the necessary documents")}</li>
          <li>{t("Assistance in case of damage or loss (claim follow-up, reporting, etc.)")}</li>
          <li>{t("Connection with reliable, verified insurance partners")}</li>
          <li>{t("Annual renewal reminders and follow-up management")}</li>
        </ul>
  
        <strong>{t("Your reliable partner for insurance paperwork and claims")}</strong>
        <ul className="modal-list">
          <li>{t("We know the Moroccan market and can guide you efficiently")}</li>
          <li>{t("We simplify procedures and act as your representative on the ground")}</li>
          <li>{t("We ensure full transparency and regular updates throughout the process")}</li>
        </ul>
  
        <em>
          {t("With Amani, you're not just covered — you're supported, every step of the way.")}
        </em>
      </div>
    ),
    image: "/img/PropertyInsurance.webp"
  }
  ,
  {
    icon: <FaCouch />,
    title: t("Appliance Installation"),
    description: t("Assembly of furniture, installation of home appliances."),
    details: (
      <div>
        <strong>{t("Settle in with ease — we handle the heavy lifting.")}</strong>
        <p>
          {t("Whether you've just furnished your home or need help installing a new appliance, Amani provides reliable assembly and installation services, so everything is ready to use when you arrive.")}
        </p>
  
        <strong>{t("What's included in our service:")}</strong>
        <ul className="modal-list">
          <li>{t("Assembly of new furniture (beds, wardrobes, shelves...)")}</li>
          <li>{t("Installation of home appliances (washing machine, oven, AC unit...)")}</li>
          <li>{t("Hook-up to water/electricity lines where needed")}</li>
          <li>{t("Verification that all equipment functions correctly")}</li>
          <li>{t("Removal of packaging and light cleanup after the job")}</li>
        </ul>
  
        <strong>{t("Why choose Amani for furniture & appliance installation?")}</strong>
        <ul className="modal-list">
          <li>{t("Skilled professionals with the right tools")}</li>
          <li>{t("No stress — we manage the installation before your arrival")}</li>
          <li>{t("Secure handling of your furniture and electronics")}</li>
          <li>{t("Transparent communication and flexible scheduling")}</li>
        </ul>
  
        <em>
          {t("Amani ensures your home is functional, welcoming, and ready — down to the last screw.")}
        </em>
      </div>
    ),
    image: "/img/ApplianceInstall.webp"
  }
  ,
  {
    icon: <FaBroom />,
    title: t("Deep Cleaning"),
    description: t("Full property cleaning before your arrival."),
    details: (
      <div>
        <strong>{t("Start fresh — we prepare your home like it's brand new.")}</strong>
        <p>
          {t("After months of vacancy, a deep cleaning is essential to eliminate dust, odors, and restore freshness. Amani takes care of everything, so you return to a pristine home.")}
        </p>
  
        <strong>{t("What's included in our deep cleaning:")}</strong>
        <ul className="modal-list">
          <li>{t("Bathrooms thoroughly disinfected (toilets, showers, sinks...)")}</li>
          <li>{t("Kitchen cleaning (appliances, counters, cabinets...)")}</li>
          <li>{t("Floors swept, mopped, and vacuumed")}</li>
          <li>{t("Windows and glass surfaces cleaned")}</li>
          <li>{t("Dusting of furniture, décor, and hidden areas")}</li>
        </ul>
  
        <strong>{t("Why choose Amani for deep home cleaning?")}</strong>
        <ul className="modal-list">
          <li>{t("Professional-grade eco-friendly products")}</li>
          <li>{t("Trained and trustworthy cleaning agents")}</li>
          <li>{t("Perfect preparation before your return or before hosting guests")}</li>
          <li>{t("Reliable scheduling and satisfaction guarantee")}</li>
        </ul>
  
        <em>
          {t("With Amani, enjoy a fresh, healthy, and welcoming environment from the moment you walk in.")}
        </em>
      </div>
    ),
    image: "/img/DeepClean.webp"
  }
  ,
  {
    icon: <FaShoppingCart />,
    title: t("Grocery & Home Stocking"),
    description: t("Stocking your home with essentials before you arrive."),
    details: (
      <div>
        <strong>{t("Everything you need, waiting for you at home.")}</strong>
        <p>
          {t("Arrive to a fully stocked fridge and pantry — no errands, no stress. We take care of your grocery shopping and prepare your home just the way you like it.")}
        </p>
  
        <strong>{t("What's included in this service:")}</strong>
        <ul className="modal-list">
          <li>{t("Customized grocery shopping based on your preferences")}</li>
          <li>{t("Fresh produce, dairy, bottled water, snacks, and more")}</li>
          <li>{t("Delivery and careful placement in fridge and pantry")}</li>
          <li>{t("Optional extras: flowers, toiletries, cleaning products…")}</li>
        </ul>
  
        <strong>{t("Why choose Amani for home stocking?")}</strong>
        <ul className="modal-list">
          <li>{t("Save time and energy after your travels")}</li>
          <li>{t("Tailored shopping: we follow your exact list")}</li>
          <li>{t("High-quality, fresh, and trusted products")}</li>
          <li>{t("Perfect for arrivals, guests, or surprise visits")}</li>
        </ul>
  
        <em>
          {t("With Amani, walk into a home that feels lived-in, warm, and ready — from kitchen to comfort.")}
        </em>
      </div>
    ),
    image: "/img/GroceriesHome.webp"
  }
  ,
  {
    icon: <FaTree />,
    title: t("Pool & Garden Maintenance"),
    description: t("Keep your outdoor spaces clean, green, and ready to enjoy."),
    details: (
      <div>
        <strong>{t("Enjoy a well-maintained exterior, even when you're miles away.")}</strong>
        <p>
          {t("Your garden and pool need care all year long — not just when you're here. Our reliable maintenance ensures your outdoor spaces stay beautiful, functional, and hassle-free.")}
        </p>
  
        <strong>{t("What's included in our maintenance service:")}</strong>
        <ul className="modal-list">
          <li>{t("Regular garden upkeep: mowing, pruning, watering")}</li>
          <li>{t("Pool cleaning, filtration checks & chemical balance")}</li>
          <li>{t("Seasonal treatments and pest control")}</li>
          <li>{t("Visual inspection of outdoor lighting and systems")}</li>
          <li>{t("Custom schedule based on your property needs")}</li>
        </ul>
  
        <strong>{t("Why choose Amani for pool & garden care?")}</strong>
        <ul className="modal-list">
          <li>{t("Professional landscapers & pool technicians")}</li>
          <li>{t("Preventive care to avoid costly damage")}</li>
          <li>{t("Flexible frequency: weekly, bi-weekly or monthly")}</li>
          <li>{t("Detailed reports with photos on request")}</li>
        </ul>
  
        <em>{t("With Amani, your garden flourishes and your pool stays crystal clear — even in your absence.")}</em>
      </div>
    ),
    image: "/img/PoolGardenMaintenance.webp"
  }
  ,
    {
      icon: <FaLock />,
      title: t("Security & Smart Home Installation"),
      description: t("Installation of alarms, smart locks, surveillance systems."),
      details: (
        <div>
          <strong>{t("Protect your home with intelligent, discreet technology.")}</strong>
          <p>
            {t("Enjoy total peace of mind with a secure home — even when you're miles away. We install reliable and modern systems that let you monitor and control your property remotely.")}
          </p>
    
          <strong>{t("What's included in our installation service:")}</strong>
          <ul className="modal-list">
            <li>{t("Smart locks and connected doorbells")}</li>
            <li>{t("Indoor & outdoor security cameras")}</li>
            <li>{t("Alarm systems and motion detectors")}</li>
            <li>{t("Remote access via mobile apps (iOS & Android)")}</li>
            <li>{t("Assistance with setup, testing, and configuration")}</li>
          </ul>
    
          <strong>{t("Why choose Amani for smart home security?")}</strong>
          <ul className="modal-list">
            <li>{t("Certified professionals & top-tier brands")}</li>
            <li>{t("Solutions tailored to your home and lifestyle")}</li>
            <li>{t("Ongoing support in case of issues or upgrades")}</li>
            <li>{t("Full confidentiality and data protection guaranteed")}</li>
          </ul>
    
          <em>
            {t("Amani brings you closer to your home — even from the other side of the world.")}
          </em>
        </div>
      ),
      image: "/img/SecuritySmartHome.webp"
    }
    ,

    {
      icon: <FaCar />,
      title: t("Car Maintenance & Storage"),
      description: t("Keep your vehicle safe, serviced, and ready to drive."),
      details: (
        <div>
          <strong>{t("Because your car deserves care, even when you're away.")}</strong>
          <p>
            {t("Don't let your vehicle sit unused and deteriorate while you're abroad. We provide secure storage, regular maintenance, and check-ups so it's always ready when you need it.")}
          </p>
    
          <strong>{t("What's included in our car service:")}</strong>
          <ul className="modal-list">
            <li>{t("Secure indoor or outdoor storage options")}</li>
            <li>{t("Battery checks and recharging")}</li>
            <li>{t("Basic engine & tire maintenance")}</li>
            <li>{t("Interior/exterior cleaning before your arrival")}</li>
            <li>{t("Option to prepare the car before your return")}</li>
          </ul>
    
          <strong>{t("Why trust Amani with your vehicle?")}</strong>
          <ul className="modal-list">
            <li>{t("Safe & monitored locations")}</li>
            <li>{t("Scheduled maintenance for long-term protection")}</li>
            <li>{t("Convenient coordination via WhatsApp or email")}</li>
            <li>{t("Tailored services depending on the vehicle type")}</li>
          </ul>
    
          <em>{t("With Amani, your car stays as ready as your home — anytime you return.")}</em>
        </div>
      ),
      image: "/img/CarMaintenance.webp"
    }
    ,

 ];

  return (
    <div>
      <ScrollToTop />
      <Navbar />
    <div className="services-page">
      {/* 🏡 HEADER IMMERSIF */}
      <div className="services-header" style={{
    background: `url("/img/servicesBanner.webp") center/cover no-repeat`,
  }}>
        <h1>{t("Our Tailored Services for Your Peace of Mind")}</h1>
        <p>{t("Explore our property management solutions, designed to simplify your life.")}</p>
      </div>

      {/* ✅ SECTION SERVICES PRINCIPAUX (ABONNEMENTS) */}
      <div className="services-main">
        <h2>{t("Included in Our Subscriptions")}</h2>
        <div className="services-grid">
          {mainServices.map((service, index) => (
            <div key={index} className="service-card" onClick={() => navigate(service.path)}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 SECTION SERVICES ADDITIONNELS */}
      <div className="services-additional">
        <h2>{t("On-Demand Additional Services")}</h2>
        <div className="services-grid">
          {additionalServices.map((service, index) => (
            <div key={index} className="service-card" onClick={() => setSelectedService(service)}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 📞 CTA FINAL */}
      <div className="cta-section">
        <h2>{t("Can't find what you need?")}</h2>
        <p>{t("Contact us for a custom solution")}</p>
        <button className="cta-button" onClick={() => navigate("/contact")}>
          {t("Contact Us")}
        </button>
      </div>

      {/* �� MODALE DÉTAILLÉE POUR SERVICES ADDITIONNELS */}
      {selectedService && (
        <div className="service-modal" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelectedService(null)}>&times;</span>
            <div className="modal-header">
              {selectedService.icon}
              <h2>{selectedService.title}</h2>
            </div>
            <img src={selectedService.image} alt={selectedService.title} className="modal-image"/>
            <p>{selectedService.details}</p>
            <button className="quote-btn" onClick={() => navigate(`/contact?service=${encodeURIComponent(selectedService.title)}`)}>
              {t("Request This Service")}
            </button>
          </div>
        </div>
      )}
    </div>
</div>

    
  
  );
};

export default Services;
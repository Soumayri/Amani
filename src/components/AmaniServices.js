import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTools, FaPaintRoller, FaCouch, FaBroom, FaShoppingCart,
  FaTree, FaShieldAlt, FaCar, FaLock
} from "react-icons/fa";


const AmaniServices = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const modalRef = useRef(null);

  const services = [
    {
      icon: <FaTools />,
    title: t("Emergency Repairs"),
    description: t("Fast intervention for urgent issues: plumbing, electrical..."),
    details: (
      <div>
        <strong>{t("When a problem can’t wait, we’re here.")}</strong><br />
        <p>{t("A water leak, an electrical outage, a malfunctioning air conditioner... These are the kinds of emergencies that require quick and reliable action — especially when you're not there to handle it yourself.")}</p><br /><br />

        <p>{t("Our teams intervene promptly to minimize damage, restore functionality, and give you peace of mind.")}</p><br /><br />

        <strong>{t("What we cover:")}</strong>
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
      description: t("Painting, minor renovations, and general maintenance."),
      details: (
        <div>
          <strong>Reliable fixes for a flawless home.</strong>
          <p>
            From fixing that squeaky door to repainting your living room, Amani’s handyman services are designed to keep your property in perfect condition — effortlessly.
          </p>
    
          <strong>Tasks we handle for you:</strong>
          <ul className="modal-list">
            <li>{t("Interior painting and wall repairs")}</li>
            <li>{t("Small carpentry jobs and adjustments")}</li>
            <li>{t("Shelving, curtain rods, and decorative installations")}</li>
            <li>{t("Fixing doors, locks, windows, and handles")}</li>
            <li>{t("Assembly of small furniture pieces")}</li>
          </ul>
    
          <strong>What sets Amani apart in home maintenance & handyman services?</strong>
          <ul className="modal-list">
            <li>{t(" Punctual, courteous, and qualified operators")}</li>
            <li>{t(" Clean work and attention to detail")}</li>
            <li>{t(" No need to coordinate – we manage everything")}</li>
          </ul>
    
          <em>We make home maintenance simple, so you can focus on what matters most.</em>
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
        <strong>Protect your investment, without the paperwork headache.</strong>
        <p>
          Navigating property insurance in Morocco can be complex — especially when you live abroad. 
          With Amani, you gain peace of mind knowing your home is protected, and that a trusted partner is managing the process with precision and care.
        </p>
  
        <strong>What’s included in our assistance:</strong>
        <ul className="modal-list">
          <li>Support with choosing the right insurance policy for your property</li>
          <li>Help gathering and submitting the necessary documents</li>
          <li>Assistance in case of damage or loss (claim follow-up, reporting, etc.)</li>
          <li>Connection with reliable, verified insurance partners</li>
          <li>Annual renewal reminders and follow-up management</li>
        </ul>
  
        <strong>Your reliable partner for insurance paperwork and claims</strong>
        <ul className="modal-list">
          <li>We know the Moroccan market and can guide you efficiently</li>
          <li>We simplify procedures and act as your representative on the ground</li>
          <li>We ensure full transparency and regular updates throughout the process</li>
        </ul>
  
        <em>
          With Amani, you’re not just covered — you’re supported, every step of the way.
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
        <strong>Settle in with ease — we handle the heavy lifting.</strong>
        <p>
          Whether you've just furnished your home or need help installing a new appliance, Amani provides reliable assembly and installation services, so everything is ready to use when you arrive.
        </p>
  
        <strong>What’s included in our service:</strong>
        <ul className="modal-list">
          <li>Assembly of new furniture (beds, wardrobes, shelves...)</li>
          <li>Installation of home appliances (washing machine, oven, AC unit...)</li>
          <li>Hook-up to water/electricity lines where needed</li>
          <li>Verification that all equipment functions correctly</li>
          <li>Removal of packaging and light cleanup after the job</li>
        </ul>
  
        <strong>Why choose Amani for furniture & appliance installation?</strong>
        <ul className="modal-list">
          <li>Skilled professionals with the right tools</li>
          <li>No stress — we manage the installation before your arrival</li>
          <li>Secure handling of your furniture and electronics</li>
          <li>Transparent communication and flexible scheduling</li>
        </ul>
  
        <em>
          Amani ensures your home is functional, welcoming, and ready — down to the last screw.
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
        <strong>Start fresh — we prepare your home like it’s brand new.</strong>
        <p>
          After months of vacancy, a deep cleaning is essential to eliminate dust, odors, and restore freshness. Amani takes care of everything, so you return to a pristine home.
        </p>
  
        <strong>What’s included in our deep cleaning:</strong>
        <ul className="modal-list">
          <li>Bathrooms thoroughly disinfected (toilets, showers, sinks...)</li>
          <li>Kitchen cleaning (appliances, counters, cabinets...)</li>
          <li>Floors swept, mopped, and vacuumed</li>
          <li>Windows and glass surfaces cleaned</li>
          <li>Dusting of furniture, décor, and hidden areas</li>
        </ul>
  
        <strong>Why choose Amani for deep home cleaning?</strong>
        <ul className="modal-list">
          <li>Professional-grade eco-friendly products</li>
          <li>Trained and trustworthy cleaning agents</li>
          <li>Perfect preparation before your return or before hosting guests</li>
          <li>Reliable scheduling and satisfaction guarantee</li>
        </ul>
  
        <em>
          With Amani, enjoy a fresh, healthy, and welcoming environment from the moment you walk in.
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
        <strong>Everything you need, waiting for you at home.</strong>
        <p>
          Arrive to a fully stocked fridge and pantry — no errands, no stress. We take care of your grocery shopping and prepare your home just the way you like it.
        </p>
  
        <strong>What’s included in this service:</strong>
        <ul className="modal-list">
          <li>Customized grocery shopping based on your preferences</li>
          <li>Fresh produce, dairy, bottled water, snacks, and more</li>
          <li>Delivery and careful placement in fridge and pantry</li>
          <li>Optional extras: flowers, toiletries, cleaning products…</li>
        </ul>
  
        <strong>Why choose Amani for home stocking?</strong>
        <ul className="modal-list">
          <li>Save time and energy after your travels</li>
          <li>Tailored shopping: we follow your exact list</li>
          <li>High-quality, fresh, and trusted products</li>
          <li>Perfect for arrivals, guests, or surprise visits</li>
        </ul>
  
        <em>
          With Amani, walk into a home that feels lived-in, warm, and ready — from kitchen to comfort.
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
        <strong>Enjoy a well-maintained exterior, even when you're miles away.</strong>
        <p>
          Your garden and pool need care all year long — not just when you're here. Our reliable maintenance ensures your outdoor spaces stay beautiful, functional, and hassle-free.
        </p>
  
        <strong>What’s included in our maintenance service:</strong>
        <ul className="modal-list">
          <li>Regular garden upkeep: mowing, pruning, watering</li>
          <li>Pool cleaning, filtration checks & chemical balance</li>
          <li>Seasonal treatments and pest control</li>
          <li>Visual inspection of outdoor lighting and systems</li>
          <li>Custom schedule based on your property needs</li>
        </ul>
  
        <strong>Why choose Amani for pool & garden care?</strong>
        <ul className="modal-list">
          <li>Professional landscapers & pool technicians</li>
          <li>Preventive care to avoid costly damage</li>
          <li>Flexible frequency: weekly, bi-weekly or monthly</li>
          <li>Detailed reports with photos on request</li>
        </ul>
  
        <em>With Amani, your garden flourishes and your pool stays crystal clear — even in your absence.</em>
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
          <strong>Protect your home with intelligent, discreet technology.</strong>
          <p>
            Enjoy total peace of mind with a secure home — even when you're miles away. We install reliable and modern systems that let you monitor and control your property remotely.
          </p>
    
          <strong>What’s included in our installation service:</strong>
          <ul className="modal-list">
            <li>Smart locks and connected doorbells</li>
            <li>Indoor & outdoor security cameras</li>
            <li>Alarm systems and motion detectors</li>
            <li>Remote access via mobile apps (iOS & Android)</li>
            <li>Assistance with setup, testing, and configuration</li>
          </ul>
    
          <strong>Why choose Amani for smart home security?</strong>
          <ul className="modal-list">
            <li>Certified professionals & top-tier brands</li>
            <li>Solutions tailored to your home and lifestyle</li>
            <li>Ongoing support in case of issues or upgrades</li>
            <li>Full confidentiality and data protection guaranteed</li>
          </ul>
    
          <em>
            Amani brings you closer to your home — even from the other side of the world.
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
          <strong>Because your car deserves care, even when you're away.</strong>
          <p>
            Don’t let your vehicle sit unused and deteriorate while you're abroad. We provide secure storage, regular maintenance, and check-ups so it’s always ready when you need it.
          </p>
    
          <strong>What’s included in our car service:</strong>
          <ul className="modal-list">
            <li>Secure indoor or outdoor storage options</li>
            <li>Battery checks and recharging</li>
            <li>Basic engine & tire maintenance</li>
            <li>Interior/exterior cleaning before your arrival</li>
            <li>Option to prepare the car before your return</li>
          </ul>
    
          <strong>Why trust Amani with your vehicle?</strong>
          <ul className="modal-list">
            <li>Safe & monitored locations</li>
            <li>Scheduled maintenance for long-term protection</li>
            <li>Convenient coordination via WhatsApp or email</li>
            <li>Tailored services depending on the vehicle type</li>
          </ul>
    
          <em>With Amani, your car stays as ready as your home — anytime you return.</em>
        </div>
      ),
      image: "/img/CarMaintenance.webp"
    }
    ,

  ];

  // ✅ Fonction pour fermer la modale si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedService(null);
      }
    };

    if (selectedService) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedService]);

  return (
    <section className="amani-services">
      <div className="container">
        <h2 className="section-title">{t("Amani Additional Services ")}</h2>
        <p className="section-subtitle">{t("Premium services available on demand to enhance your property experience.")}</p>

        {/* 🔹 Affichage des services */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card" 
              onClick={() => setSelectedService(service)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        {/* ✅ Modale avec clic en dehors pour fermer */}
        {selectedService && (
          <div className="service-modal">
            <div className="modal-content" ref={modalRef}>
              <span className="close-btn" onClick={() => setSelectedService(null)}>&times;</span>
              
              <div className="modal-header">
                {selectedService.icon}
                <h2>{selectedService.title}</h2>
              </div>

              <div className="modal-body">
                <img src={selectedService.image} alt={selectedService.title} className="modal-image" loading="lazy"/>
                <div>{selectedService.details}</div>
              </div>

              <button
  className="quote-btn"
  onClick={() => navigate(`/contact?service=${encodeURIComponent(selectedService.title)}`)}
>
  {t("Request a Quote")}
</button>

            </div>
          </div>
        )}

        {/* 🔹 Section "Didn't find what you need?" */}
        <div className="custom-request">
          <h3>{t("Didn't find what you need?")}</h3>
          <p>{t("Contact us for personalized solutions!")}</p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            {t("Contact Us")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AmaniServices;

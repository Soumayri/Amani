import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './styles/main.scss';

import "./i18n";

import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import KeyHolding from "./pages/services/KeyHolding";
import MailCollection from "./pages/services/MailCollection";
import MonthlyChecks from "./pages/services/MonthlyChecks";
import PreventiveMaintenance from "./pages/services/PreventiveMaintenance";
import WelcomeHomeService from "./pages/services/WelcomeHomeService";
import AirportTransfers from "./pages/services/AirportTransfers";
import AllServices from "./pages/ServicesPage";
import Plans from "./pages/PrincingPlans";
import Contact from "./pages/Contact";
import About from "./pages/AboutUs"
import Faq from "./pages/Faq";
import OperatorPortal from "./pages/OperatorPortal";
import ClientPortal from "./pages/ClientPortal";
import Hero from "./components/Hero";
import WhyAmani from "./components/WhyAmani"; 
import HowItWorks from "./components/HowItWorks";
import AmaniServices from "./components/AmaniServices";
import Testimonials from "./components/Testimonials";
import MiniFAQ from "./components/MiniFAQ";
import TheyTrustUs from "./components/TheyTrustUs";
import Footer from "./components/Footer";

// 🔹 Fonction pour remonter automatiquement en haut de page à chaque changement de route
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 🔥 Remonte en haut à chaque navigation */}
      <Navbar />

      
      <Routes>
        <Route path="/" element={
          <>
            <Hero />             
            <Services />
            <WhyAmani />
            <HowItWorks />
            <AmaniServices />
            <Testimonials />
            <TheyTrustUs />
            <MiniFAQ />
            <Footer />
          </>
        } />
        {/* Services pages */}
        <Route path="/services/key-holding" element={<KeyHolding />} />
        <Route path="/services/mail-collection" element={<MailCollection />} />
        <Route path="/services/monthly-checks" element={<MonthlyChecks />} />
        <Route path="/services/preventive-maintenance" element={<PreventiveMaintenance />} />
        <Route path="/services/welcome-home" element={<WelcomeHomeService />} /> {/* Correction du path */}
        <Route path="/services/airport-transfers" element={<AirportTransfers />} />
        <Route path="/services" element={<AllServices />} />
        {/* Price page */}
        <Route path="/plans" element={<Plans />} />
        {/* Contact page */}
        <Route path="/contact" element={<Contact />} />
        {/* About us page */}
        <Route path="/About" element={<About />} />
        {/* Faq page */}
        <Route path="/Faq" element={<Faq />} />
        {/* Portails */}
        <Route path="/operator-portal" element={<OperatorPortal />} />
        <Route path="/client-portal" element={<ClientPortal />} />
        <Route path="*" element={<NotFound />} />


      </Routes>
    </Router>
  );
}

export default App;

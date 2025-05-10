import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
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
import About from "./pages/AboutUs";
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

function RootLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
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
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
  {
    path: "/services/key-holding",
    element: <KeyHolding />,
  },
  {
    path: "/services/mail-collection",
    element: <MailCollection />,
  },
  {
    path: "/services/monthly-checks",
    element: <MonthlyChecks />,
  },
  {
    path: "/services/preventive-maintenance",
    element: <PreventiveMaintenance />,
  },
  {
    path: "/services/welcome-home",
    element: <WelcomeHomeService />,
  },
  {
    path: "/services/airport-transfers",
    element: <AirportTransfers />,
  },
  {
    path: "/services",
    element: <AllServices />,
  },
  {
    path: "/plans",
    element: <Plans />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Faq",
    element: <Faq />,
  },
  {
    path: "/operator-portal",
    element: <OperatorPortal />,
  },
  {
    path: "/client-portal",
    element: <ClientPortal />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    />
  );
}

export default App;

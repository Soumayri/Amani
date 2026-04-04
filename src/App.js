import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react"

import "bootstrap/dist/css/bootstrap.min.css";
import './styles/main.scss';
import "./i18n";
import SeoHead from "./components/SeoHead";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Hero from "./components/Hero";
import WhyAmani from "./components/WhyAmani";
import HowItWorks from "./components/HowItWorks";

import MiniFAQ from "./components/MiniFAQ";
import TheyTrustUs from "./components/TheyTrustUs";
import Footer from "./components/Footer";
import RapportSection from "./components/RapportSection";
import CookieBanner from "./components/CookieBanner";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Login from "./pages/Login";

import ProtectedRoute  from "./portal/routes/ProtectedRoute";
import PortalLayout    from "./portal/components/PortalLayout";
import Dashboard       from "./portal/pages/Dashboard";

const NotFound = lazy(() => import("./pages/NotFound"));
const KeyHolding = lazy(() => import("./pages/services/KeyHolding"));
const SeasonalCare = lazy(() => import("./pages/services/SeasonalCare"));
const MonthlyChecks = lazy(() => import("./pages/services/MonthlyChecks"));
const ProAccess = lazy(() => import("./pages/services/ProAccess"));
const WelcomeHomeService = lazy(() => import("./pages/services/WelcomeHomeService"));
const AmaniWorks = lazy(() => import("./pages/services/AmaniWorks"));
const FreshStart = lazy(() => import("./pages/services/FreshStart"));
const Plans = lazy(() => import("./pages/Plans"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/AboutUs"));
const Faq = lazy(() => import("./pages/Faq"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const PolitiqueConfidentialite = lazy(() => import("./pages/PolitiqueConfidentialite"));
const CGV = lazy(() => import("./pages/CGV"));
const CGU = lazy(() => import("./pages/CGU"));
const PolitiqueCookies = lazy(() => import("./pages/PolitiqueCookies"));


function RootLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHead
        titleKey="Amani Home - Remote property care for owners abroad in Morocco"
        descriptionKey="AccueilMetaDescription"
        canonical="https://www.amani-services.com/"
      />
      <Navbar />
      <Hero />
      <Services />
      <RapportSection />
      <WhyAmani />
      <HowItWorks />
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
    path: "/services/seasonal-care",
    element: <SeasonalCare />,
  },
  {
    path: "/services/monthly-checks",
    element: <MonthlyChecks />,
  },
  {
    path: "/services/pro-access",
    element: <ProAccess />,
  },
  {
    path: "/services/welcome-home",
    element: <WelcomeHomeService />,
  },
  {
    path: "/services/amani-works",
    element: <AmaniWorks />,
  },
  {
    path: "/services/freshstart",
    element: <FreshStart />,
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
    path: "/about",
    element: <About />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/operator-portal",
    element: <Login />,
  },
  {
    path: "/client-portal",
    element: <Login />,
  },
  // Client portal — protected, nested layout
  {
    path: "/client",
    element: (
      <ProtectedRoute>
        <PortalLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
  {
    path: "/mentions-legales",
    element: <MentionsLegales />,
  },
  {
    path: "/privacy",
    element: <PolitiqueConfidentialite />,
  },
  {
    path: "/terms",
    element: <CGV />,
  },
  {
    path: "/cgu",
    element: <CGU />,
  },
  {
    path: "/politique-cookies",
    element: <PolitiqueCookies />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      />
      <FloatingWhatsApp />
      <CookieBanner />
      <Analytics />
    </Suspense>
  );
}

export default App;
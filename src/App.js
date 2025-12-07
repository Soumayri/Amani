import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react"

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
import Login from "./pages/Login";

const NotFound = lazy(() => import("./pages/NotFound"));
const KeyHolding = lazy(() => import("./pages/services/KeyHolding"));
const SeasonalCare = lazy(() => import("./pages/services/SeasonalCare"));
const MonthlyChecks = lazy(() => import("./pages/services/MonthlyChecks"));
const ProAccess = lazy(() => import("./pages/services/ProAccess"));
const WelcomeHomeService = lazy(() => import("./pages/services/WelcomeHomeService"));
const AmaniWorks = lazy(() => import("./pages/services/AmaniWorks"));
const Plans = lazy(() => import("./pages/Plans"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/AboutUs"));
const Faq = lazy(() => import("./pages/Faq"));


function RootLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHead
        titleKey="Accueil - Gestion Immobilière à Casablanca & Maroc | AMANI HOME"
        descriptionKey="AccueilMetaDescription"
        canonical="https://www.amani-services.com/"
      />
      <Navbar />
      <Hero />
      <Services />
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
    element: <Login/>,
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
      <Analytics />
    </Suspense>
  );
}

export default App;
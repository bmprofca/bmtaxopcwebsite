import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/layout/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import WhyBmtax from "./pages/WhyBmtax";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Grievance from "./pages/Grievance";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/services"
              element={
                <PageTransition>
                  <Services />
                </PageTransition>
              }
            />
            <Route
              path="/services/:slug"
              element={
                <PageTransition>
                  <ServiceDetail />
                </PageTransition>
              }
            />
            <Route
              path="/why-bmtax"
              element={
                <PageTransition>
                  <WhyBmtax />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
            <Route
              path="/terms-and-conditions"
              element={
                <PageTransition>
                  <Terms />
                </PageTransition>
              }
            />
            <Route
              path="/grievance-redressal"
              element={
                <PageTransition>
                  <Grievance />
                </PageTransition>
              }
            />
            <Route
              path="/refund-policy"
              element={
                <PageTransition>
                  <RefundPolicy />
                </PageTransition>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <PageTransition>
                  <PrivacyPolicy />
                </PageTransition>
              }
            />

            {/* Redirects from the old static .html URLs so no inbound links or SEO equity are lost */}
            <Route path="/index.html" element={<Navigate to="/" replace />} />
            <Route path="/terms-and-service.html" element={<Navigate to="/terms-and-conditions" replace />} />
            <Route path="/grievance.html" element={<Navigate to="/grievance-redressal" replace />} />
            <Route path="/refund-policy.html" element={<Navigate to="/refund-policy" replace />} />
            <Route path="/privacy-policy.html" element={<Navigate to="/privacy-policy" replace />} />

            <Route
              path="*"
              element={
                <PageTransition>
                  <NotFound />
                </PageTransition>
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

import React from "react";
// Homepage Demo
import HomeDark from "../views/all-home-version/HomeDark";
// Service
import Service from "../views/inner-pages/service/Service";
import ServiceDetails from "../views/inner-pages/service/ServiceDetails";


// Others
import Contact from "../views/inner-pages/Contact";
import PricingInner from "../views/inner-pages/PricingInner";
import Team from "../views/inner-pages/Team";
import ComingSoon from "../views/inner-pages/ComingSoon";
import Faq from "../views/inner-pages/Faq";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<HomeDark/>} />

        {/* Service */}
        <Route path="/service" element={<Service />} />
        <Route path="/service-details" element={<ServiceDetails />} />

        {/* others */}
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<PricingInner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

// Project pages
import ProjectFactoryPro from "./pages/projects/ProjectFactoryPro";
import ProjectOMSKPI from "./pages/projects/ProjectOMSKPI";
import ProjectTextBridge from "./pages/projects/ProjectTextBridge";
import ProjectMicroservices from "./pages/projects/ProjectMicroservices";

// Service pages
import AIServicesPage from "./pages/services/AIServicesPage";
import CloudServicesPage from "./pages/services/CloudServicesPage";
import SoftwareDevPage from "./pages/services/SoftwareDevPage";
import ConsultingPage from "./pages/services/ConsultingPage";

import ScrollToTop from "./components/ScrollToTop";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
            {/* Project detail pages */}
            <Route path="/projects/factorypro" element={<ProjectFactoryPro />} />
            <Route path="/projects/oms-kpi" element={<ProjectOMSKPI />} />
            <Route path="/projects/textbridge" element={<ProjectTextBridge />} />
            <Route path="/projects/microservices" element={<ProjectMicroservices />} />
            
            {/* Service detail pages */}
            <Route path="/services/ai-agents-automation" element={<AIServicesPage />} />
            <Route path="/services/cloud-enterprise-solutions" element={<CloudServicesPage />} />
            <Route path="/services/software-development-integration" element={<SoftwareDevPage />} />
            <Route path="/services/consulting-digital-transformation" element={<ConsultingPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

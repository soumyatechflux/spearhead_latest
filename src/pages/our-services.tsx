import React from "react";
import Layout from "@/components/layout/Layout";
import Footer from "@/components/layout/footer/Footer";
import HomeCapabilities from "@/components/containers/home/HomeCapabilities";
import ServiceCoreCapabilitiesBanner from "@/components/layout/banner/ServiceCoreCapabilitiesBanner";
// import CmnBanner from "@/components/layout/banner/CmnBanner";
// import ServiceMain from "@/components/containers/ServiceMain";
// import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
// import UxProcessTwo from "@/components/containers/service-details/UxProcessTwo";
// import HomeTestimonialThree from "@/components/containers/home-three/HomeTestimonialThree";
// import CtaTwo from "@/components/containers/service-details/CtaTwo";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom" 
// import ServiceDetailsMain from "@/components/containers/service-details/ServiceDetailsMain";

// import ServiceDetailsBanner from "@/components/layout/banner/ServiceDetailsBanner";

// import Home from './components/Home';

const OurServices = () => {
  return (
    <Layout header={2} video={0}>
      <ServiceCoreCapabilitiesBanner/>
      <HomeCapabilities/>
      <Footer/>
      {/* <CmnBanner title="Core Capabilities" navigation="Core Capabilities" /> */}
      
      {/* <ServiceMain /> */}
      {/* <HomeTwoModal />
      <UxProcessTwo />
      <HomeTestimonialThree />
      <CtaTwo /> */}
    </Layout>
    
  );
};

export default OurServices;

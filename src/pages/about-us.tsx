import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
// import Agency from "@/components/containers/home/Agency";
import HomeAboutUs from "@/components/containers/home/HomeAboutUs";
import TeamMembers from "@/components/containers/TeamMembers";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import AboutSponsor from "@/components/containers/home-three/AboutSponsor";
import AboutCta from "@/components/containers/home-two/AboutCta";
import HomeCapabilities from "@/components/containers/home/HomeCapabilities";
import PortfolioText from "@/components/containers/home/PortfolioText";
import HomeApproch from "@/components/containers/home/HomeApproch";
import HomeSponsor from "@/components/containers/home/HomeSponsor";
import CountriesTime from "@/components/containers/home/CountriesTime";
import Footer from "@/components/layout/footer/Footer";
const AboutUs = () => {
  return (
    <Layout header={2} video={0}>
      <CmnBanner title="About Us " navigation="About Us" />
      <HomeTwoModal />
      {/* <Agency /> */}
      <HomeAboutUs/>
      <Footer/>
      {/* <TeamMembers /> */}
      {/* <HomeTestimonial /> */}
      {/* <AboutSponsor /> */}
      {/* <AboutCta /> */}

      {/* //new */}
      {/* <HomeCapabilities />
      <PortfolioText />
      <HomeApproch />
      <HomeTestimonial />
      <HomeSponsor />
      <CountriesTime /> */}
    
    </Layout>
   
  );
};

export default AboutUs;

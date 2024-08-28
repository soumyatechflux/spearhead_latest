import React, { useEffect, useRef, useState } from "react";
import Layout from "@/components/layout/Layout";
import HomeOneBanner from "@/components/layout/banner/HomeOneBanner";
import Agency from "@/components/containers/home/Agency";
// import HomeAboutUs from "@/components/containers/home/HomeAboutUs";
import PortfolioText from "@/components/containers/home/PortfolioText";
import HomeOffer from "@/components/containers/home/HomeOffer";
import HomeCapabilities from "@/components/containers/home/HomeCapabilities";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
// import HomeBlog from "@/components/containers/home/HomeBlog";
import HomeSponsor from "@/components/containers/home/HomeSponsor";
import NextPage from "@/components/containers/home/NextPage";
import HomeApproch from "@/components/containers/home/HomeApproch";
import CountriesTime from "@/components/containers/home/CountriesTime";
import CounterSection from "@/components/containers/home/CounterSection";

const Home = () => {
  const counterRef = useRef(null);
  const [isCounterVisible, setIsCounterVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsCounterVisible(true);
          observer.disconnect(); // Stop observing after it's visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <Layout header={2} footer={1} video={true}>
      <HomeOneBanner />
      {/* <HomeAboutUs/> */}
      <Agency />
      {/* <HomeOffer /> */}
      <HomeCapabilities />
      <PortfolioText />
      <HomeApproch />
      <HomeTestimonial />
      {/* <HomeBlog /> */}
      <HomeSponsor />
      <div ref={counterRef}>
        {isCounterVisible && <CounterSection />}
      </div>
      {/* <CountriesTime /> */}
      {/* <NextPage /> */}
    </Layout>
  );
};

export default Home;
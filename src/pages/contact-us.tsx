import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ContactMain from "@/components/containers/ContactMain";
import Footer from "@/components/layout/footer/Footer";

const ContactUs = () => {
  return (
    <Layout header={2} video={0}>
      <CmnBanner title="Contact Us" navigation="Contact Us" />
      <ContactMain />
      <Footer/>
    </Layout>
  );
};

export default ContactUs;

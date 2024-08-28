import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ProjectMain from "@/components/containers/project/ProjectMain";
import WorkStepsProject from "@/components/containers/project/WorkStepsProject";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
import Footer from "@/components/layout/footer/Footer";

const OurProjects = () => {
  return (
    <Layout header={2}  video={0}>
      <CmnBanner title="List of Projects" navigation="List of Projects" />
      <ProjectMain />
      {/* <WorkStepsProject /> */}
      <CtaTwo />
      <Footer/>
    </Layout>
  );
};

export default OurProjects;

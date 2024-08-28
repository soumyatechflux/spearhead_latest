import React from "react";
import Image from "next/image";
import Link from "next/link";
import awardthumb from "public/images/award-thumb.png";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";

const HomeTwoAward = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="award__thumb dir-rtl">
              <Image src={awardthumb} alt="Image" className="unset fade-left" />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="award__content section__content">
              <span className="sub-title">
                WE PROUD THAT
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Discover Our <span>Creativity</span>
              </h2>
              <div className="paragraph">
                <p>
                As an award-winning sales professional and senior management executive, Paul has an exceptional ability to tap into a brand’s strengths in a way that resonates with both stakeholders and external audiences. During the global pandemic, he recognized a widespread desire for simplicity amid uncertainty. This insight led him to establish Spearhead Creativity, an independent boutique agency. Today, Spearhead Creativity collaborates with emerging, pivoting, and established brands, guiding them through the ever-changing new normal with robust brand strategies from inception to implementation.
                </p>
              </div>
              <div className="award__content-meta">
                {/* <div className="single">
                  <h4>2018</h4>
                  <h4>Awwwards</h4>
                  <p>Website of the day</p>
                </div>
                <div className="single">
                  <h4>2020</h4>
                  <h4>Awwwards</h4>
                  <p>National design contest</p>
                </div>
                <div className="single">
                  <h4>2022</h4>
                  <h4>Awwwards</h4>
                  <p>Apps of the day</p>
                </div> */}
              </div>
              <div className="section__content-cta">
                <Link href="about-us" className="btn btn--primary">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
      <Image src={star} alt="Image" className="star-two" />
      <Image src={dotlarge} alt="Image" className="dot" />
      <Image src={dotlarge} alt="Image" className="dot-two" />
    </section>
  );
};

export default HomeTwoAward;

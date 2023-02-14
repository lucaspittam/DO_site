import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import HeaderDark from "../../components/header/HeaderDark";
import FooterThreeDark from "../../components/footer/FooterThreeDark";
import CopyRightThreeDark from "../../components/footer/copyright/CopyRightThreeDark";
import HeroDark from "../../components/hero/HeroDark";

import ContactJarallax from "../../components/jarallax/ContactJarallax";


const HomeDark = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--home-dark ">
      <Helmet>
        <title>Lucas Pittam</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderDark />
      {/* End  HeaderDark */}

      <div className="ptf-site-wrapper__inner">
        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-dark"></div>
          {/*=============================================
          Start Hero Section 
          ============================================== */}
          <section>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "4.375rem", "--ptf-md": "2.1875rem" }}
            ></div>

            <div className="container-xxl">
              <HeroDark />
            </div>

            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>

          <section>
            <div className="container-xxl">
              {/* <!--Divider--> */}
              <div
                className="ptf-divider"
                style={{
                  "--ptf-height": "1px",
                  "--ptf-color": "var(--ptf-color-white)",
                }}
              ></div>
            </div>
          </section>

          

          <section>
            <div className="container-xxl">
              {/* <!--Divider--> */}
              <div
                className="ptf-divider"
                style={{
                  "--ptf-height": "1px",
                  "--ptf-color": "var(--ptf-color-white)",
                }}
              ></div>
            </div>
          </section>



          <section className="ptf-custom--1772">
          </section>
    

          {/*=============================================
            Start Contact Section 
            ============================================== */}
          <section
            className="jarallax jarallax-img"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL +
                "assets/img/services-call-to-action-background.png"
              })`,
            }}
          >
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": " 12.5rem", "--ptf-md": "6.25rem" }}
            ></div>
            <ContactJarallax />
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>

          {/* End .ptf-page */}
        </div>
        {/* End .ptf-main */}
      </div>
      {/* End .ptf-site-wrapper__inner */}

      {/*=============================================
        Start Footer Section 
        ============================================== */}
      <footer className="ptf-footer ptf-footer--style-5">
        <div className="container-xxl">
          <div className="ptf-footer__top">
            <FooterThreeDark />
          </div>
          {/* End .ptf-footer__top */}

          <div className="ptf-footer__bottom">
            <CopyRightThreeDark />
          </div>
          {/* End .ptf-footer__bottom */}
        </div>
      </footer>
    </div>
  );
};

export default HomeDark;

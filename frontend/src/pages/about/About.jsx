import React from "react";
import "../about/about.css";
import { GrWorkshop } from "react-icons/gr";

const About = () => {
  return (
    <>
      <div className="about_container global_margin_top">
        <div className="container">
          <div className="aboutContent">
            <div className="left_About">
              <img src="/image/hero.png" alt="" />
            </div>
            <div className="right_About">
            <h3>About Us</h3>
              <h3 className="heading">One Step To Your Future Starts Here</h3>
              <p>
                Link Star Manpower Services Pvt. Ltd is a gateway between Nepalese workers and foreign emeployers. it was established on 25' September 2011. it is duly register by the Nepal Govt. License No. 1025/068/69. Its main purpose is to explore the competent expert human resource and make available in the international job market as per the requirements of the foreign employers.
              </p>

              <div className="aboutList">
                <div className="aboutListIcon">
                  <p className="about_icons">
                    <span>
                      <GrWorkshop />
                    </span>
                  </p>
                  <div>
                    <h4>Heading Goes here</h4>
                    <p>para goes here</p>
                  </div>
                </div>
                <div className="aboutListIcon">
                  <p className="about_icons">
                    <span>
                      <GrWorkshop />
                    </span>
                  </p>
                  <div>
                    <h4>Heading Goes here</h4>
                    <p>para goes here</p>
                  </div>
                </div>
                <div className="aboutListIcon">
                  <p className="about_icons">
                    <span>
                      <GrWorkshop />
                    </span>
                  </p>
                  <div>
                    <h4>Heading Goes here</h4>
                    <p>para goes here</p>
                  </div>
                </div>
                <div className="aboutListIcon">
                  <p className="about_icons">
                    <span>
                      <GrWorkshop />
                    </span>
                  </p>
                  <div>
                    <h4>Heading Goes here</h4>
                    <p>para goes here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

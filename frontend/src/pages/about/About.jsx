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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi minima porro cumque quasi explicabo et exercitationem
                nesciunt deserunt officiis labore, corporis possimus praesentium
                ipsum dolor esse assumenda veritatis voluptates eius aut
                aspernatur magnam reiciendis doloribus aperiam quaerat! Dolore
                eligendi rem illo expedita modi in iure repellat, alias sit
                accusantium adipisci.
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

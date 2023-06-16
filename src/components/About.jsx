import React from "react";
import about_image from "../images/png/about_img.png"
import yelllow_circle from "../images/png/about_yellow_circle.png"
const About = () => {
  return (
    <>
      <section className="about_s bg_black py-lg-5 mt_-2 overflow-hidden">
        <div className="myContainer py-sm-5 py-4">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6" data-aos="fade-right">
              <h2>About </h2>
              <p>
                Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae
                viverra amet et. Erat nam molestie. Vitae mollis lacus senectus
                mattis nisl. Porta , adipiscing sed mus diam amet, ac sed
                tellus.
              </p>
            </div>
            <div className="col-md-5 pt-5 pt-md-4 pt-md-0" data-aos="fade-left">
                <div className="position-relative about_card_img"><img className=" w-100 z_2 position-relative" src={about_image} alt="cards"/>
                <img className="position-absolute about_circle w-100" src={yelllow_circle} alt="circle" /></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

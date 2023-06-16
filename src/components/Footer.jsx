import React from "react";
import f_twitter from "../images/png/f_twitter.png"
import f_boat from "../images/png/f_boat.png"
import f_eyes from "../images/png/f_eyes.png"
import f_discord from "../images/png/f_discord.png"
import f_m from "../images/png/f_m.png"
import f_telegram from "../images/png/f_telegram.png"
import f_kong from "../images/png/footer_kong.png"
import f_circle from "../images/png/f_circle.png"
const Footer = () => {
  return (
    <>
      <section className="py-sm-5 py-4  overflow-hidden mt_-2">
        <div className="myContainer">
            <div className="d-flex flex-column align-items-center position-relative" data-aos="zoom-in">
                <div>
                  <img src={f_kong} alt="kong" />
                </div>
                <div className="d-flex gap-4 pt-3 mt-2 position-relative z-3">
                    <div className="f_even_icon"><img src={f_twitter} alt="twitter" /></div>
                    <div className="f_odd_icon"><img src={f_boat} alt="boat" /></div>
                    <div className="f_even_icon"><img src={f_eyes} alt="eyes_logo" /></div>
                    <div className="f_odd_icon"><img src={f_discord} alt="discord" /></div>
                    <div className="f_even_icon"><img src={f_m} alt="m_logo" /></div>
                    <div className="f_odd_icon"><img src={f_telegram} alt="" /></div>
                </div>
                <div className="position-absolute f_circle d-none d-md-block"><img className="w-100"  src={f_circle} alt="yellow_circle" /></div>
            </div>
            <div className="f_line pt-4 position-relative z-3"></div>
            <p className=" ff_montserrt fs_sm color_white text-center pt-4 position-relative z-3">© DomPKong 2022</p>
        </div>
      </section>
    </>
  );
};

export default Footer;

import React from "react";
import nav_kong from "../images/png/nav_img.png"
import nav_telegram from "../images/png/nav_telegram.png"
import nav_boat from "../images/png/nav_boat.png"
import nav_eyes from "../images/png/nav_eyes.png"
import nav_discord from "../images/png/nav_discord.png"
import nav_m from "../images/png/nav_m.png"
import nav_twitter from "../images/png/nav_twitter.png"
import nav_yellow from "../images/png/nav_yellow_img.png"
const MyNav = () => {
  return (
    <>
      <section className="bg_black position-relative py-1 overflow-hidden">
          <nav className="myContainer d-flex justify-content-between  align-items-center position-relative">
                <div className="mx-auto">
                  <div className="text-center"><img className="mb-4 c_pointer nav_kong" src={nav_kong} alt="kong_img" /></div>
                  <div className="d-flex justify-content-center"><button className="nav_btn_sm d-sm-none nav_btn_h">connect wallet</button></div>
                  <div className="d-flex gap-4 pt-3 mt-1 mt-sm-0 nav_icons">
                      <div className="nav_icon"><img src={nav_twitter} alt="twitter" /></div>
                      <div className="nav_icon"><img src={nav_boat} alt="boat_icon" /></div>
                      <div className="nav_icon"><img src={nav_eyes} alt="eyes_icon" /></div>
                      <div className="nav_icon"><img src={nav_discord} alt="discord" /></div>
                      <div className="nav_icon"><img src={nav_m} alt="myantra" /></div>
                      <div className="nav_icon"><img src={nav_telegram} alt="telegram" /></div>
                  </div>
                </div>
                 <button className="nav_btn position-absolute d-none d-sm-block">connect wallet</button>
          </nav>
            <img className="position-absolute w-100 top-0  nav_yellow_img" src={nav_yellow} alt="nav_img" />
      </section>
    </>
  );
};

export default MyNav;

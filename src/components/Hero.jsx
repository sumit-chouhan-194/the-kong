import React from "react";
import hero_kong1 from "../images/png/hero_kong1.png";
import hero_kong2 from "../images/png/hero_kong2.png";
import hero_kong3 from "../images/png/hero_kong3.png";
import MyNav from "./MyNav";
const Hero = () => {
  return (
    <>
      <header className="min-vh-lg-100 d-flex flex-column mt_-2">
        <MyNav />
        <section className="hero_bg position-relative hero_s flex-grow-1 pb-5 mt_-2 overflow-hidden">
          <div className="myContainer pb-5 position-relative z-3 mb-5">
            <div className="d-flex flex-column align-items-center pt-md-4 pt-3 pb-5">
              <h1>
                <span className="d-block">welcome</span> to
                <span className="color_yellow hero_yellow_line">dompkong</span>
              </h1>
              <p>
                Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae
                viverra amet et. Erat nam molestie. Vita
              </p>
              <div className="d-flex gap-2 pt-4 flex-column align-items-center flex-sm-row mb-md-5">
                <div class="btn-holder">
                  <button class="hero_btn  hover-border-11">
                    <span>Whitepaper</span>
                  </button>
                </div>
                <button className="hero_btn" id="hero_btn_middle">mint</button>
                <button className="hero_btn">opensea</button>
              </div>
            </div>
          </div>
          <div className="pt-sm-5 mt-sm-5">
            <img
              className="hero_kong1 position-absolute z_0"
              src={hero_kong1}
              alt="kong"
            />
          </div>
          <div>
            <img
              className="hero_kong2 position-absolute"
              src={hero_kong2}
              alt="kong"
            />
          </div>
          <div>
            <img
              className="hero_kong3 position-absolute"
              src={hero_kong3}
              alt="kong"
            />
          </div>
        </section>
      </header>
    </>
  );
};

export default Hero;

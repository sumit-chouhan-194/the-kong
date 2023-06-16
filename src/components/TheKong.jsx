import React from "react";
import { Row } from "react-bootstrap";
import left_kong1 from "../images/png/left_kong1.png";
import left_kong2 from "../images/png/left_kong2.png";
import left_kong3 from "../images/png/left_kong3.png";
import left_kong4 from "../images/png/left_kong4.png";
import left_kong5 from "../images/png/left_kong5.png";
import center_kong from "../images/png/center_kong.png";
import right_kong1 from "../images/png/right_kong1.png";
import right_kong2 from "../images/png/right_kong2.png";
import right_kong3 from "../images/png/right_kong3.png";
import right_kong4 from "../images/png/right_kong4.png";
import right_kong5 from "../images/png/right_kong5.png";
import center_kong_circle from "../images/png/yellow_circle.png";
const TheKong = () => {
  return (
    <>
      <section className="bg_black  overflow-hidden mt_-2 pb-4">
        <div className="mw_1440 px-3 mx-auto py-sm-5 py-4">
          <h2 className="the_kong_h2 d-lg-none">the kongs</h2>
          <Row className="justify-content-between flex-column flex-lg-row align-items-center">
            <div className="col-lg-2 position-reletive z-3 pt-3 pt-lg-0" data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="600">
              <div className="d-flex justify-content-center gap-3 d-lg-block ">
                <div className="team_kong">
                  <img
                    className="w-100 pt-4 left_kong1   "
                    src={left_kong1}
                    alt="kong"
                  />
                </div>
                <div className="team_kong">
                  <img
                    className="w-100 pt-4 left_kong2   "
                    src={left_kong2}
                    alt="kong"
                  />
                </div>
                <div className="team_kong">
                  <img
                    className="w-100 pt-4 left_kong3   "
                    src={left_kong3}
                    alt="kong"
                  />
                </div>
                <div className="team_kong">
                  <img
                    className="w-100 pt-4 left_kong4   "
                    src={left_kong4}
                    alt="kong"
                  />
                </div>
                <div className="team_kong">
                  <img
                    className="w-100 pt-4 left_kong5   "
                    src={left_kong5}
                    alt="kong"
                  />
                </div>
              </div>
            </div>
            <div className="col-7 position-relative">
              <h2 className="the_kong_h2 d-none d-lg-block ff_AzoSans pt-5 mt-5 position-absolute ">
                The kongs
              </h2>
              <div className="pe-lg-4  pt-lg-4 mt-lg-5 position-relative z-2">
                <div className="team_center_kong">
                  <img
                    className=" w-100 pt-lg-5 mt-lg-5"
                    src={center_kong}
                    alt="kong"
                  />
                </div>
                <div>
                  <img
                    className=" position-absolute center_kong_circle d-none d-sm-block"
                    src={center_kong_circle}
                    alt="circle"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-2  position-relative z-3 pt-3" data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="600">
              <div className="d-flex justify-content-center gap-3 d-lg-block">
                <div className="team_kong">
                  <img
                    className="w-100 pt-4 right_kong1  "
                    src={right_kong1}
                    alt="kong"
                  />
                </div>
                <div className="team_kong">
                  <img
                    className="w-100 pt-4 right_kong2  "
                    src={right_kong2}
                    alt="kong"
                  />
                </div>
                <div className="team_kong">
                  <img
                    className="w-100 pt-4 right_kong3  "
                    src={right_kong3}
                    alt="kong"
                  />
                </div>
                <div className="team_kong">
                  <img
                    className="w-100 mt-4 right_kong4  right_kong4_border"
                    src={right_kong4}
                    alt="kong"
                  />
                </div>
                <div className="team_kong">
                  <img
                    className="w-100 pt-4 right_kong5  "
                    src={right_kong5}
                    alt="kong"
                  />
                </div>
              </div>
            </div>
          </Row>
        </div>
      </section>
    </>
  );
};

export default TheKong;

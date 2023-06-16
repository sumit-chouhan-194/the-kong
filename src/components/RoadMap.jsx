import React from "react";
import { Row } from "react-bootstrap";
import roadmap_kong from "../images/png/roadmap_kong.png";
import half_circle from "../images/png/roadmap_half_circle.png";

const RoadMap = () => {
  return (
    <>
      <section className="bg_black py-sm-5 py-4 mt_-2 overflow-hidden">
        <div className="myContainer">
          <h2 className=" ff_AzoSans color_white fs_3xl text-center py-sm-5">roadmap</h2>
          <Row className=" justify-content-lg-between  align-items-center">
            <div className="col-xl-2" data-aos="fade-right"   data-aos-easing="linear"
     data-aos-duration="1500">
              <div className="roadmap_kong position-relative d-flex justify-content-center">
                <div className="roadmap_kong "><img src={roadmap_kong} alt="kong" /></div>
                <img
                  className="yellow_half_circle d-none d-xl-block"
                  src={half_circle}
                  alt="yellow_half_circle "
                />
              </div>
            </div>
            <div className="col-xl-8" data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="1500">
              <div className="d-flex align-items-center justify-content-between phase_box position-relative mt-lg-2 mt-5">
                <div className="position-absolute yellow_line yellow_line1 d-none d-xl-block">
                  <svg
                    width="159"
                    height="12"
                    viewBox="0 0 179 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM167.667 6.00001C167.667 8.94553 170.054 11.3333 173 11.3333C175.946 11.3333 178.333 8.94553 178.333 6.00002C178.333 3.0545 175.946 0.666681 173 0.666681C170.054 0.666681 167.667 3.0545 167.667 6.00001ZM6 7L173 7.00001L173 5.00001L6 5L6 7Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="px-sm-4 px-2 mx-2">
                  <div className="roadmap_circle ">20%</div>
                </div>
                <div>
                  <h4>Phase 1</h4>
                  <p>
                    Mi amet elementum, posuere tempus odio eu lacinia. Natoque
                    arcu viverra ullamcorper condimentum massa laoree
                  </p>
                </div>
              </div>
              <div className="pt-3 mt-lg-3 ms-xl-5 d-flex align-items-center justify-content-between phase_box position-relative">
                <div className="position-absolute yellow_line yellow_line2 d-none d-xl-block">
                  <svg
                    width="80"
                    height="12"
                    viewBox="0 0 179 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM167.667 6.00001C167.667 8.94553 170.054 11.3333 173 11.3333C175.946 11.3333 178.333 8.94553 178.333 6.00002C178.333 3.0545 175.946 0.666681 173 0.666681C170.054 0.666681 167.667 3.0545 167.667 6.00001ZM6 7L173 7.00001L173 5.00001L6 5L6 7Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="px-sm-4 px-2 mx-2">
                  <div className="roadmap_circle ">40%</div>
                </div>
                <div>
                  <h4>Phase 2</h4>
                  <p>
                    Mi amet elementum, posuere tempus odio eu lacinia. Natoque
                    arcu viverra ullamcorper condimentum massa laoree
                  </p>
                </div>
              </div>
              <div className="pt-3 mt-lg-3 ps-xl-5 ms-xl-5 d-flex align-items-center justify-content-between phase_box position-relative">
                <div className="position-absolute yellow_line yellow_line3 d-none d-xl-block">
                  <svg
                    width="100"
                    height="12"
                    viewBox="0 0 179 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM167.667 6.00001C167.667 8.94553 170.054 11.3333 173 11.3333C175.946 11.3333 178.333 8.94553 178.333 6.00002C178.333 3.0545 175.946 0.666681 173 0.666681C170.054 0.666681 167.667 3.0545 167.667 6.00001ZM6 7L173 7.00001L173 5.00001L6 5L6 7Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="px-sm-4 px-2 mx-2">
                  <div className="roadmap_circle ms-xl-4">60%</div>
                </div>
                <div>
                  <h4>Phase 3</h4>
                  <p>
                    Mi amet elementum, posuere tempus odio eu lacinia. Natoque
                    arcu viverra ullamcorper condimentum massa laoree
                  </p>
                </div>
              </div>
              <div className="pt-3 mt-lg-3 ms-xl-5 d-flex align-items-center justify-content-between phase_box position-relative">
                <div className="position-absolute yellow_line yellow_line4 d-none d-xl-block">
                  <svg
                    width="80"
                    height="12"
                    viewBox="0 0 179 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM167.667 6.00001C167.667 8.94553 170.054 11.3333 173 11.3333C175.946 11.3333 178.333 8.94553 178.333 6.00002C178.333 3.0545 175.946 0.666681 173 0.666681C170.054 0.666681 167.667 3.0545 167.667 6.00001ZM6 7L173 7.00001L173 5.00001L6 5L6 7Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="px-sm-4 px-2 mx-2">
                  <div className="roadmap_circle ">80%</div>
                </div>
                <div>
                  <h4>Phase 4</h4>
                  <p>
                    Mi amet elementum, posuere tempus odio eu lacinia. Natoque
                    arcu viverra ullamcorper condimentum massa laoree
                  </p>
                </div>
              </div>
              <div className="pt-3 mt-lg-3 d-flex align-items-center justify-content-between phase_box position-relative">
                <div className="position-absolute yellow_line yellow_line5 d-none d-xl-block">
                  <svg
                    width="100"
                    height="20"
                    viewBox="0 0 179 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.666667 6C0.666666 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666666 0.666667 3.05448 0.666667 6ZM167.667 6.00001C167.667 8.94553 170.054 11.3333 173 11.3333C175.946 11.3333 178.333 8.94553 178.333 6.00002C178.333 3.0545 175.946 0.666681 173 0.666681C170.054 0.666681 167.667 3.0545 167.667 6.00001ZM6 7L173 7.00001L173 5.00001L6 5L6 7Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="px-sm-4 px-2 mx-2">
                  <div className="roadmap_circle ">100%</div>
                </div>
                <div>
                  <h4>Phase 5</h4>
                  <p>
                    Mi amet elementum, posuere tempus odio eu lacinia. Natoque
                    arcu viverra ullamcorper condimentum massa laoree
                  </p>
                </div>
              </div>
            </div>
          </Row>
          <div className="text-center pt-5"><button className="py-md-3 mt-lg-4 py-3 px-md-4 px-3 bg_yellow  rounded-1 fs_md ff_AzoSans roadmap_btn"> read our Whitepaper</button></div>
        </div>
      </section>
    </>
  );
};

export default RoadMap;

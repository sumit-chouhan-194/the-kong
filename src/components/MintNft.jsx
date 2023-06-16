import React, { useState } from "react";
import { Row } from "react-bootstrap";
import bottle from "../images/png/kong_bottle.png";
import npt_circle from "../images/png/nft_circle.png";
import yellow_circle from "../images/png/bootle_l_circle.png";
const MintNft = () => {
  const [first, setfirst] = useState(0);

  function increment() {
    setfirst(first + 1);
  }
  function decrement() {
    if (first === 0) {
      setfirst(0);
    } else {
      setfirst(first - 1);
    }
  }
  return (
    <>
      <section className="bottle_s_bg py-5 overflow-hidden position-relative mt_-1">
        <div className="myContainer">
          <Row className="justify-content-lg-between align-items-center justify-content-center position-relative">
            <div className="col-md-4 col-sm-10" data-aos="fade-right">
              <div className="d-flex justify-content-center nft_bottle">
                <img src={bottle} alt="wine_bottle" className="w-75" />
              </div>
            </div>
            <div
              className="col-md-6 col-sm-10 pt-4 pt-lg-0 position-relative z-2"
              data-aos="fade-left"
            >
              <div className="mint_box">
                <h3>mint nft</h3>
                <Row className="justify-content-between pt-lg-5 pt-4">
                  <div className="d-flex justify-content-between">
                    <div className="col-4">
                      <h4>9999</h4>
                      <p>of 10,000 minted</p>
                    </div>
                    <div className="col-4">
                      <h4>9999</h4>
                      <p>of 10,000 minted</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between pt-4">
                    <div className="col-4">
                      <h4>9999</h4>
                      <p>of 10,000 minted</p>
                    </div>
                    <div className="col-4">
                      <h4>9999</h4>
                      <p>of 10,000 minted</p>
                    </div>
                  </div>
                </Row>
                <div className="d-flex justify-content-between mt-5">
                  <div onClick={decrement} className="nft_white_count">
                    -
                  </div>
                  <div className="result_box mx-3">{first}</div>
                  <div onClick={increment} className="nft_white_count">
                    +
                  </div>
                </div>
                <button className="nft_btn mt-5">mint now</button>
              </div>
            </div>
            <img
              className="position-absolute nft_circle w-100"
              src={npt_circle}
              alt="yellow_circle"
            />
          </Row>
        </div>
        <img
          className="position-absolute bottle_left_circle"
          src={yellow_circle}
          alt="yellow_circle"
        />
      </section>
    </>
  );
};

export default MintNft;

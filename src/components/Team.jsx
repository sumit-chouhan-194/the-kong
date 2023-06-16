import React from "react";
import { Row } from "react-bootstrap";
import team1 from "../images/png/team_1.png";
import team2 from "../images/png/team_2.png";
import team3 from "../images/png/team_3.png";
import insta_img from "../images/png/insta_logo.png";
import twitter_img from "../images/png/twitter_logo.png";
const Team = () => {
  return (
    <>
      <section className="bg_black py-sm-5 mt_-2 overflow-hidden">
        <div className="myContainer">
          <h2 className="ff_AzoSans color_white fs_3xl text-center pb-5 mb-lg-5 mb-4">
            meet The Team
          </h2>
          <Row className="justify-content-between team_row position-relative">
            <div className="col-md-4  d-flex flex-column align-items-center align-items-md-start" data-aos="fade-right">
              <div className="team_men">
                <h4 className=" ff_montserrt fw-bold fs_md color_white mb-0">
                  Jaylon Schleifer
                </h4>
                <p className=" ff_montserrt fs_md fw-normel color_white mb-0 pt-2 pb-1">
                  Carter Septimus
                </p>
                <div className="mt-4 text-center text-md-start team_men_img">
                  <img src={team1} alt="team-men" />
                </div>
              </div>
            </div>
            <div className="col-md-6 pt-4 pt-md-0" data-aos="fade-left">
              <h4 className=" ff_montserrt fw-semibold fs_md color_white mb-0 text-center text-md-start">
                @Jaylon Schleifer
              </h4>
              <p className=" ff_montserrt fs_md fw-normel color_white mb-0 pt-2 text-center text-md-start">
                Nearly two decades in Business
              </p>
              <p className=" ff_montserrt fs_sm fw-normel color_white mb-0 pt-4 text-center text-md-start">
                Faucibus risus id libero interdum in nisl nibh risus molestie.
                Gravida purus mauris nulla duis est eleifend. Suspendisse eu
                iaculis odio sit. Hac orci massa habitasse congue nulla
                tristique.
              </p>
              <p className=" ff_montserrt fs_sm fw-normel color_white mb-0 pt-2 text-center text-md-start">
                Sem posuere amet, tristique pellentesque quis erat lectus
                mauris, ultricies. Adipiscing pharetra lectus mauris, mi
                pharetra magna in tempus nisi. Sed at in nisl feugiat non in
                amet eu facilisis.
              </p>
              <div className="d-flex pt-3 mt-2 gap-3 justify-content-center justify-content-md-start">
                <div className="team_social_icon">
                  <img src={insta_img} alt="instagram" />
                </div>
                <div className="team_social_icon">
                  <img src={twitter_img} alt="twitter" />
                </div>
              </div>
            </div>
          </Row>
          <div className="pt-5 mt-5">
            <Row className="justify-content-between  position-lg-relative">
              <div className="col-md-3  d-flex flex-column align-items-center align-items-md-start" data-aos="fade-right">
                <div className="team_men">
                <h4 className=" ff_montserrt fw-bold fs_md color_white mb-0 ">
                  Talan Passaquindici Arcand
                </h4>
                <p className=" ff_montserrt fs_md fw-normel color_white mb-0 pt-2 pb-1">
                  Jakob Ekstrom Bothman
                </p>
                <div className="mt-4  text-center text-md-start ">
                  <img src={team2} alt="team-men" className="team_men_img rounded-4"/>
                </div>
                </div>
              </div>
              <div className="col-md-6 pt-4 pt-md-0" data-aos="fade-left">
                <h4 className=" ff_montserrt fw-semibold fs_md color_white mb-0 text-center text-md-start">
                  @Talan Passaquindici Arcand
                </h4>
                <p className=" ff_montserrt fs_md fw-normel color_white mb-0 pt-2 text-center text-md-start">
                  Invester & International Top Model
                </p>
                <p className=" ff_montserrt fs_sm fw-normel color_white mb-0 pt-4 text-center text-md-start">
                  Neque hendrerit lectus neque molestie facilisis. Faucibus arcu
                  eget facilisis nisl id ultricies. Aliquet eget scelerisque
                  posuere habitant mauris quis ridiculus rutrum consectetur.
                </p>
                <p className=" ff_montserrt fs_sm fw-normel color_white mb-0 pt-2 text-center text-md-start">
                  Pretium vitae nunc proin nullam turpis eu blandit. Nibh
                  ultricies gravida vestibulum nec ultricies. Eleifend egestas
                  non nunc, nisl tristique adipiscing non diam fermentum.
                </p>
                <div className="d-flex pt-3 mt-2 gap-3 justify-content-center justify-content-md-start">
                  <div className="team_social_icon">
                    <img src={insta_img} alt="instagram" />
                  </div>
                  <div className="team_social_icon">
                    <img src={twitter_img} alt="twitter" />
                  </div>
                </div>
              </div>
            </Row>
          </div>
          <div className="pt-5 mt-5">
            <Row className="justify-content-between team_row_t position-relative">
              <div className="col-md-4  d-flex flex-column align-items-center align-items-md-start" data-aos="fade-right">
                <div className="team_men"><h4 className=" ff_montserrt fw-bold fs_md color_white mb-0">
                  Alfonso Franci
                </h4>
                <p className=" ff_montserrt fs_md fw-normel color_white mb-0 pt-2 pb-1">
                  Alfonso Dokidis
                </p>
                <div className="mt-4 text-center text-md-start team_men_img">
                  <img src={team3} alt="team-men"/>
                </div>
                </div>
              </div>
              <div className="col-md-6 pt-4 pt-md-0" data-aos="fade-left">
                <h4 className=" ff_montserrt fw-semibold fs_md color_white mb-0 text-center text-md-start">
                  @Alfonso Franci
                </h4>
                <p className=" ff_montserrt fs_md fw-normel color_white mb-0 pt-2 text-center text-md-start">
                  Nearly two decades in Business
                </p>
                <p className=" ff_montserrt fs_sm fw-normel color_white mb-0 pt-4 text-center text-md-start">
                  A ut sagittis, purus sit integer suspendisse lacus quam
                  auctor. Interdum venenatis, sed ligula purus erat. A hac
                  faucibus blandit euismod molestie amet nibh scelerisque.
                </p>
                <p className=" ff_montserrt fs_sm fw-normel color_white mb-0 pt-2 text-center text-md-start">
                  Fermentum aliquam fames suscipit scelerisque integer mauris
                  sollicitudin. Tellus mattis egestas molestie elementum,
                  elementum. Urna, in molestie ac quam nisl orci mattis.
                </p>
                <div className="d-flex pt-3 mt-2 gap-3 justify-content-center justify-content-md-start">
                  <div className="team_social_icon">
                    <img src={insta_img} alt="instagram" />
                  </div>
                  <div className="team_social_icon">
                    <img src={twitter_img} alt="twitter" />
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;

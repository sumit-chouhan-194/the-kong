import React from "react";
import Accordion from "react-bootstrap/Accordion";
import bg_circle from "../images/png/accordian_circle.png"
import Footer from "../components/Footer";
const Faqs = () => {
  return (
    <section className="faqs_bg overflow-hidden mt_-2">
      <div className="myContainer position-relative pt-4">
          <img className="position-absolute z-0 accordion_circle" src={bg_circle} alt="yellow_circle" />
        <h2 className="fs_3xl text-center color_white ff_AzoSans pb-4">fAqs</h2>
        <div className="App mw_897 mx-auto " data-aos="zoom-in">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Arcu faucibus diam feugiat magna etiam.
              </Accordion.Header>
              <Accordion.Body>
                Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris,
                risus vitae luctus volutpat turpis. Nisl, consequat tellus
                laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Fermentum tortor aenean.</Accordion.Header>
              <Accordion.Body>
                Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris,
                risus vitae luctus volutpat turpis. Nisl, consequat tellus
                laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Sed vulputate mi faucibus.</Accordion.Header>
              <Accordion.Body>
                Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris,
                risus vitae luctus volutpat turpis. Nisl, consequat tellus
                laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Commodo placerat ultricies.</Accordion.Header>
              <Accordion.Body>
                Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris,
                risus vitae luctus volutpat turpis. Nisl, consequat tellus
                laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Nunc amet cursus morbi donec.</Accordion.Header>
              <Accordion.Body>
                Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris,
                risus vitae luctus volutpat turpis. Nisl, consequat tellus
                laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default Faqs;

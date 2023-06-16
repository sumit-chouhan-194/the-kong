import React from 'react'
import { Row } from 'react-bootstrap'
import parterner_logo1 from "../images/png/partener_logo1.png"
import parterner_logo2 from "../images/png/partener_logo2.png"
import parterner_logo3 from "../images/png/partener_logo3.png"
import parterner_logo4 from "../images/png/partener_logo4.png"
import partner_yellow_line from "../images/png/parterner_yellow_line.png"
const Parteners = () => {
  return (
    <>
    <section className='bg_black py-sm-5 py-4 mt_-2 overflow-hidden'>
        <div className="myContainer ">
            <h2 className='partener_h2 pb-lg-5 pb-4'>Parrtners</h2>
            <Row className='align-items-center justify-content-center'>
                <div data-aos="flip-up" className="col-lg-3 mt-5 mt-lg-0 col-md-4 col-sm-6 d-flex justify-content-center position-relative"><img className='w-75 partener_logos' src={parterner_logo1} alt="logo" />
                <img className='position-absolute parter_yellow_line d-none d-sm-block' src={partner_yellow_line} alt="yellow_line" /></div>

                <div data-aos="flip-up" className="col-lg-3 mt-5 mt-lg-0 col-md-4 col-sm-6 d-flex justify-content-center position-relative"><img className='w-75 partener_logos' src={parterner_logo2} alt="logo" /><img className='position-absolute parter_yellow_line2 d-none d-md-block' src={partner_yellow_line} alt="yellow_line" /></div>
                
                <div data-aos="flip-up" className="col-lg-3 mt-5 mt-lg-0 col-md-4 col-sm-6 d-flex justify-content-center position-relative"><img className='w-75 partener_logos' src={parterner_logo3} alt="logo" /><img className='position-absolute parter_yellow_line3 d-none d-sm-block d-md-none d-lg-block' src={partner_yellow_line} alt="yellow_line" /></div>
                
                <div data-aos="flip-up" className="col-lg-3 mt-5 mt-lg-0 col-md-4 col-sm-6 d-flex justify-content-center"><img className='w-75 partener_logos' src={parterner_logo4} alt="logo" /></div>
            </Row>
        </div>
    </section>
    </>
  )
}

export default Parteners
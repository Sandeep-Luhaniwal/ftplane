import React from "react";
import "react-stacked-carousel/dist/index.css";
import { Col, Row } from 'react-bootstrap'
import golbalPlan from '../assets/images/png/global.png'
import CardExample from "./CardExample";

const Tickets = () => {
    return (
        <>
            <section className='bg_secondary' id="order">
                <div className="myContainer pt-30 pt-sm-40 pt-md-50 pb-30 pb-sm-40 pb-md-50">
                    <Row className=''>
                        <Col md={6} className='ps-lg-40'>
                            <h3 className='mb-0 ff_primary fw_bold color_white fs_lg text-center text-lg-start'>Book Popular Flight Tickets</h3>
                            <p className='pt-3 mb-0 textcolorticket ff_primary fw_regular fs_sm text-center text-lg-start'>Lorem Ipsum is simply dummy text of the printing and <span className='d-lg-block'>typesetting industry. Lorem Ipsum has been the industry's</span></p>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <img src={golbalPlan} alt="golbal" className='globalImg' />
                            </div>
                        </Col>
                        <Col md={6} className="bg-transparent ps-lg-0 ps-xl-2 pb-5 pb-sm-0 pb-md-5 pb-lg-0">
                            <CardExample />
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Tickets
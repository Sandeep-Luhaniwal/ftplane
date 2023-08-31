import React from "react";
import { Col, Row } from 'react-bootstrap'
import { AirplanCIcon2 } from './Icon'
import scanner from '../assets/images/png/ScannerCode.png'

export const Slide = React.memo(function (StackedCarouselSlideProps) {
    const {
        data,
        dataIndex,
        isCenterSlide,
        swipeTo,
        slideIndex
    } = StackedCarouselSlideProps;

    const coverImage = data[dataIndex].id;
    const heading = data[dataIndex].heading;
    const heading1 = data[dataIndex].heading1;
    const Passenger = data[dataIndex].Passenger;
    const flight = data[dataIndex].flight;

    console.log(coverImage);
    return (
        <div draggable={false}>
            <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
                <div
                    className="card-overlay fill"
                    onClick={() => {
                        if (!isCenterSlide) swipeTo(slideIndex);
                    }}
                />
            </div>
            <div className="slackCard position-relative overflow-hidden">
                <div className="cutCricleleft"></div>
                <div className="cutCricleright"></div>
                <div className="bg_img op">
                    <div className='p-30'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <p className='saverbtn ff_primary fw_medium fs_sm color_primary mb-0'>{heading}</p>
                            <div className='d-flex align-items-center gap-2'>
                                <span className='ff_primary fw_semiBold fs_sm color_cardHeading'>UK</span><AirplanCIcon2 /><span className='ff_primary fw_semiBold fs_sm color_cardHeading'>BD</span>
                            </div>
                        </div>
                        <p className='ff_primary fw_bold fs_sm color_cardHeading mb-0 pt-4'>6 Flight Tickets</p>
                        <Row className='pt-4'>
                            <Col xs={6} className='pe-2'>
                                <p className='ff_primary fw_medium fs_2xs color_gray mb-0'>Passenger</p>
                                <p className='ff_primary fw_semiBold fs_sm color_cardHeading mb-0 pt2'>{Passenger}</p>
                            </Col>
                            <Col xs={6} className='ps-2'>
                                <p className='ff_primary fw_medium fs_2xs color_gray mb-0'>Date</p>
                                <p className='ff_primary fw_semiBold fs_sm color_cardHeading mb-0 pt2'>20 Nov 2022</p>
                            </Col>
                            <Col xs={6} className='pe-2 pt-3'>
                                <p className='ff_primary fw_medium fs_2xs color_gray mb-0'>Flight</p>
                                <p className='ff_primary fw_semiBold fs_sm color_cardHeading mb-0 pt2'>{flight}</p>
                            </Col>
                            <Col xs={6} className='ps-2 pt-3'>
                                <p className='ff_primary fw_medium fs_2xs color_gray mb-0'>Gate</p>
                                <p className='ff_primary fw_semiBold fs_sm color_cardHeading mb-0 pt2'>20 A</p>
                            </Col>
                            <Col xs={6} className='pe-2 pt-3'>
                                <p className='ff_primary fw_medium fs_2xs color_gray mb-0'>Class</p>
                                <p className='ff_primary fw_semiBold fs_sm color_cardHeading mb-0 pt2'>{heading1}</p>
                            </Col>
                            <Col xs={6} className='ps-2 pt-3'>
                                <p className='ff_primary fw_medium fs_2xs color_gray mb-0'>Seats</p>
                                <p className='ff_primary fw_semiBold fs_sm color_cardHeading mb-0 pt2'>5B - 11B</p>
                            </Col>
                        </Row>
                    </div>
                    <div className='p-17 scannerImg'>
                        <img src={scanner} alt="scannner" className='w-100 ' />
                    </div>
                </div>
            </div>
        </div>
    );
});
export default Slide;
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Mappeople from '../assets/images/png/MapPeople.png'
import CardPeople from '../assets/images/png/peopleSlider.png'
import Slider from 'react-slick';
import { StarCIcon2 } from './Icon';

const Peoplemap = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className="myContainer bg_white overflow-hidden pb-40 pb-sm-60 pb-md-80 pb-lg-100" id='passanger'>
                <p className='mb-0 ff_primary fs_md fw_semiBold color_primary text-center'>What’s our customer saying</p>
                <h3 className='text-center ff_primary fs_lg fw_bold color_heading pb-1'>Our Customer Feedback</h3>
                <Row className='pt-3 pt-sm-4 pt-md-5 justify-content-center align-items-center align-items-lg-start'>
                    <Col lg={7} md={6}>
                        <img src={Mappeople} alt="mapepople" className='w-100' />
                    </Col>
                    <Col xs={11} md={6} lg={5} sm={8} className='pb-5 mt-3 mt-md-0 pb-md-2'>
                        <Slider {...settings} className='shadow'>
                            <div className="sliderCard">
                                <div className="d-flex align-items-center">
                                    <img src={CardPeople} alt="mapepople" />
                                    <div className='ms-3'>
                                        <span className='ff_primary fs_md color_heading mb-0 fw_semiBold'>Jaylon Vaccaro</span>
                                        <div className='d-flex pt-2 gap-2'>
                                            <StarCIcon2 />
                                            <StarCIcon2 />
                                            <StarCIcon2 />
                                            <StarCIcon2 />
                                            <StarCIcon2 />
                                        </div>
                                    </div>
                                </div>
                                <p className='mb-0 ff_primary pt-3 fw_medium fs_2sm textitelic color_darkBlack'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don</p>
                            </div>
                            <div className="sliderCard">
                                <div className="d-flex align-items-center">
                                    <img src={CardPeople} alt="mapepople" />
                                    <div className='ms-3'>
                                        <span className='ff_primary fs_md color_heading mb-0 fw_semiBold'>Lakshay</span>
                                        <div className='d-flex pt-2 gap-2'>
                                            <StarCIcon2 />
                                            <StarCIcon2 />
                                            <StarCIcon2 />
                                            <StarCIcon2 />
                                        </div>
                                    </div>
                                </div>
                                <p className='mb-0 ff_primary pt-3 fw_medium fs_2sm textitelic color_darkBlack'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don</p>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Peoplemap
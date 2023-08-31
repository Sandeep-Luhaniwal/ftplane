import React from 'react'
import { Col, Row } from 'react-bootstrap'
import people1 from '../assets/images/png/people1.png'
import people2 from '../assets/images/png/people2.png'
import people3 from '../assets/images/png/people3.png'
import people4 from '../assets/images/png/people4.png'
import people5 from '../assets/images/png/Airplane_Ticket.png'
import { LocationIcon2, StarIcon } from './Icon'

const Fly = () => {
    return (
        <>
            <div className="myContainer py-50 py-md-75 py-lg-100 overflow-hidden">
                <Row className='justify-content-center justify-content-md-start pt-4 pt-sm-0 align-items-center'>
                    <Col sm={10} md={6}>
                        <div className="">
                            <div className='d-flex justify-content-center position-relative'>
                                <img src={people1} alt="people1" className='people1 ' />
                                <div className='position-relativ e'>
                                    <img src={people2} alt="people2" className='people2 position-absolute' />
                                    <img src={people3} alt="people2" className='people3 position-absolute' />
                                    <img src={people4} alt="people2" className='people4 position-absolute' />
                                    <img src={people5} alt="people2" className='people5 position-absolute' />
                                    <div className='d-flex position-absolute align-items-center box'>
                                        <div className=' locationcircle d-flex justify-content-center align-items-center'>
                                            <LocationIcon2 />
                                        </div>
                                        <span className='ff_primary fw_semiBold fs_sm color_black mb-0 ms-2'>New York</span>
                                    </div>
                                    <div className='d-flex position-absolute align-items-center star'>
                                        <StarIcon />
                                        <span className='ff_primary fw_semiBold fs_sm color_black mb-0 ms-2'>5.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='mt-5 mt-sm-4 mt-md-0  '>
                            <h3 className='ff_primary fs_md fw_extraLarge color_primary mb-0 timline_right position-relative'>Let's Fly</h3>
                        </div>
                        <h4 className='ff_primary fs_3md fw_bold color_line pt-3 pb-lg-3 mb-0'>It’s one of the leading online flight booking platforms in the world</h4>
                        <div className='timeLine position-relative'>
                            <div className=' position-relative mt-4'>
                                <div className='lineBox'>
                                    <div className='ps-3 ms-1'>
                                        <span className='ff_primary fs_sm fw_medium color_line mb-0'>Contrary to popular belief, Lorem Ipsum is not simply random text</span>
                                    </div>
                                </div>
                            </div>
                            <div className=' position-relative mt-10 '>
                                <div className='lineBox'>
                                    <div className='ps-3 ms-1'>
                                        <span className='ff_primary fs_sm fw_medium color_line mb-0'>If you are going to use a passage of Lorem Ipsum</span>
                                    </div>
                                </div>
                            </div>
                            <div className=' position-relative mt-10'>
                                <div className='lineBox'>
                                    <div className='ps-3 ms-1'>
                                        <span className='ff_primary fs_sm fw_medium color_line mb-0'>Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' position-relative mt-10 pb-lg-3'>
                            <div className='lineBox'>
                                <div className='ps-3 ms-1'>
                                    <span className='ff_primary fs_sm fw_medium color_line mb-0'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</span>
                                </div>
                            </div>
                        </div>
                        <div className='pt-4 d-flex justify-content-center justify-content-md-start'>
                            <button className='outline-btn border-0 ff_primary bg_primary color_white fs_sm fw_semiBold'>Book Now</button>
                        </div>
                    </Col>
                </Row>
            </div >
        </>
    )
}

export default Fly
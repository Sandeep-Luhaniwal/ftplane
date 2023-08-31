import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { DiscountIcon, ErrowIcon, LockIcon, MusicIcon, PalneIcon } from './Icon'

const Features = () => {
    return (
        <>
            <div className="myContainer mt-200 position-relative" id='feature'>
                <h2 className='ff_primary fs_lg fw_bold color_cardHeading text-center mb-0'>Our Features</h2>
                <Row className='pt-4 pt-lg-5 justify-content-center'>
                    <Col lg={3} md={4} sm={6} className='mt-30'>
                        <div className="cardCricle">
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className='circleCard d-flex justify-content-center align-items-center'>
                                    <PalneIcon />
                                </div>
                                <h3 className='text-center ff_primary fs_2md fw_extraBold color_cardHeading pt-3'>Best Guide</h3>
                                <p className='text-center ff_primary fs_sm fw_regular cardText pt-2'>Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.</p>
                                <div className='errowCircle d-flex justify-content-center align-items-center mt-32'>
                                    <ErrowIcon />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} className='mt-30 mt-sm-0'>
                        <div className="cardCricle">
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className='circleCard d-flex justify-content-center align-items-center'>
                                    <DiscountIcon />
                                </div>
                                <h3 className='text-center ff_primary fs_2md fw_extraBold color_cardHeading pt-3'>More Discount</h3>
                                <p className='text-center ff_primary fs_sm fw_regular cardText pt-2'>Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.</p>
                                <div className='errowCircle d-flex justify-content-center align-items-center mt-32'>
                                    <ErrowIcon />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} className='mt-30'>
                        <div className="cardCricle">
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className='circleCard d-flex justify-content-center align-items-center'>
                                    <LockIcon />
                                </div>
                                <h3 className='text-center ff_primary fs_2md fw_extraBold color_cardHeading pt-3'>Private</h3>
                                <p className='text-center ff_primary fs_sm fw_regular cardText pt-2'>Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.</p>
                                <div className='errowCircle d-flex justify-content-center align-items-center mt-32'>
                                    <ErrowIcon />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} className='mt-30 mt-sm-0'>
                        <div className="cardCricle">
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className='circleCard d-flex justify-content-center align-items-center'>
                                    <MusicIcon />
                                </div>
                                <h3 className='text-center ff_primary fs_2md fw_extraBold color_cardHeading pt-3'>Online Support</h3>
                                <p className='text-center ff_primary fs_sm fw_regular cardText pt-2'>Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.</p>
                                <div className='errowCircle d-flex justify-content-center align-items-center mt-32'>
                                    <ErrowIcon />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Features
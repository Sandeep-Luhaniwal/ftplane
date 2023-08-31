import React from 'react'
import Logo from '../assets/images/png/Main_logo.png'
import Logobg from '../assets/images/png/Footer_bg.png'
import { FacbookIcon, FooterCIcon, IneededIcon, TwitterIcon } from './Icon'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='position-relative'>
                <img src={Logobg} alt="logo" className='w-100 h-100 position-absolute' />
                <div className="myContainer position-relative z-3 pt-40 pt-sm-60 pt-md-80 pt-lg-100 ">
                    <div className='d-flex flex-wrap justify-content-between pb-30 pb-sm-40'>
                        <div className=''>
                            <img src={Logo} alt="logo" />
                            <p className='mb-0 ff_primary fs_sm fw_regular color_footer py-3 py-md-4'>There are many variations of <span className='d-lg-block'>passages of Lorem Ipsum available,</span> but the majority have suffered <span className="d-lg-block">alteration in some form</span></p>
                            <div className='gap-3 d-flex'>
                                <Link className="footercircle d-flex justify-content-center align-items-center" to='https://www.facebook.com/' target='/'>
                                    <FacbookIcon />
                                </Link>
                                <Link className="footercircle d-flex justify-content-center align-items-center" to='https://in.indeed.com/' target='/'>
                                    <IneededIcon />
                                </Link>
                                <Link className="footercircle d-flex justify-content-center align-items-center" to='https://www.twitter.com/' target='/'>
                                    <TwitterIcon />
                                </Link>
                            </div>
                        </div>
                        <ul className='mb-0 ps-0 pt-4 pt-lg-0'>
                            <li className='ff_primary fw_semiBold fs_2md color_white'>Address</li>
                            <li className='pt-2'><Link className='mb-0 ff_primary fs_sm fw_regular color_footer position-relative line'>Integrations</Link></li>
                            <li className='pt-3'><Link className='mb-0 ff_primary fs_sm fw_regular color_footer position-relative line'>Hello</Link></li>
                            <li className='pt-3'><Link className='mb-0 ff_primary fs_sm fw_regular color_footer position-relative line'>Intercom</Link></li>
                            <li className='pt-3'><Link className='mb-0 ff_primary fs_sm fw_regular color_footer position-relative line'>Customer</Link></li>

                        </ul>
                        <ul className='mb-0 ps-0 pt-4 pt-lg-0'>
                            <li className='ff_primary fw_semiBold fs_2md color_white'>About</li>
                            <li className='pt-2'><Link className='mb-0 ff_primary fs_sm fw_regular color_footer position-relative line'>Our Blog</Link></li>
                            <li className='pt-3'><Link className='mb-0 ff_primary fs_sm fw_regular color_footer position-relative line'>Customers</Link></li>
                            <li className='pt-3'><Link className='mb-0 ff_primary fs_sm fw_regular color_footer position-relative line'>Our Team</Link></li>
                            <li className='pt-3'><Link className='mb-0 ff_primary fs_sm fw_regular color_footer position-relative line'>Careers</Link></li>
                            <li className='pt-3'><Link className='mb-0 ff_primary fs_sm fw_regular color_footer position-relative line'>Integrations</Link></li>

                        </ul>
                        <ul className='mb-0 ps-0 pt-4 pt-lg-0'>
                            <li className='ff_primary fw_semiBold fs_2md color_white'>Support</li>
                            <li className='pt-2'><Link className='mb-0 ff_primary fs_sm fw_regular color_footer position-relative line'>Test</Link></li>
                            <li className='pt-3'><Link className='mb-0 ff_primary fs_sm fw_regular color_footer position-relative line'>Account</Link></li>
                            <li className='pt-3'><Link className='mb-0 ff_primary fs_sm fw_regular color_footer position-relative line'>Support Center</Link></li>
                            <li className='pt-3'><Link className='mb-0 ff_primary fs_sm fw_regular color_footer position-relative line'>Live Training</Link></li>
                            <li className='pt-3'><Link className='mb-0 ff_primary fs_sm fw_regular color_footer position-relative line'>Accessibility</Link></li>
                        </ul>
                    </div>
                    <div className='d-flex justify-content-center align-items-center pb-3 pt-30 pt-sm-40 borderTop'>
                        <p className='ff_primary fs_2xs fw_regular color_white latterspacing'>Copyright<span> <FooterCIcon /></span> FT PLANE 2022 All right reserved</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
import React, { useState } from 'react'
import { CheckinIcon, LocationIcon, TravelersIcon } from './Icon';

const Tabplan = () => {
    const [activetab, setActiveTab] = useState("First");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <div className="myContainer bg_white position-relative">
                <div className='position-absolute tabsposition'>
                    <ul className='mb-0 ps-0 d-flex overflow-auto'>
                        <li onClick={() => handleTabClick("First")} className="cursor-pointer border-lt mb-0">
                            <span className={`ff_primary fw_bold fs_2sm btnTabactive ${activetab === "First" ? "bg_primary color_white " : "color_cardHeading btnTab"}`}>
                                Economy
                            </span>
                        </li>
                        <li onClick={() => handleTabClick("Second")} className="cursor-pointer">
                            <span className={`ff_primary fw_bold fs_2sm btnTabactive2 ${activetab === "Second" ? "bg_primary color_white" : "color_cardHeading btnTab2"}`}>
                                Busniness
                            </span>
                        </li>
                        <li onClick={() => handleTabClick("Thrid")} className="cursor-pointer border-rt">
                            <span className={`ff_primary fw_bold fs_2sm btnTabactive3 ${activetab === "Thrid" ? "bg_primary color_white" : "color_cardHeading btnTab3"}`}>
                                First
                            </span>
                        </li>
                    </ul>
                    <div className=' w-100'>
                        {activetab === "First" && (
                            <div className='borderTab p-20 p-sm-30 p-md-40 bg-white'>
                                <div className='d-flex align-items-center justify-content-between flex-wrap'>
                                    <div className='d-flex align-items-center'>
                                        <div className='circle d-flex justify-content-center align-items-center'>
                                            <LocationIcon />
                                        </div>
                                        <div className='ms-2'>
                                            <h3 className='mb-0 ff_primary fw_semiBold fs_2sm color_dark'>Location</h3>
                                            <input type="text" placeholder='Where are you going?' className='outline color_primary ff_primary w-100 ' />
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center pt-3 pt-sm-0'>
                                        <div className='circle d-flex justify-content-center align-items-center'>
                                            <TravelersIcon />
                                        </div>
                                        <div className='ms-2'>
                                            <h3 className='mb-0 ff_primary fw_semiBold fs_2sm color_dark'>Travelers</h3>
                                            <input type="number" placeholder='Add guest' className='outline color_primary ff_primary w-50 ' />
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center pt-3 pt-md-0'>
                                        <div className='circle d-flex justify-content-center align-items-center'>
                                            <CheckinIcon />
                                        </div>
                                        <div className='ms-2'>
                                            <h3 className='mb-0 ff_primary fw_semiBold fs_2sm color_dark'>Check-in</h3>
                                            <input type="text" placeholder='Add date' className='outline color_primary ff_primary w-100 ' />
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center pt-3 pt-xl-0'>
                                        <div className='circle d-flex justify-content-center align-items-center'>
                                            <CheckinIcon />
                                        </div>
                                        <div className='ms-2'>
                                            <h3 className='mb-0 ff_primary fw_semiBold fs_2sm color_dark'>Check-out</h3>
                                            <input type="text" placeholder='Add date' className='outline color_primary ff_primary w-100 ' />
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center align-items-center pt-4'>
                                    <button className='outline-btn border-0 ff_primary bg_primary color_white fs_sm fw_semiBold'>Book Now</button>
                                </div>
                            </div>
                        )}
                        {activetab === "Second" && (
                            <div className='borderTab p-20 p-sm-30 p-md-40 bg-white'>
                                <div className='d-flex flex-wrap justify-content-between'>
                                    <div className='d-flex align-items-center'>
                                        <div className='circle d-flex justify-content-center align-items-center'>
                                            <LocationIcon />
                                        </div>
                                        <div className='ms-2'>
                                            <h3 className='mb-0 ff_primary fw_semiBold fs_2sm color_dark'>Location</h3>
                                            <input type="text" placeholder='Where are you going?' className='outline color_primary ff_primary w-100 ' />
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center pt-3 pt-sm-0'>
                                        <div className='circle d-flex justify-content-center align-items-center'>
                                            <TravelersIcon />
                                        </div>
                                        <div className='ms-2'>
                                            <h3 className='mb-0 ff_primary fw_semiBold fs_2sm color_dark'>Travelers</h3>
                                            <input type="number" placeholder='Add guest' className='outline color_primary ff_primary w-50' />
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center pt-3 pt-md-0'>
                                        <div className='circle d-flex justify-content-center align-items-center'>
                                            <LocationIcon />
                                        </div>
                                        <div className='ms-2'>
                                            <h3 className='mb-0 ff_primary fw_semiBold fs_2sm color_dark'>Check-in</h3>
                                            <input type="text" placeholder='Add date' className='outline color_primary ff_primary w-75' />
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center pt-3 pt-xl-0'>
                                        <div className='circle d-flex justify-content-center align-items-center'>
                                            <LocationIcon />
                                        </div>
                                        <div className='ms-2'>
                                            <h3 className='mb-0 ff_primary fw_semiBold fs_2sm color_dark'>Check-out</h3>
                                            <input type="text" placeholder='Add date' className='outline color_primary ff_primary w-75' />
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center align-items-center pt-4'>
                                    <button className='outline-btn border-0 ff_primary bg_primary color_white fs_sm fw_semiBold'>Book Now</button>
                                </div>
                            </div>
                        )}
                        {activetab === "Thrid" && (
                            <div className='borderTab p-20 p-sm-30 p-md-40 bg-white'>
                                <div className='d-flex flex-wrap justify-content-between'>
                                    <div className='d-flex align-items-center'>
                                        <div className='circle d-flex justify-content-center align-items-center'>
                                            <LocationIcon />
                                        </div>
                                        <div className='ms-2'>
                                            <h3 className='mb-0 ff_primary fw_semiBold fs_2sm color_dark'>Location</h3>
                                            <input type="text" placeholder='Where are you going?' className='outline color_primary ff_primary w-100 ' />
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center pt-3 pt-sm-0'>
                                        <div className='circle d-flex justify-content-center align-items-center'>
                                            <TravelersIcon />
                                        </div>
                                        <div className='ms-2'>
                                            <h3 className='mb-0 ff_primary fw_semiBold fs_2sm color_dark'>Travelers</h3>
                                            <input type="number" placeholder='Add guest' className='outline color_primary ff_primary w-50' />
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center pt-3 pt-md-0'>
                                        <div className='circle d-flex justify-content-center align-items-center'>
                                            <LocationIcon />
                                        </div>
                                        <div className='ms-2'>
                                            <h3 className='mb-0 ff_primary fw_semiBold fs_2sm color_dark'>Check-in</h3>
                                            <input type="text" placeholder='Add date' className='outline color_primary ff_primary w-75' />
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center pt-3 pt-xl-0'>
                                        <div className='circle d-flex justify-content-center align-items-center'>
                                            <CheckinIcon />
                                        </div>
                                        <div className='ms-2'>
                                            <h3 className='mb-0 ff_primary fw_semiBold fs_2sm color_dark'>Check-out</h3>
                                            <input type="text" placeholder='Add date' className='outline color_primary ff_primary w-75' />
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center align-items-center pt-4'>
                                    <button className='outline-btn border-0 ff_primary bg_primary color_white fs_sm fw_semiBold'>Book Now</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tabplan
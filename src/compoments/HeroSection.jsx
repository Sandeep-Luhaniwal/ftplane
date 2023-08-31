import React from 'react'
import plan from '../assets/images/png/Plan_main.png'
import plan1 from '../assets/images/png/Map.png'

const HeroSection = () => {
    return (
        <>
            <div className='mt-86 z-1 bg_plan z-5 '>
                <img src={plan1} alt="" className='position-absolute w-100 px-lg-5' />
                <div className='myContainer position-relative pt-5'>
                    <div className='position-relative'>
                        <img src={plan} alt="palne" className='w-100 loder1' />
                    </div>
                    <h1 className='ff_primary fw_bold color_white text-center fs_2lg pt-2'>Travel around the world</h1>
                    <p className='text-center ff_secondary fw_regular color_white fs_xs pb-190 pt-2'>One of the advantages of being disorganized is that one is always having surprising discoveries</p>
                </div>
            </div>
        </>
    )
}

export default HeroSection
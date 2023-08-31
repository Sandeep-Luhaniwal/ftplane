import React from 'react'
import reloder_img from '../assets/images/png/Plan_main.png'

const Preloder = () => {
    return (
        <div>
            <div className='min-vh-100 d-flex justify-content-center align-items-center bg_secondary position-fixed w-100 top-0 z-2000 start-0' id='preloader'>
                <img className='w-1200px loader' src={reloder_img} alt="logo" />
            </div>
        </div>
    )
}

export default Preloder
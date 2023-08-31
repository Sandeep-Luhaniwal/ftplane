import React from 'react'

const Subscribe = () => {
    return (
        <>
            <div className='bg_color'>
                <div className="myContainer py-40 py-sm-60 py-md-80 py-lg-100">
                    <h2 className='ff_primary fw_bold fs_lg color_heading mb-0 text-center'>Subscribe Newsletter & <span className='d-md-block'> Get Letest News</span></h2>
                    <div className="px-2 mx-1 pt-30 pt-sm-40">
                        <div className='max-w-495 position position-relative'>
                            <div className='p-11 bg_white d-flex justify-content-between'>
                                <input type="email" name="email" id="email" placeholder='Enter your email address' className='w-100 me-5 border-0 outline' />
                                <button className='outline-btn1 border-0 ff_primary bg_primary color_white fs_sm fw_semiBold'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscribe
import React from 'react'
import Memories1 from '../assets/images/png/Memories1.png'
import Memories2 from '../assets/images/png/Memories2.png'
import Memories3 from '../assets/images/png/Memories3.png'
import Memories4 from '../assets/images/png/Memories4.png'
import Slider from 'react-slick'

const Memories = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,


        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },]

    };
    return (
        <>
            <div className="myContainer pb-40 pb-sm-60 pb-md-80 pb-lg-100">
                <h3 className='text-center ff_primary fs_lg fw_bold color_heading pb-1'>Make memories with us</h3>
                <Slider {...settings} className='pt-4'>
                    <div className='px-2'>
                        <img src={Memories1} alt="Memories" className='w-100' />
                    </div>
                    <div className='px-2 mt-sm-30'>
                        <img src={Memories2} alt="Memories" className='w-100' />
                    </div>
                    <div className='px-2'>
                        <img src={Memories3} alt="Memories" className='w-100' />
                    </div>
                    <div className='px-2 mt-sm-30'>
                        <img src={Memories4} alt="Memories" className='w-100' />
                    </div>
                </Slider>
            </div>

        </>
    )
}

export default Memories
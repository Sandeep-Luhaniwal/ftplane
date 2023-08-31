import React from 'react'
import Memories1 from '../assets/images/png/place1.png'
import Memories2 from '../assets/images/png/place2.png'
import Memories3 from '../assets/images/png/place3.png'
import Memories4 from '../assets/images/png/place4.png'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

const Travels = () => {
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
            <div className="myContainer py-40 py-sm-60 py-md-80 py-lg-100" id='travels'>
                <h3 className='text-center ff_primary fs_lg fw_bold color_heading mb-0'>Best Travelars Of This Month</h3>
                <Slider {...settings} className='mt-5 mx-2 boxShadow'>
                    <div className='px-3 py-2'>
                        <div className='cardMonth'>
                            <img src={Memories1} alt="Memories" className='w-100 zoom' />
                            <h5 className='ff_primary fs_2md fw_semiBold text-center color_heading mb-0 pt-2'>Raju Mullah</h5>
                            <p className='mb-0 text-center pt-1'><Link className='ff_primary fs_sm fw_regular text-center color_card mb-0'>@rajumulllah</Link></p>
                        </div>
                    </div>
                    <div className='px-3 py-2'>
                        <div className="cardMonth">
                            <img src={Memories2} alt="Memories" className='w-100 zoom' />
                            <h5 className='ff_primary fs_2md fw_semiBold text-center color_heading mb-0 pt-2'>Zaire Vetrovs</h5>
                            <p className='mb-0 text-center pt-1'><Link className='ff_primary fs_sm fw_regular text-center color_card mb-0'>@zairevetrovs</Link></p>
                        </div>
                    </div>
                    <div className='px-3 py-2'>
                        <div className="cardMonth">
                            <img src={Memories3} alt="Memories" className='w-100 zoom' />
                            <h5 className='ff_primary fs_2md fw_semiBold text-center color_heading mb-0 pt-2'>Marcus Dias</h5>
                            <p className='mb-0 text-center pt-1'><Link className='ff_primary fs_sm fw_regular text-center color_card mb-0'>@marcusdias</Link></p>
                        </div>
                    </div>
                    <div className='px-3 py-2'>
                        <div className="cardMonth">
                            <img src={Memories4} alt="Memories" className='w-100 zoom' />
                            <h5 className='ff_primary fs_2md fw_semiBold text-center color_heading mb-0 pt-2'>Davis Schleifer</h5>
                            <p className='mb-0 text-center pt-1'><Link className='ff_primary fs_sm fw_regular text-center color_card mb-0'>@davisschleifer</Link></p>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Travels
import React from 'react'
import Slider from 'react-slick';
import './slide.css'
import slideimg1 from '../../assests/images/slider-1.png'
import slideimg2 from '../../assests/images/slider-2.png'


function slide() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };
    return (

            <div className="container-fluid">
                <Slider {...settings} className='mainSlider'>
                    <div className='item'>
                        <img src="https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780239954/Screenshot_2026-05-31_203344_xovlay.png" alt="" />
                    </div>
                    <div className='item'>
                        <img src="https://res.cloudinary.com/dgqk6u9wx/image/upload/v1780240089/Screenshot_2026-05-31_203741_rdxejv.png" alt="" />
                    </div>
                </Slider>
            </div>
    )
}

export default slide
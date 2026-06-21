import React from 'react'
import banner1 from '../../assests/images/banner-1.png'
import banner2 from '../../assests/images/banner-2.png'
import banner3 from '../../assests/images/banner-3.png'
import './threeBanner.css'

function threeBanner() {
    return (
        <>
            <div className='banner_section'>
                <div className='container-fluid'>
                    <div className="row g-4">
                        <div className="col-lg banner-1">
                            <img src={banner1} alt="" />
                        </div>
                        <div className="col-lg banner-1">
                            <img src={banner2} alt="" />
                        </div>
                        <div className="col-lg banner-1">
                            <img src={banner3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default threeBanner
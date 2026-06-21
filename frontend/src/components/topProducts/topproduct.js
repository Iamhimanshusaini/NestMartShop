import React from 'react'
import './topproduct.css'
import Rating from '@mui/material/Rating';
import { Link } from 'react-router';
Link
function topproduct({ item }) {
    return (
        <div className='topsellingProd'>
            <div className="TopProduct-Img">
                <div className="topProductImg">
                    <img src={item?.images[0]} alt="" width={100} style={{ width: '60%' }} />
                </div>
                <div className="topProductInfo">
                    <h2 className='topProductName'> <Link to={`/product/details/${item._id}`}>{item?.productName}</Link> </h2>
                    <Rating className='rating' name="half-rating-read" defaultValue={item?.rating} precision={0.5} readOnly />
                    <div className="">
                        <span className="newPrice">₹{item?.price}</span>
                        &nbsp;   <span className="oldPrice">
                            ₹{Math.round(item?.price + (item?.price * item?.discount / 100))}
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default topproduct
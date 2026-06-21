import React, { useEffect, useState } from 'react'
import './prodDeatils.css'
import Sidebar from '../../components/sideBar/sidebar'
import Slider from 'react-slick';
import 'react-inner-image-zoom/lib/styles.min.css';
import proimg from '../../assests/images/product-16-2.jpg'
import InnerImageZoom from 'react-inner-image-zoom';
import Rating from '@mui/material/Rating';
import { HiOutlineHome } from "react-icons/hi2";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link, useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { MdCompareArrows } from "react-icons/md";
import axios from 'axios';
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react';


function prodDeatils() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { addCard } = useContext(CartContext)

  const { id } = useParams();
  const [oneProduct, setOneProduct] = useState(null)
  useEffect(() => {
    const fetchOneProduct = async () => {
      try {
        const res = await axios.get(`https://nestmart-6fkh.onrender.com/api/product/details/${id}`)
        setOneProduct(res.data.productDetail)
        console.log(res.data.productDetail)
      } catch (error) {
        message: 'not work'
      }

    }
    fetchOneProduct()
  }, [])



  var settings3 = {
    dots: false,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,

  };
  // product size active class code 

  const [activeSize, setActiveSize] = useState(0)

  // product quntity counter code 

  const [isquntity, setQuntity] = useState(1)
  const plus = () => {
    setQuntity(isquntity + 1)
  }
  const minus = () => {
    if (isquntity !== 1) {
      setQuntity(isquntity - 1)
    }

  }

  // product quntity counter code end

  // product description show button  code
  const [showDesc, setShowDesc] = useState(0)

  // useEffect(() => {
  //   setImgChanges(oneProduct?.images[0])

  // })
  
  const [imgChanges, setImgChanges] = useState("");

  useEffect(() => {
    if (oneProduct?.images?.length > 0) {
      setImgChanges(oneProduct.images[0]);
    }
  }, [oneProduct]);
  return (
    <div className="container-fluid">
      <div className="row">

        {/* LEFT SECTION */}
        <div className="col-12 col-lg-9" style={{ padding: '40px 30px' }}>

          <div className="row">

            {/* PRODUCT IMAGE */}
            <div className="col-12 col-md-6 mb-4">

              <div className="product-ZoomImg">

                <div className="innerzoomImg mb-3">
                  <InnerImageZoom
                    src={imgChanges}
                    zoomType='hover'
                    zoomSrc={imgChanges}
                  />
                </div>
                {/* GALLERY */}
                <div className="product-Img-gallery">
                  <Slider {...settings3} className='gallery-Images'>

                    <div className="item">
                      <img
                        src={oneProduct?.images[1]}
                        alt=""
                        className='img-fluid border rounded'
                        onClick={() =>
                          setImgChanges(oneProduct?.images[1])
                        }
                      />
                    </div>

                    <div className="item">
                      <img
                        src={oneProduct?.images[2]}
                        alt=""
                        className='img-fluid border rounded'
                        onClick={() =>
                          setImgChanges(oneProduct?.images[2])
                        }
                      />
                    </div>

                    <div className="item">
                      <img
                        src={oneProduct?.images[3]}
                        alt=""
                        className='img-fluid border rounded'
                        onClick={() =>
                          setImgChanges(oneProduct?.images[3])
                        }
                      />
                    </div>

                    <div className="item">
                      <img
                        src={oneProduct?.images[4]}
                        alt=""
                        className='img-fluid border rounded'
                        onClick={() =>
                          setImgChanges(oneProduct?.images[4])
                        }
                      />
                    </div>

                  </Slider>
                </div>
              </div>
            </div>

            {/* PRODUCT INFO */}
            <div className="col-12 col-md-6">

              <div className="product-info">

                <h1 className='fw-bold mb-3'>
                  {oneProduct?.productName}
                </h1>

                <div className="d-flex align-items-center mb-3 gap-2">

                  <Rating
                    className='rating'
                    name="half-rating-read"
                    value={oneProduct?.rating}
                    precision={0.5}
                    readOnly
                  />

                  <span>({oneProduct?.reviews})</span>

                </div>

                {/* PRICE */}
                <div className="d-flex align-items-center gap-3 mb-3">

                  <h2 className='text-success fw-bold'>
                    ₹{oneProduct?.price}
                  </h2>

                  <h4 className='text-decoration-line-through text-secondary'>
                    ₹{Math.round(oneProduct?.price + (oneProduct?.price * oneProduct?.discount / 100))}
                  </h4>

                </div>

                <p className='text-muted'>
                  {oneProduct?.description}
                </p>

                {/* SIZE */}
                <div className="product-size mt-4">

                  <span className='fw-bold'>
                    Size / Weight:
                  </span>

                  <ul className='d-flex flex-wrap gap-2 mt-3 ps-0'>

                    <li>
                      <button
                        className={`btn ${activeSize === 0 ? 'btn-success' : 'btn-outline-secondary'}`}
                        onClick={() => setActiveSize(0)}
                      >
                        50g
                      </button>
                    </li>

                    <li>
                      <button
                        className={`btn ${activeSize === 1 ? 'btn-success' : 'btn-outline-secondary'}`}
                        onClick={() => setActiveSize(1)}
                      >
                        60g
                      </button>
                    </li>

                    <li>
                      <button
                        className={`btn ${activeSize === 2 ? 'btn-success' : 'btn-outline-secondary'}`}
                        onClick={() => setActiveSize(2)}
                      >
                        80g
                      </button>
                    </li>

                    <li>
                      <button
                        className={`btn ${activeSize === 3 ? 'btn-success' : 'btn-outline-secondary'}`}
                        onClick={() => setActiveSize(3)}
                      >
                        100g
                      </button>
                    </li>

                  </ul>

                </div>

                {/* QUANTITY */}
                <div className="d-flex flex-wrap align-items-center gap-3 mt-4">

                  <div className="d-flex border rounded overflow-hidden">

                    <button
                      className='btn btn-light'
                      onClick={minus}
                    >
                      -
                    </button>

                    <input
                      type="number"
                      value={isquntity}
                      readOnly
                      className='form-control text-center border-0'
                      style={{ width: '60px' }}
                    />

                    <button
                      className='btn btn-light'
                      onClick={plus}
                    >
                      +
                    </button>

                  </div>

                  {/* ADD TO CART */}
                  <Button className='btn btn-success'
                    onClick={() => addCard(oneProduct)}>
                    <MdOutlineShoppingCart />
                    &nbsp;
                    Add To Cart
                  </Button>

                  {/* ICONS */}
                  <button className='btn btn-light border'>
                    <GoHeart />
                  </button>

                  <button className='btn btn-light border'>
                    <MdCompareArrows />
                  </button>

                </div>

              </div>

            </div>

          </div>

          {/* DESCRIPTION */}
          <div className="product-Description mt-5">

            <div className="d-flex flex-wrap gap-2 mb-4">

              <Button
                variant={showDesc === 0 ? "contained" : "outlined"}
                onClick={() => setShowDesc(0)}
              >
                Description
              </Button>

              <Button
                variant={showDesc === 1 ? "contained" : "outlined"}
                onClick={() => setShowDesc(1)}
              >
                Additional Info
              </Button>

              <Button
                variant={showDesc === 2 ? "contained" : "outlined"}
                onClick={() => setShowDesc(2)}
              >
                Vendor
              </Button>

              <Button
                variant={showDesc === 3 ? "contained" : "outlined"}
                onClick={() => setShowDesc(3)}
              >
                Reviews
              </Button>

            </div>

            {/* CONTENT */}
            <div className="border rounded p-4 bg-light">

              {showDesc === 0 && (
                <p className='mb-0'>
                  Product description content here...
                </p>
              )}

              {showDesc === 1 && (
                <div className='table-responsive'>

                  <table className='table table-bordered'>

                    <tbody>

                      <tr>
                        <th>Color</th>
                        <td>Black</td>
                      </tr>

                      <tr>
                        <th>Size</th>
                        <td>M</td>
                      </tr>

                      <tr>
                        <th>Weight</th>
                        <td>20 LBS</td>
                      </tr>

                    </tbody>

                  </table>

                </div>
              )}

              {showDesc === 2 && (
                <p className='mb-0'>
                  Vendor information content here...
                </p>
              )}

              {showDesc === 3 && (
                <p className='mb-0'>
                  Customer reviews content here...
                </p>
              )}

            </div>

          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-12 col-lg-3 mt-4 mt-lg-0">

          <Sidebar />

        </div>
      </div>



    </div>
  )
}

export default prodDeatils
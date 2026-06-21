import { useState } from 'react';
import './product.css';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { LiaEyeSolid } from "react-icons/lia";
import { React, useContext } from 'react';

import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router';

function Product({ prod }) {

  const { addCard } = useContext(CartContext);
  const [product, setProduct] = useState(prod)
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
  };
  return (

    // <div className="container-fluid">
    //     <div className="row g-4">
    //       <div className="col-6 col-md-4 col-lg-3 col-xl-2-4">

    //         <div className="productCard">
    //           {product.discount > 0 && (
    //             <span className="badge discount">
    //               {product.discount || '0%'}%
    //             </span>
    //           )}

    //           {product.tag && (
    //             <span className={`badge tag ${product.tag.toLowerCase()}`}>
    //               {product.tag || 'Hot'}
    //             </span>
    //           )}

    //           <div className="imgWrapper">
    //             <img src={product.image} alt="" className="img-fluid" />

    //             <div className="hoverActions">
    //               <button><IoHeartOutline /></button>
    //               <button><MdCompareArrows /></button>
    //               <button><LiaEyeSolid /></button>
    //             </div>
    //           </div>

    //           <div className="productInfo">
    //             <span className="category">{product.category}</span>

    //             <h6 className="title">{product.productName}</h6>

    //             <Rating value={product.rating} precision={0.5} readOnly size="small" />
    //             <br />

    //             <span className="brand">
    //               By <b>{product.brand}</b>
    //             </span>
    //           </div>

    //           <div className="priceBox">
    //             <div>
    //               <span className="newPrice">₹{product.price}</span>
    //               {product.discount > 0 && (
    //                 <span className="oldPrice">
    //                   ₹{Math.round(product.price + (product.price * product.discount / 100))}
    //                 </span>
    //               )}
    //             </div>

    //             <button className="btn btn-success btn-sm">
    //               <MdOutlineShoppingCart /> Add
    //             </button>
    //           </div>

    //         </div>

    //       </div>
    //     </div>
    //   </div>

    <div className="productCard">

      {/* Badge */}
      {product.discount > 0 && (
        <span className="badge discount">
          {product.discount || '0%'}%
        </span>
      )}

      {product.tag && (
        <span className={`badge tag ${product.tag.toLowerCase()}`}>
          {product.tag || 'Hot'}
        </span>
      )}

      {/* Image */}
      <div className="imgWrapper">
        <Link to={`/product/details/${product._id}`}>
          <img src={product.images[0]} alt="" className="img-fluid" />
        </Link>

        {/* Hover Actions */}
        <div className="hoverActions">
          <button><IoHeartOutline /></button>
          <button><MdCompareArrows /></button>
          <button><LiaEyeSolid /></button>
        </div>
      </div>

      {/* Info */}
      <div className="productInfo">
        <span className="category">{product.category.name}</span>
        <Link className='text-decoration-none' to={`/product/details/${product._id}`}>
          <h6 style={{ color: '#253d4e', textDecoration: 'none' }} className="title card-title product-title">{product.productName}</h6>
        </Link>

        <Rating value={product.rating} precision={0.5} readOnly size="small" />
        <br />

        <span className="brand">
          By <b>{product.brand}</b>
        </span>
      </div>

      {/* Price */}
      <div className="priceBox">
        <div>
          <span className="newPrice">₹{product.price}</span>
          {product.discount > 0 && (
            <span className="oldPrice">
              ₹{Math.round(product.price + (product.price * product.discount / 100))}
            </span>
          )}
        </div>
        {
          added === false ? (
            <button className="btn btn-success btn-sm"
              onClick={() => {
                addCard(product)
                handleAddToCart()
              }}
            >
              <MdOutlineShoppingCart /> Add
            </button>
          ) : (
            <button
              className="bg-green-700 text-black-700 px-4 py-2 rounded"
            >
              ✓ Added
            </button>
          )
        }

      </div>

    </div>

  );
}

export default Product;
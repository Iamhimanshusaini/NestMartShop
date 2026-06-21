import React, { useState } from "react";
import axios from "axios";

function AddProduct() {

    // Product States
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");

    // Category
    const [categoryName, setCategoryName] = useState("");
    const [categoryColor, setCategoryColor] = useState("#f2fce4");

    const [description, setDescription] = useState("");

    const [price, setPrice] = useState("");
    const [unit, setUnit] = useState("");

    const [brand, setBrand] = useState("");

    const [stock, setStock] = useState("");

    const [isAvailable, setIsAvailable] = useState(true);

    const [rating, setRating] = useState("");
    const [reviews, setReviews] = useState("");

    const [discount, setDiscount] = useState("");

    const [tags, setTags] = useState("");

    // Product Images

    const [image, setImage] = useState([]);
    const [toastMsg, setToastMsg] = useState('')
    const [toastMsgColor, setToastMsgColor] = useState('')
    const [isLoading, setIsLoadin] = useState(false)
    const token = localStorage.getItem("token")

    // Submit Product
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoadin(true)
        try {

            const formData = new FormData();

            formData.append(
                "productId",
                "ORD" + Date.now()
            );

            formData.append(
                "productName",
                productName
            );

            formData.append(
                "category",
                JSON.stringify({
                    name: categoryName,
                    color: categoryColor
                })
            );

            formData.append(
                "description",
                description
            );

            formData.append(
                "price",
                price
            );

            formData.append(
                "unit",
                unit
            );

            formData.append(
                "brand",
                brand
            );

            formData.append(
                "stock",
                stock
            );

            formData.append(
                "isAvailable",
                isAvailable
            );

            formData.append(
                "rating",
                rating
            );

            formData.append(
                "reviews",
                reviews
            );

            formData.append(
                "discount",
                discount
            );

            formData.append(
                "tags",
                JSON.stringify(tags.split(","))
            );

            // Multiple Images
            for (let i = 0; i < image.length; i++) {

                formData.append(
                    "images",
                    image[i]
                );

            }

            const res = await axios.post(
                "https://nestmart-6fkh.onrender.com/api/add-product",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setToastMsg(res.data.message);
            setToastMsgColor('success')
        } catch (error) {
            setToastMsgColor('danger')
            console.log(error);

        } finally {
            setIsLoadin(false)
        }

    };



    return (
        <>
            {
                toastMsg &&
                <div class={`toast align-items-center text-white bg-${toastMsgColor} border-0" role="alert`} aria-live="assertive" aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body">
                            {toastMsg}
                        </div>
                        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                </div>
            }
            <div className="container-fluid bg-light min-vh-100 p-4">
                <div className="bg-white rounded shadow-sm p-4">

                    <h2 className="fw-bold mb-4">
                        Add Product
                    </h2>

                    <form onSubmit={handleSubmit}>

                        <div className="row g-4">
                            {/* Product ID */}
                            {/* <div className="col-md-6">

                            <label className="form-label">
                                Product ID
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Product ID"
                                value={productId}
                                onChange={(e) =>
                                    setProductId(e.target.value)
                                }
                            />

                        </div> */}

                            {/* Product Name */}
                            <div className="col-md-6">

                                <label className="form-label">
                                    Product Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Product Name"
                                    value={productName}
                                    onChange={(e) =>
                                        setProductName(e.target.value)
                                    }
                                />

                            </div>

                            {/* Category Name */}
                            <div className="col-md-6">

                                <label className="form-label">
                                    Category Name
                                </label>

                                <select
                                    className="form-select"
                                    value={categoryName}
                                    onChange={(e) =>
                                        setCategoryName(e.target.value)
                                    }
                                >

                                    <option value="">
                                        Select Category
                                    </option>

                                    <option value="Fruits & Vegetables">
                                        Fruits & Vegetables
                                    </option>

                                    <option value="Dairy & Milk Products">
                                        Dairy & Milk Products
                                    </option>

                                    <option value="Bakery & Breads">
                                        Bakery & Breads
                                    </option>

                                    <option value="Rice, Atta & Pulses">
                                        Rice, Atta & Pulses
                                    </option>

                                    <option value="Snacks & Namkeen">
                                        Snacks & Namkeen
                                    </option>

                                    <option value="Beverages & Soft Drinks">
                                        Beverages & Soft Drinks
                                    </option>

                                    <option value="Tea & Coffee">
                                        Tea & Coffee
                                    </option>

                                    <option value="Oils & Ghee">
                                        Oils & Ghee
                                    </option>

                                    <option value="Spices & Masala">
                                        Spices & Masala
                                    </option>

                                    <option value="Dry Fruits & Nuts">
                                        Dry Fruits & Nuts
                                    </option>

                                    <option value="Frozen Foods">
                                        Frozen Foods
                                    </option>

                                    <option value="Instant & Ready-to-Eat">
                                        Instant & Ready-to-Eat
                                    </option>

                                    <option value="Personal Care">
                                        Personal Care
                                    </option>

                                    <option value="Household Essentials">
                                        Household Essentials
                                    </option>

                                    <option value="Cleaning Supplies">
                                        Cleaning Supplies
                                    </option>

                                    <option value="Baby Care">
                                        Baby Care
                                    </option>

                                    <option value="Pet Care">
                                        Pet Care
                                    </option>

                                    <option value="Chocolates & Sweets">
                                        Chocolates & Sweets
                                    </option>

                                    <option value="Meat, Fish & Eggs">
                                        Meat, Fish & Eggs
                                    </option>

                                    <option value="Organic & Healthy Foods">
                                        Organic & Healthy Foods
                                    </option>

                                </select>

                            </div>

                            {/* Category Color */}
                            <div className="col-md-6">

                                <label className="form-label">
                                    Category Color
                                </label>

                                <input
                                    type="color"
                                    className="form-control form-control-color"
                                    value={categoryColor}
                                    onChange={(e) =>
                                        setCategoryColor(e.target.value)
                                    }
                                />

                            </div>

                            {/* Description */}
                            <div className="col-12">

                                <label className="form-label">
                                    Description
                                </label>

                                <textarea
                                    className="form-control"
                                    rows="4"
                                    placeholder="Enter Description"
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                ></textarea>

                            </div>

                            {/* Price */}
                            <div className="col-md-4">

                                <label className="form-label">
                                    Price
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter Price"
                                    value={price}
                                    onChange={(e) =>
                                        setPrice(e.target.value)
                                    }
                                />

                            </div>

                            {/* Unit */}
                            <div className="col-md-4">

                                <label className="form-label">
                                    Unit
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="1kg / 500g"
                                    value={unit}
                                    onChange={(e) =>
                                        setUnit(e.target.value)
                                    }
                                />

                            </div>

                            {/* Brand */}
                            <div className="col-md-4">

                                <label className="form-label">
                                    Brand
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Brand"
                                    value={brand}
                                    onChange={(e) =>
                                        setBrand(e.target.value)
                                    }
                                />

                            </div>

                            {/* Stock */}
                            <div className="col-md-4">

                                <label className="form-label">
                                    Stock
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter Stock"
                                    value={stock}
                                    onChange={(e) =>
                                        setStock(e.target.value)
                                    }
                                />

                            </div>

                            {/* Rating */}
                            <div className="col-md-4">

                                <label className="form-label">
                                    Rating
                                </label>

                                <input
                                    type="number"
                                    step="0.1"
                                    className="form-control"
                                    placeholder="4.5"
                                    value={rating}
                                    onChange={(e) =>
                                        setRating(e.target.value)
                                    }
                                />

                            </div>

                            {/* Reviews */}
                            <div className="col-md-4">

                                <label className="form-label">
                                    Reviews
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="210"
                                    value={reviews}
                                    onChange={(e) =>
                                        setReviews(e.target.value)
                                    }
                                />

                            </div>

                            {/* Discount */}
                            <div className="col-md-6">

                                <label className="form-label">
                                    Discount %
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="5"
                                    value={discount}
                                    onChange={(e) =>
                                        setDiscount(e.target.value)
                                    }
                                />

                            </div>

                            {/* Tags */}
                            <div className="col-md-6">

                                <label className="form-label">
                                    Tags
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="New,Hot,Sale"
                                    value={tags}
                                    onChange={(e) =>
                                        setTags(e.target.value)
                                    }
                                />

                            </div>

                            {/* Product Images */}
                            <div className="col-md-6">
                                <label className="form-label">
                                    Product Images max(5)
                                </label>

                                <input
                                    type="file"
                                    multiple
                                    required
                                    className="form-control"
                                    onChange={(e) => setImage(Array.from(e.target.files))}
                                />
                            </div>

                            {/* Product Available */}
                            <div className="col-12">

                                <div className="form-check">

                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={isAvailable}
                                        onChange={(e) =>
                                            setIsAvailable(e.target.checked)
                                        }
                                    />

                                    <label className="form-check-label">
                                        Product Available
                                    </label>

                                </div>

                            </div>

                            {/* Submit Button */}
                            <div className="col-12">

                                <button
                                    type="submit"
                                    className="btn btn-primary px-5 py-2"
                                >
                                    {
                                        isLoading ? (
                                            <div
                                                className="position-fixed top-0 start-0 w-100 vh-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50"
                                                style={{ zIndex: 9999 }}
                                            >
                                                <div className="spinner-border text-primary" role="status">
                                                    <span className="visually-hidden">
                                                        Loading...
                                                    </span>
                                                </div>
                                            </div>
                                        ) :

                                            "Add Product"
                                    }

                                </button>

                            </div>

                        </div>

                    </form>

                </div>

            </div>
        </>

    );
}

export default AddProduct;
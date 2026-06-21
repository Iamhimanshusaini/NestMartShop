import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function AllProducts() {
    const token = localStorage.getItem("token")
    const [products, setProducts] = useState([]);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);

    const productsPerPage = 10;



    // Fetch Products
    useEffect(() => {

        const fetchProducts = async () => {

            try {

                const res = await axios.get(
                    "https://nestmart-6fkh.onrender.com/api/product/all",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                setProducts(res.data.productData);

            } catch (error) {

                console.log(error);

            }

        };

        fetchProducts();

    }, []);

    // delete Product 
    const productDelete = async (prodId) => {

        const confirmDelete =
            window.confirm("Are you sure delete this product?");

        if (!confirmDelete) return;

        try {

            await axios.delete(
                `https://nestmart-6fkh.onrender.com/api/admin/delete-product/${prodId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            window.location.reload()
            // UI update after delete
            // setProducts(
            //     products.filter(
            //         (item) => item._id !== prodId
            //     )
            // );

            alert("Product Deleted Successfully");

        } catch (error) {

            console.log(error.message);

            alert("Delete Failed");

        }

    }

    // Pagination Logic
    const lastIndex = currentPage * productsPerPage;

    const firstIndex = lastIndex - productsPerPage;

    const currentProducts =
        products.slice(firstIndex, lastIndex);

    const totalPages =
        Math.ceil(products.length / productsPerPage);



    return (

        <div className="container-fluid bg-light min-vh-100 p-4">

            <div className="bg-white p-4 rounded shadow-sm">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h2 className="fw-bold mb-0">
                        All Products ({products.length})
                    </h2>

                    <Link
                        to="/admin/add-product"
                        className="btn btn-primary"
                    >
                        Add Product
                    </Link>

                </div>



                {/* Product Table */}
                <div className="table-responsive">

                    <table className="table table-bordered align-middle">

                        <thead className="table-dark">

                            <tr>

                                <th>#</th>

                                <th>Image</th>

                                <th>Product Name</th>

                                <th>Category</th>

                                <th>Price</th>

                                <th>Stock</th>

                                <th>Brand</th>

                                <th>Edit</th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                products?.map(
                                    (item, index) => (

                                        <tr key={item._id}>

                                            <td>
                                                {/* {firstIndex + index + 1} */}
                                            </td>

                                            {/* Product Image */}
                                            <td>

                                                <img
                                                    src={item.images[0]}
                                                    alt=""
                                                    style={{
                                                        width: "70px",
                                                        height: "70px",
                                                        objectFit: "cover"
                                                    }}
                                                    className="rounded"
                                                />

                                            </td>

                                            {/* Product Name */}
                                            <td
                                                style={{
                                                    maxWidth: "250px"
                                                }}
                                            >

                                                <div
                                                    className="text-truncate"
                                                >
                                                    {item.productName}
                                                </div>

                                            </td>

                                            {/* Category */}
                                            <td>
                                                {
                                                    item.category?.name
                                                }
                                            </td>

                                            {/* Price */}
                                            <td>
                                                ₹{item.price}
                                            </td>

                                            {/* Stock */}
                                            <td>
                                                {item.stock}
                                            </td>

                                            {/* Brand */}
                                            <td>
                                                {item.brand}
                                            </td>

                                            {/* Edit Button */}
                                            <td>
                                                <div className="d-flex">

                                                    {/* Preview */}
                                                    <button type="button" class="btn" data-toggle="" data-placement="top" title="Preview">
                                                        <Link
                                                            to={`/admin/product-preview/${item._id}`}
                                                            className="btn btn-light btn-sm border"
                                                        >
                                                            👁️
                                                        </Link>
                                                    </button>


                                                    {/* Edit */}
                                                    <button type="button" class="btn" data-toggle="" data-placement="top" title="Edit">
                                                        <Link
                                                            to={`/admin/product-preview/${item._id}`}
                                                            className="btn btn-light btn-sm border"
                                                        >
                                                            <FaRegEdit />

                                                        </Link>
                                                    </button>

                                                    {/* Delete */}
                                                    <button type="button" class="btn" data-toggle="" data-placement="top" title="Delete"
                                                        onClick={() => productDelete(item._id)}
                                                    >
                                                        <MdDeleteOutline />
                                                    </button>
                                                </div>

                                            </td>

                                        </tr>

                                    )
                                )
                            }

                        </tbody>

                    </table>

                </div>



                {/* Pagination */}
                <div className="d-flex justify-content-center mt-4 gap-2 flex-wrap">

                    {
                        Array.from(
                            { length: totalPages },
                            (_, i) => (

                                <button
                                    key={i}
                                    className={`btn ${currentPage === i + 1
                                        ? "btn-primary"
                                        : "btn-outline-primary"
                                        }`}
                                    onClick={() =>
                                        setCurrentPage(i + 1)
                                    }
                                >

                                    {i + 1}

                                </button>

                            )
                        )
                    }

                </div>

            </div>

        </div>
    );
}

export default AllProducts;
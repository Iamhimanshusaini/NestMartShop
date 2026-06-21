import React from 'react';
import Slider from 'react-slick';
import './catSlide.css';
import { Link } from 'react-router-dom';

function CatSlide({ prod }) {
const uniqueCategories = [
  ...new Map(
    prod.map(item => [item.category.name, item])
  ).values()
];
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        arrows: true,

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 8
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };

    return (
        <>
            <div className="cateSlider">
                <div className="container-fluid">

                    <div className="catMenu row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <h2 className="hd">Featured Categories</h2>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <ul className="d-flex flex-wrap justify-content-lg-end justify-content-start gap-3 p-0 m-0">
                                <li>
                                    <Link to="/shop/Bakery">Cake & Milk</Link>
                                </li>
                                <li>
                                    <Link to="/shop/Dairy">Coffee & Teas</Link>
                                </li>
                                <li>
                                    <Link to="/shop/Fruits">Fruits</Link>
                                </li>
                                <li>
                                    <Link to="/shop/Vegetables">Vegetables</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Slider {...settings} className="main_catSlider">

                        {uniqueCategories?.map((cat, index) => (
                            <div className="item" key={index}
                            >
                                <Link
                                    to={`/shop/${cat.category.name}`}
                                    className="text-decoration-none"
                                >
                                    <div className="row">
                                        <div
                                            className="itemInfo"
                                            style={{
                                                backgroundColor: cat.category.color
                                            }}
                                        >
                                            <img
                                                src={cat.category.image}
                                                alt={cat.category.name}
                                                className="img-fluid"
                                            />

                                            <h5>{cat.category.name}</h5>

                                            <p>
                                                {prod.filter(
                                                    item =>
                                                        item.category.name ===
                                                        cat.category.name
                                                ).length}{' '}
                                                items
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>


                        ))}
                    </Slider>

                </div>
            </div>
        </>
    );
}

export default CatSlide;
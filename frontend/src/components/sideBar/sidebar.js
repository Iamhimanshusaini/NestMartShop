import React from 'react'
import './sidebar.css'
import { Link } from 'react-router'
import Slider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';
import index from '../../pages/home';


function sidebar({ product }) {
    function valuetext(value) {
        return `${value}°C`;
    }

    const [value, setValue] = React.useState([100, 1000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="cardWrapper">
            <div className='card'>
                <h2 className='topProductHeading'>Category</h2>
                {
                    product?.slice(0, 10).map((cate, index) => {
                        return (
                            <div className="catList">
                                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-1.svg" alt="" />
                                <h3><Link to={`${cate.category.name}`} className='catItemName text-decoration-none'>{cate?.category.name}</Link></h3>
                                <span className='stock-Number'>{cate.category.length}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className='card'>
                <h2 className='topProductHeading'>Fill by price</h2>
                <div className="priceRange">
                    <Slider
                        min={0}
                        step={1}
                        max={2000}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
                    <div className="price">
                        <h4><span>From:</span>${value[0]}</h4>
                        <h4><span>To:</span>${value[1]}</h4>
                    </div>
                </div>
                <div className="colorFilter">
                    <h4>Color</h4>
                    <div className="allCheckbox">
                        <div className="checkboxFilter">
                            <input type="checkbox" id="red" name="red" />
                            <label for="red">Red(56)</label>
                        </div>
                        <div className="checkboxFilter">
                            <input type="checkbox" id="red" name="red" />
                            <label for="red">green(78)</label>
                        </div>
                        <div className="checkboxFilter">
                            <input type="checkbox" id="red" name="red" />
                            <label for="red">Blue(55)</label>
                        </div>
                        <div className="checkboxFilter">
                            <input type="checkbox" id="red" name="red" />
                            <label for="red">Red(56)</label>
                        </div>
                        <div className="checkboxFilter">
                            <input type="checkbox" id="red" name="red" />
                            <label for="red">green(78)</label>
                        </div>
                        <div className="checkboxFilter">
                            <input type="checkbox" id="red" name="red" />
                            <label for="red">Blue(55)</label>
                        </div>
                    </div>
                </div>
                <div className="colorFilter">
                    <h4>Item Condition</h4>
                    <div className="allCheckbox">
                        <div className="checkboxFilter">
                            <input type="checkbox" id="red" name="red" />
                            <label for="red">Red(56)</label>
                        </div>
                        <div className="checkboxFilter">
                            <input type="checkbox" id="red" name="red" />
                            <label for="red">green(78)</label>
                        </div>
                        <div className="checkboxFilter">
                            <input type="checkbox" id="red" name="red" />
                            <label for="red">Blue(55)</label>
                        </div>
                        <div className="checkboxFilter">
                            <input type="checkbox" id="red" name="red" />
                            <label for="red">Red(56)</label>
                        </div>
                        <div className="checkboxFilter">
                            <input type="checkbox" id="red" name="red" />
                            <label for="red">green(78)</label>
                        </div>
                        <div className="checkboxFilter">
                            <input type="checkbox" id="red" name="red" />
                            <label for="red">Blue(55)</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card'>
                <h2 className='topProductHeading'>New products</h2>
                <div className="newProduct">
                    <div className="topProductImg">
                        <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-1.jpg" alt="" width={100} />
                    </div>
                    <div className="topProductInfo">
                        <h2 className='topProductName'> <Link>Nestle Original Coffee-Mate Coffee Creamer</Link> </h2>
                        <Rating className='rating' name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        <div className="">
                            <span className="newPrice">12$</span>
                            &nbsp;   <span className="oldPrice">30$</span>
                        </div>
                    </div>
                </div>
                <div className="newProduct">
                    <div className="topProductImg">
                        <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-1.jpg" alt="" width={100} />
                    </div>
                    <div className="topProductInfo">
                        <h2 className='topProductName'> <Link>Nestle Original Coffee-Mate Coffee Creamer</Link> </h2>
                        <Rating className='rating' name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        <div className="">
                            <span className="newPrice">12$</span>
                            &nbsp;   <span className="oldPrice">30$</span>
                        </div>
                    </div>
                </div>
                <div className="newProduct">
                    <div className="topProductImg">
                        <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-1.jpg" alt="" width={100} />
                    </div>
                    <div className="topProductInfo">
                        <h2 className='topProductName'> <Link>Nestle Original Coffee-Mate Coffee Creamer</Link> </h2>
                        <Rating className='rating' name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        <div className="">
                            <span className="newPrice">12$</span>
                            &nbsp;   <span className="oldPrice">30$</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default sidebar
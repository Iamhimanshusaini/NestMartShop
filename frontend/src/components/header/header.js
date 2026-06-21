import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router';
import './header.css';
import Select from '../selectDrop/select.js';
import navLogo from '../../assests/images/logo.svg';
import { CiSearch } from "react-icons/ci";
import axios from 'axios';
import { LuMapPin } from "react-icons/lu";
import Compare from '../../assests/images/icon-compare.svg';
import Wishlist from '../../assests/images/icon-heart.svg';
import Cardicon from '../../assests/images/icon-cart.svg';
import User from '../../assests/images/icon-user.svg';
import { IoIosArrowDown } from "react-icons/io";
import Button from '@mui/material/Button';
import { CiUser } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FiTag } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiListSettingsLine } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import MenuBar from '../nav/menubar.js';
import AddToCard from '../addToCard/addToCard.js'
import Product from '../product/product.js';
import addToCard from '../addToCard/addToCard.js';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.js';
import { useNavigate } from 'react-router-dom';
import ClickAwayListener from "@mui/material/ClickAwayListener";

function Header() {
    const navigate = useNavigate()
    const { card } = useContext(CartContext);

    const headerRef = useRef();
    const [categories, setCategories] = useState([
        'All Categories',
        'Milks and Dairies',
        'Wines & Drinks',
        'Clothing & beauty',
        'Fresh Seafood',
        'Pet Foods & Toy',
        'Fast food',
        'Baking material',
        'Vegetable',
        'Fresh Fruit'
    ]);

    const [isDropdownMenu, setIsDropdownMenu] = useState(false);
    const [countryList, setCountryList] = useState([]);
    const [openCard, setOpenCard] = useState(false)
    //   const handleClickAway = () => {
    //     setIsDropdownMenu(false);
    //   };

    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            setIsLogin(true)
        }
    }, [])
    const userId = JSON.parse(localStorage.getItem('user'))?._id

    // logout code  

    const logOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setIsLogin(false)
        setIsDropdownMenu(false);
        navigate('/')

    }
    const opendropdownMenu = () => {
        setIsDropdownMenu(!isDropdownMenu);
    };
    const onOpenCard = () => {
        setOpenCard(!openCard);
    };

    // Fetch countries
    useEffect(() => {
        const getCountry = async () => {
            try {
                const res = await axios.get('https://countriesnow.space/api/v0.1/countries');
                if (res) {
                    const countries = res.data.data.map(item => item.country);
                    setCountryList(countries);
                }
            } catch (error) {
                console.log(error.message);
            }
        };

        getCountry();
    }, []);

    // Sticky header
    const [fixed, setFixed] = useState()

    useEffect(() => {
        const handleScroll = () => {
            let position = window.pageYOffset;
            // console.log(position)
            if (position > 100) {
                setFixed('fixed')
                // headerRef.current.classList.add('fixed');
            } else {
                setFixed('')
                // headerRef.current.classList.remove('fixed');
            }
        };

        window.addEventListener('scroll', handleScroll);
    }, []);

    return (

        <>
            <ClickAwayListener
                onClickAway={() => {
                    setIsDropdownMenu(false);
                    setOpenCard(false)
                }}>

                <div className="" ref={headerRef}>
                    <div className="container-fluid">
                        <div className="row align-items-center pt-2">
                            <div className="col">
                                <a class="navbar-brand"><img src={navLogo} alt="" /></a>
                            </div>
                            <div className="col-2">
                                <div className="searchBar">
                                    <Select data={categories} placeholder="All Category" Icon={<IoIosArrowDown />} />
                                    <div className="search">
                                        <input type="text" placeholder="Search....." className="allinput" />
                                    </div>
                                    <CiSearch className="cur searchIcon" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="location">
                                    <span className="locationIcon"><LuMapPin /></span>
                                    <Select data={countryList} placeholder="Your location..." Icon={true} />
                                </div>
                            </div>
                            <div className="col">
                                <div className="desktopMenuWrapper">
                                    {/* <div className="allMenu">
                                    <span className="menuContent">
                                        <img src={Compare} alt="" />
                                        <span className="badge">3</span>
                                        <span>Compare</span>
                                    </span>
                                </div> */}

                                    <div className="allMenu">
                                        <span className="menuContent">
                                            <img src={Wishlist} alt="" />
                                            <span className="badge">3</span>
                                            <span>Wishlist</span>
                                        </span>
                                    </div>

                                    <div className="allMenu">

                                        <span className="menuContent"
                                            onClick={onOpenCard}>
                                            <img src={Cardicon} alt="" />
                                            {card.length > 0 && (
                                                <span className="badge">
                                                    {card.length}
                                                </span>
                                            )
                                            }                                    </span>
                                        {
                                            openCard && (
                                                <AddToCard setOpenCard={setOpenCard} />
                                            )

                                        }


                                    </div>
                                    {
                                        isLogin ?
                                            <div className="allMenu">
                                                <span className="menuContent">
                                                    <div onClick={opendropdownMenu}>
                                                        <img src={User} alt="" />
                                                        <span >Account</span>
                                                    </div>
                                                </span>
                                            </div>
                                            :
                                            <Link className='text-decoration-none' to='/signup'>
                                                <Button variant="text">
                                                    SignUp
                                                </Button>
                                            </Link>

                                    }


                                </div>
                            </div>
                            {isDropdownMenu && (
                                <div className="accountMenu">

                                    <div className="logoWithName">
                                        <Link className='text-decoration-none'
                                            to={`user/profile/${userId}`}
                                            onClick={() => setIsDropdownMenu(false)}>
                                            <Button variant="text">
                                                <span className="iconDropMenu"><CiUser /></span> My Account
                                            </Button>
                                        </Link>
                                    </div>

                                    <div className="logoWithName">
                                        <Link className='text-decoration-none'
                                            to={`myorders/${userId}`}
                                            onClick={() => setIsDropdownMenu(false)}>
                                            <Button variant="text">
                                                <span className="iconDropMenu"><IoLocationOutline /></span>My Orders
                                            </Button>
                                        </Link>
                                    </div>

                                    <div className="logoWithName">
                                        <Button variant="text"
                                            onClick={() => setIsDropdownMenu(false)}>
                                            <span className="iconDropMenu"><FiTag /></span> My Voucher
                                        </Button>
                                    </div>

                                    <div className="logoWithName">
                                        <Button variant="text" onClick={() => setIsDropdownMenu(false)}>
                                            <span className="iconDropMenu"><FaRegHeart /></span> My Wishlist
                                        </Button>
                                    </div>

                                    <div className="logoWithName">
                                        <Button variant="text" onClick={() => setIsDropdownMenu(false)}>
                                            <span className="iconDropMenu"><RiListSettingsLine /></span> Setting
                                        </Button>
                                    </div>

                                    <div className="logoWithName">
                                        <Button variant="text"
                                            onClick={logOut}>
                                            <span className="iconDropMenu"><MdOutlineLogout /></span>
                                            Sign out

                                        </Button>
                                    </div>

                                </div>

                            )}
                        </div>
                    </div>
                </div>
            </ClickAwayListener >
            <MenuBar fixHeader={fixed} />

        </>
    );
}

export default Header;
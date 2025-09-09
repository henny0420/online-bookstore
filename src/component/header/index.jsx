import React, { useState } from "react";
import './header.css';
import logo22 from '../../assets/logo22.png';
import { Search, UserPen, Heart, ShoppingCart, Grip, ChevronDown } from "lucide-react";
import { Link } from "react-router";
// import { library_database } from "../../database/data";


export default function Header({on_search_item,on_search_option}) { 

    // const [search_item, setSearch_item] = useState(library_database);
    // const [search_option, setSearch_option] = useState('search by');

    const handle_search = (ev) => {

        on_search_item(ev.target.value);
    }
    
    const handle_option =(ev) => {


        on_search_option(ev.target.value);
    }


    return (

        <div className="sec-header">
            <div className="upper-section">
                <div className="container ">
                    <div className="upper-section-flex">

                        <div></div>
                        <span>Borrow a book or Buy a book</span>
                        <div className="sign-in-section">
                           <Link to="/" style={{ textDecoration: 'none' }}> <span>Register now</span></Link>
                           <div className="verticle-line-sign"></div>
                            <Link to="/login" style={{ textDecoration: 'none' }}> <span>Sign in</span></Link>

                        </div>
                    </div>
                </div>
            </div>
            <div className="section-middle">
                <div className="container">
                    <div className="middle-flex">
                        <img src={logo22} alt="logo" />

                        <div className="input-section">

                            <input type="text" placeholder="search Books..." id="search"
                                onChange={(ev) =>   handle_search(ev)   } ></input>

                            <div className="search-by">

                                <select onChange={(ev) =>  handle_option(ev)  }>


                                    <option >search by</option>
                                    <option>book name</option>
                                    <option>genre</option>
                                    <option>author</option>
                                    <option>language</option>
                                    <option>rating</option>


                                </select>
                            </div>

                            <div className="search-button">
                                <Search />
                            </div>

                        </div>


                        <div className="section-user">
                             <Link to="/userdetails" style={{ textDecoration: 'none' }}>
                                        <div className="account">
                                            <UserPen />
                                        </div>
                            </Link>
                            <div className="verticle-line"></div>
                            <div className="favourites">
                                <Heart />
                            </div>
                            <div className="verticle-line"></div>

                            <div className="cart">
                                <ShoppingCart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-bottom">
                <div className="container">
                    <div className="bottom-flex">
                        <div className="genre-section">
                            <div className="genre-flex-left">
                                <Grip />
                                <span>Genre</span>
                            </div>
                            <div className="genre-flex-right">
                                <ChevronDown />
                            </div>
                        </div>
                        <ul className="header-elements-flex">
                           <Link to='/home' style={{ textDecoration: 'none', color: 'inherit' }}><li>Home</li></Link>
                            <div className="catagory-section">
                                <div className="catagory-flex">
                                    <li>Catagory</li>
                                    <ChevronDown />
                                </div>
                                <div className="catagory-dropdown">
                                    <span>Magazine</span>
                                    <span>Children book</span>
                                    <span>Spiritual</span>
                                    <span>Biography</span>
                                    <span>Business</span>
                                </div>
                            </div>
                            <li>Author</li>
                            <li>Blog</li>
                            <li>Contact us</li>

                        </ul>
                    </div>
                </div>
            </div>


        </div>

    )
}
import React, { useState } from "react";
import { Link } from "react-router";
// import  {library_database}  from '../database/data.js';
import './card.css';
import { Heart, ShoppingCart, Star } from "lucide-react";


export function Card(props) {


    return (
        <div className="card-item">
            <div className="card-upper-section">
                <div className="cover">
                    <img src={props.cover_image} alt={props.name} />
                    <div className="layer">
                        <div className="layer-items">
                            <div className="layer-item-section">
                                <Heart />
                            </div>
                            <div className="layer-item-section">
                                <ShoppingCart />
                            </div>
                            <div className="layer-item-section">
                                <Star />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-lower-section">
                <div className="book-name">
                    <Link to={`/discription/${props.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h4>{props.name}</h4>
                    </Link>
                </div>
                <div className="book-info">
                    <div className="book-genre">
                        <h5>{props?.genre_of_book?.join(' , ')}</h5>
                    </div>
                    <span>By {props?.author?.join(' , ')}</span>
                    <div className="prize-flex">
                        <h5>₹
                            {props?.price}</h5>
                    </div>
                    <div>
                        <button className="btn-31">
                            <span className="text-container">
                                <span className="text">Add to cart</span>
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </div>





    );
}
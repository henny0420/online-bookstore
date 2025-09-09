import React, { useState } from 'react'
import './book_discription.css'
import {Star} from 'lucide-react'


export default function Book_discription(props) {

    const Num=Math.floor(props.rating);
    const [quantity,setQuantity]=useState(1);
    
    const handle_increase=()=>{
        setQuantity(quantity+1)
    }
    
    const handle_decrease = () =>{

        quantity!=0 ?setQuantity(quantity-1) : setQuantity(0)
    }

    return (
        <div>
        <div className='book_discription_card'>
            <div className='upper-section-discription'>
            <div className='upper-banner'>
                <img src={props.banner_img}></img>
            </div>
            <div className='book_image-abs'>
                <img src={props.img}></img>
                <h6>pages : {props.pages}</h6>

            </div>
            
            <div className='book-info-header'>
                <p>{props.year}</p>
                <h1>{props.b_name}</h1>

                <div className='author-section'>
                    <div className='profile-author'></div>

                    <h3>{props.author}</h3>
                </div>
                <div className='rating-section'>
                {
                    Array(Num).fill().map(( ) => (
                        <Star/>
                    ))
}
                    </div>
            </div>
            </div>

        </div>
            <div className='section-bottom-description'>
                <h6>{props.genre}</h6>
                <span>{props.about}</span>


                <h2>{props.price}</h2>

                <div className='quantity-section'>
                    <h4>Quantity</h4>
                    <div className='incr-dicr'>
                        <button onClick={() => handle_decrease()}>-</button>
                        <p>{quantity}</p>
                        <button onClick={() => handle_increase()}>+</button>
                    </div>
                </div>
                
                
            </div>


            </div>
    )
}
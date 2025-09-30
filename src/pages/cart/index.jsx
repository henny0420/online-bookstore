import React, { useContext, useEffect, useState } from "react";
import Header from "../../component/header";
import './cart.css'
import CartContext from "../../config/context/cartcontext";
import { Trash } from "lucide-react";
export default function Cart() {




    const { cartItem, setCartItem } = useContext(CartContext)

    const handle_increase = (val) => {
        const updatedItems = cartItem.items.map((book) => {
            if (book.name === val.name) {
                return { ...book, qnty: book.qnty + 1 };
            }
            return book;
        });

        setCartItem({
            ...cartItem,
            items: updatedItems,
        });

    };


    const handle_decrease = (val) => {
        const updatedItems = cartItem.items.map((book) => {
            if (book.name === val.name) {
                const newQnty = book.qnty > 1 ? book.qnty - 1 : 1;
                return { ...book, qnty: newQnty };
            }
            return book;
        });

        setCartItem({
            ...cartItem,
            items: updatedItems,
        });
    };


    const handleDelete = (val) => {
        let deleted_book = cartItem.items.filter((book) => book.name != val.name);
        console.log(deleted_book);

        setCartItem({
            ...cartItem,
            items: deleted_book
        })
    }


    return (
        <>
            <Header />
            <div className="add-to-cart-page">
                <h3>Shopping cart</h3>
                <div className="cart-items">
                    <div className="item-section">
                        {

                            cartItem.items.map((val) => {
                                return (

                                    <div className="items" key={val.id}>
                                        <div className="items-img">
                                            <img src={val.cover_image}></img>
                                            <div className="text-cart">
                                                <h2>{val.name}</h2>
                                                <h5>By : {val?.author?.join(',')}</h5>
                                            </div>
                                        </div>
                                        <div className="items-f">
                                            <div className='quantity-section'>
                                                <div className='incr-dicr'>
                                                    <button onClick={() => handle_decrease(val)}>-</button>
                                                    <p>{val.qnty}</p>
                                                    <button onClick={() => handle_increase(val)}>+</button>
                                                </div>
                                            </div>
                                            <div className="items-info">
                                                <h2>{val.price} ₹</h2>
                                                <button className="delete-icon" onClick={() => { handleDelete(val) }}><Trash /></button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>

                    {/* <h2>subtotal : </h2>

                    <h2>{total}</h2> */}
                </div>
            </div>



        </>
    )
}
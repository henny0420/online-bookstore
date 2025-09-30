import React, { useContext, useState } from "react";
import Data from "../../database";
import { library_database } from "../../database/data";
import './home.css'
import { Card } from "../../component/card";
import CartContext from "../../config/context/cartcontext";
import { useOutletContext } from "react-router";

export default function Home(){

  const { books } = useOutletContext(); 
    return(
        <div>
             <div className="container">
                            <div className="cards ">
                                {
                                    books.map((value) => {
                                        return (
                                            <Card 
                                                key={value.book_id}
                                                cover_image={value.image}
                                                name={value.book_name}
                                                genre_of_book={value?.about?.genre}
                                                author={value?.about?.author_name}
                                                book_language={value?.about?.language}
                                                book_rating={value?.about?.ratings?.amazon}
                                                id={value?.book_id}
                                                price={value?.book_for_sell?.price} />
            
                                        );
                                    })
                                }
            
            
                            </div>
            
                        </div>
                    </div>
    )
}
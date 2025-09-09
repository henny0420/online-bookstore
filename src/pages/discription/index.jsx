import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { library_database } from "../../database/data";
import './discription.css';
import Book_discription from "../../component/book_discription";

export default function Discription() {
    
            let {id}=useParams();
    
            // const id=params.id;
            const [disc,setDisc]=useState({});

            useEffect(()=>{

            setDisc(library_database.find(val => val.book_id === Number(id)) || {});

            },[id])

    return (

        <div>
            {
                Object.keys(disc).length > 0 ? (
                    
                    <Book_discription 
                    
                    banner_img={disc.banner_image} 
                    img={disc.image}
                    b_name={disc.book_name}
                    author={disc.about.author_name}
                    year={disc.about.publish_details.publish_year}
                    rating={disc.about.ratings.amazon}
                    about={disc.description}
                    price={disc.book_for_sell.price}
                    genre={disc.about.genre.join(', ')}
                    pages={disc.number_of_pages}


                    />

                ) : (
                    <h1>loading...</h1>
                )                                                                                                                                                                                                   
            }
            
        </div>
    )
}


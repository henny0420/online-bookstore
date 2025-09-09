import React, { useState } from "react";
import Header from "../header";
import { Outlet } from "react-router";
import Aside from "../aside";
import { library_database } from "../../database/data";
import Home from "../../pages/home";

export default function Layout() {

    const [searchItem, setSearchItem] = useState('');
    const [searchOption, setSearchOption] = useState('search by');
    
    const filterBooks = () => {
        if (searchItem === '') {
            return library_database;
        }

        const searchVal = searchItem.toLowerCase();
        
        return library_database.filter((value) => {

            const bookName = value?.book_name?.toLowerCase() || '';

            const authors = value?.about?.author_name || [];

            const genres = value?.about?.genre || [];

            const languages = value?.about?.language || [];

            const rating = value?.about?.ratings?.amazon?.toString() || '';
            
            if (searchOption === 'book name') {

                return bookName.includes(searchVal);

            }
             else if (searchOption === 'author') {

                return authors.some(author => 

                    author?.toLowerCase().includes(searchVal)
                );

            } else if (searchOption === 'genre') {

                return genres.some(genre => 

                    genre?.toLowerCase().includes(searchVal)
                );

            } else if (searchOption === 'language') {

                return languages.some(lang => 

                    lang?.toLowerCase().includes(searchVal)
                );

            } else if (searchOption === 'rating') {

                return rating.includes(searchVal);

            } else {
                // Default search across all fields
                return (
                    bookName.includes(searchVal) ||
                    
                    authors.some(author => 
                        author?.toLowerCase().includes(searchVal)
                    ) ||
                    
                    genres.some(genre => 
                        genre?.toLowerCase().includes(searchVal)
                    ) ||
                    
                    languages.some(lang => 
                        lang?.toLowerCase().includes(searchVal)
                    ) ||

                    rating.includes(searchVal) ||

                    value?.description?.toLowerCase().includes(searchVal) ||
                    
                    value?.slug?.toLowerCase().includes(searchVal)
                );
            }
        });
    };
    
    const filteredBooks = filterBooks();

    return(
        <>
            <Header on_search_item={setSearchItem} on_search_option={setSearchOption} />
            <Home Books={filteredBooks} />   
        </>
    )
}
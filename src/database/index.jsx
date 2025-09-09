// import React, { useState } from "react";
// import { library_database } from '../database/data.js';
// import './database.css';
// import { Card } from "../component/card/index.jsx";


// export default function Data() {

//     const [filter, setFilter] = useState(library_database);
//     const [search, setSearch] = useState('');
//     const [sortBook, setSortBook] = useState(library_database);

//     return (
//         <div className="section-header">
//             <h1>Library database</h1>


//             <div className="search-section">
//                 <label>Search</label>

//                 <select 

//                 onChange={(ev)=>{

//                     let sort_val=ev.target.value;

//                     if (sort_val==='sort ascending'){
//                         setSortBook(library_database.sort());
//                     }

//                 }
//                 }>


//                     <option>Filter</option>
//                     <option>sort ascending</option>
//                 </select>


//                 <select
//                     onChange={(ev) => {
//                         let selected_filter = ev.target.value;
//                         setSearch(selected_filter);



//                     }}>


//                     <option >search by</option>
//                     <option>book name</option>
//                     <option>genre</option>
//                     <option>author</option>
//                     <option>language</option>
//                     <option>rating</option>


//                 </select>
//                 <input type="text" placeholder="please enter" id="search"
//                     onChange={(ev) => {

//                         let search_val = ev.target.value;

//                         // setFilter(search_val.length === 0 ? library_database : library_database.filter((value)=> value.book_name.toLowerCase().includes(search_val.toLowerCase())));

//                         setFilter(search_val.length === 0 ? library_database : library_database.filter((value) => {

//                             if (search === 'book name') {

//                                 return value.book_name.toLowerCase().includes(search_val.toLowerCase());
//                             }

//                            else if (search === 'author') {

//                                 return value.about.author_name.filter((val) => val.toLowerCase().includes(search_val.toLowerCase())).length > 0;
//                             }

//                             else if (search === 'genre') {

//                                 return value.about.genre.filter((val) => val.toLowerCase().includes(search_val.toLowerCase())).length > 0;
//                             }
//                            else if (search === 'language') {

//                                 return value.about.language.filter((val) => val.toLowerCase().includes(search_val.toLowerCase())).length > 0;
//                             }
//                             else if (search === 'rating') {

//                                 return value.about.ratings.amazon.includes(Number(search_val));


//                             }

//                             else if (search === 'search by '){
//                                 const book_search = value.book_name.toLowerCase().includes(search_val.toLowerCase());

//                                 const author_search = value.about.author_name.filter((val) => val.toLowerCase().includes(search_val.toLowerCase())).length > 0;

//                                 const genre_search = value.about.genre.filter((val) => val.toLowerCase().includes(search_val.toLowerCase())).length > 0;

//                                 const language_search = value.about.language.filter((val) => val.toLowerCase().includes(search_val.toLowerCase())).length > 0;

//                                 const rating_search = value.about.ratings.Number(amazon).includes(parseFloat(search_val));


//                                 return book_search || author_search || genre_search || language_search || rating_search;

//                             }



//                         }));





//                     }} />

//             </div>

//             <div className="cards">
//                  {


//                     filter.map((value) => {
//                         return (
//                             <Card cover_image={value.image}
//                                 name={value.book_name}
//                                 genre_of_book={value.about.genre}
//                                 author={value.about.author_name}
//                                 book_language={value.about.language}
//                                 book_rating={value.about.ratings.amazon} />

//                         );
//                     })
//                 }




//             </div>
//         </div>
//     )

// }

import React, { useState } from "react";
import { library_database } from '../database/data.js';
import { Card } from "../component/card/index.jsx";


export default function Data() {

    const book_filter = library_database;
    // let book_filter = library_database;

    // const [search_item, setSearch_item] = useState(book_filter);
    // const [search_option, setSearch_option] = useState('search by');
    // const [sortBook, setSortBook] = useState('Filter');


    // if (search_item && search_option != 'search by') {

    //     if (search_item.length === 0) {
    //         return search_item;
    //     }

    //     else {
    //         book_filter = book_filter.filter((value) => {

    //             const search_val = search_item;

    //             if (search_option === 'book name') {

    //                 return value.book_name.toLowerCase().includes(search_val.toLowerCase());
    //             }

    //             else if (search_option === 'author') {

    //                 return value.about.author_name.filter((val) => val.toLowerCase().includes(search_val.toLowerCase())).length > 0;
    //             }

    //             else if (search_option === 'genre') {

    //                 return value.about.genre.filter((val) => val.toLowerCase().includes(search_val.toLowerCase())).length > 0;
    //             }
    //             else if (search_option === 'language') {

    //                 return value.about.language.filter((val) => val.toLowerCase().includes(search_val.toLowerCase())).length > 0;
    //             }
    //             else if (search_option === 'rating') {

    //                 return value.about.ratings.amazon.includes(Number(search_val));


    //             }

    //             else {

    //                 const book_search = value.book_name.toLowerCase().includes(search_val.toLowerCase());

    //                 const author_search = value.about.author_name.filter((val) => val.toLowerCase().includes(search_val.toLowerCase())).length > 0;

    //                 const genre_search = value.about.genre.filter((val) => val.toLowerCase().includes(search_val.toLowerCase())).length > 0;

    //                 const language_search = value.about.language.filter((val) => val.toLowerCase().includes(search_val.toLowerCase())).length > 0;

    //                 const rating_search = value.about.ratings.Number(amazon).includes(parseFloat(search_val));


    //                 return book_search || author_search || genre_search || language_search || rating_search;

    //             }




    //         });
    //     }
    // }

    // else if (sortBook === 'sort ascending') {

    //     book_filter = [...book_filter].sort((a, b) => {

    //         return a.book_name > b.book_name ? 1 : -1;
    //     })
    // }

    // else if (sortBook === 'sort descending') {

    //     book_filter = [...book_filter].sort((a, b) => {

    //         return a.book_name < b.book_name ? 1 : -1;
    //     })
    // }


    // else {
    //     book_filter = library_database;
    // }


    return (
        <div className="section-header">
            {/* <h1>Library database</h1>


            <div className="search-section">
                <label>Search</label>

                <select

                    onChange={(ev) => {

                        let sort_val = ev.target.value;

                        return setSortBook(sort_val);

                    }
                    }>


                    <option>Filter</option>
                    <option>sort ascending</option>
                    <option>sort descending</option>
                </select> */}


            {/* <select
                    onChange={(ev) => {
                        let selected_filter = ev.target.value;
                        return setSearch_option(selected_filter);



                    }}>


                    <option >search by</option>
                    <option>book name</option>
                    <option>genre</option>
                    <option>author</option>
                    <option>language</option>
                    <option>rating</option>


                </select>
                <input type="text" placeholder="please enter" id="search"
                    onChange={(ev) => {

                        let search_value = ev.target.value;

                        return setSearch_item(search_value);

                        // setSearch_item(search_val.length === 0 ? library_database : library_database.filter((value)=> value.book_name.toLowerCase().includes(search_val.toLowerCase())));

                    }} /> */}

            {/* </div> */}

            <div className="container">
                <div className="cards ">
                    {
                        book_filter.map((value) => {
                            return (
                                <Card cover_image={value.image}
                                    name={value.book_name}
                                    genre_of_book={value.about.genre}
                                    author={value.about.author_name}
                                    book_language={value.about.language}
                                    book_rating={value.about.ratings.amazon}
                                    id={value.book_id}
                                    price={value?.book_for_sell?.price} />

                            );
                        })
                    }


                </div>

            </div>
        </div>
    )

}


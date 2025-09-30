import React, { useEffect, useState } from "react";
import "./userdetails.css";
import { useNavigate, useParams } from "react-router";

export default function Userdetails() {
    
    
    const [userInput, setUserInput] = useState({})
    
    const navigate = useNavigate();
    
    
    //----storing user's entered data in array 
    
    const [user_data, setUser_data] = useState(() => {
        
        const updated_data = localStorage.getItem('user_data');
        
        return updated_data ? JSON.parse(updated_data) : [];
        
    });
    
    useEffect(() => {

       
        localStorage.setItem('user_data', JSON.stringify(user_data));
        
    }, [user_data]);
    

    // if(validator()){

    const handle_user_stored_data = (ev) => {

        setUser_data([...user_data, userInput]);
        
    }
// }
    
    //-------end--------
    
    
    //----storing perticuler user's input detail in an object------


    const handle_user_input = (ev) => {

        const { value, name, checked, type } = ev.target;
         let user_id=(user_data.length)+1
        
        // setShow_error({...show_error,[name]:''})


        //users details if it is type is checkbox

        if (type === 'checkbox') {

            let selected_genre = userInput?.genre?.length > 0 ? [...userInput.genre] : [];
            let genre;
            selected_genre.push(value);

            if (checked) {
                setUserInput(
                    {
                        ...userInput,
                        genre: selected_genre
                    }
                )
            }
            else {

                setUserInput(
                    {
                        ...userInput,
                        genre: selected_genre.filter((val) => val != value)
                    }
                )
            }

        }

        //users details if it is type normal

        else {
            setUserInput(

                {
                    ...userInput,
                    [name]: value,
                    id : user_id
                }

            )
        }
        console.log(userInput);

    }


// -----end----
 return (
        <div className="userdetails-body">
            <div className="form-container">


                <div className="form-header">
                    <h1>My Bookstore Account</h1>
                    <p>Update your profile and preferences.</p>
                </div>


                <form id="userDetailForm">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input

                            // value={user.firstName || ''}
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            placeholder=''

                            onChange={(ev) => handle_user_input(ev)}

                        />
                        {/* <span>{show_error.name}</span> */}
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            placeholder=" "

                            onChange={(ev) => handle_user_input(ev)}
                        />
                        {/* <span>{show_error.name}</span> */}
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            placeholder=" "

                            onChange={(ev) => handle_user_input(ev)}
                        />
                        {/* <span>{show_error.password}</span> */}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="@gmail.com "

                            onChange={(ev) => handle_user_input(ev)}
                        />
                        {/* <span>{show_error.email}</span> */}
                    </div>

                    <div className="form-group">
                        <label htmlFor="shippingAddress">Shipping Address</label>
                        <textarea

                            id="shippingAddress"
                            name="shippingAddress"
                            required placeholder=" "

                            onChange={(ev) => handle_user_input(ev)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <select

                            id="country"
                            name="country"

                            onClick={(ev) => handle_user_input(ev)}

                        >
                            <option>Select Country</option>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>India</option>
                            <option>United Kingdom</option>
                            <option>Australia</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input

                            type="text"
                            id="city"
                            name="city"
                            placeholder=" "

                            onChange={(ev) => handle_user_input(ev)}

                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <div className="gender-options">
                            <div className="option-item">
                                <input

                                    id="male"
                                    name="gender"
                                    type="radio"
                                    value="male"

                                    onChange={(ev) => handle_user_input(ev)}

                                />
                                <label htmlFor="male">Male</label>
                            </div>
                            <div className="option-item">
                                <input
                                    id="female"
                                    name="gender"
                                    type="radio"
                                    value="female"
                                    onChange={(ev) => handle_user_input(ev)}
                                />
                                <label htmlFor="female">Female</label>
                            </div>
                            <div className="option-item">
                                <input
                                    id="other"
                                    name="gender"
                                    type="radio"
                                    value="other"
                                    onChange={(ev) => handle_user_input(ev)}
                                />
                                <label htmlFor="other">Other</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="language">Preferred Language</label>
                        <select

                            id="language"
                            name="language"
                            value={userInput.language}

                            // onChange={(ev)=> console.log(ev)

                            onChange={(ev) => handle_user_input(ev)}

                        >
                            <option>Select Language</option>
                            <option>English</option>
                            <option>Spanish</option>
                            <option>Hindi</option>
                            <option>French</option>
                            <option>German</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="genre">Favorite Genres</label>
                        <div className="options-grid">
                            <div className="option-item">
                                <input
                                    type="checkbox"
                                    id="fantasy"
                                    name="genre"
                                    value="fantasy"
                                    onChange={(ev) => handle_user_input(ev)}
                                />
                                <label htmlFor="fantasy">Fantasy</label>
                            </div>
                            <div className="option-item">
                                <input
                                    type="checkbox"
                                    id="sci-fi"
                                    name="genre"
                                    value="sci-fi"
                                    onChange={(ev) => handle_user_input(ev)}
                                />
                                <label htmlFor="sci-fi">Sci-Fi</label>
                            </div>
                            <div className="option-item">
                                <input
                                    type="checkbox"
                                    id="mystery"
                                    name="genre"
                                    value="mystery"
                                    onChange={(ev) => handle_user_input(ev)}
                                />
                                <label htmlFor="mystery">Mystery</label>
                            </div>
                            <div className="option-item">
                                <input
                                    type="checkbox"
                                    id="romance"
                                    name="genre"
                                    value="romance"
                                    onChange={(ev) => handle_user_input(ev)}
                                />
                                <label htmlFor="romance">Romance</label>
                            </div>
                            <div className="option-item">
                                <input

                                    type="checkbox"
                                    id="biography"
                                    name="genre"
                                    value="biography"
                                    onChange={(ev) => handle_user_input(ev)}
                                />
                                <label htmlFor="biography">Biography</label>
                            </div>
                            <div className="option-item">
                                <input
                                    type="checkbox"
                                    id="history"
                                    name="genre"
                                    value="history"
                                    onChange={(ev) => handle_user_input(ev)}
                                />
                                <label htmlFor="history">History</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group" style={{ marginTop: '2.5rem' }}>
                        <button

                            type="submit"
                            className="submit-btn"

                            onClick={(ev) => handle_user_stored_data()}

                            onDoubleClick={(ev) => navigate('/home')}
                        >Save Changes</button>
                    </div>
                </form>
            </div>
        </div>

    )
}
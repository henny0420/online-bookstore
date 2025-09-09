import React, { useState } from "react";
import './signup.css';
import { Link, useNavigate } from "react-router";

export default function Signup() {

    const navigate = useNavigate()

    const [user_info,setUser_info]=useState({})

    const handle_change = (ev) => {

        const{value,name}=ev.target

        console.log(user_info)

        setUser_info( 
        
            {
                ...user_info,
                [name]:value
            }
        )

    }

    const form_submit = (ev) => {

        localStorage.setItem('user_info',JSON.stringify(user_info))
         navigate('/home')

    }

    return (
        <div className="sign-up-body">
<div className="signup-container">
        <h1>Get started</h1>
        <p>Join our online bookstore and discover great books.</p>
        <form>
            <div className="inputGroup" style={{width: '100%', marginBottom: '1.5rem'}}>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    autoComplete="off" 
                    placeholder=" " 

                    onChange={(ev) => {handle_change(ev)}}
                />
                <label htmlFor="name">Full Name</label>
            </div>
            <div className="inputGroup" style={{width: '100%', marginBottom: '1.5rem'}}>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    autoComplete="email" 
                    placeholder=" " 

                    onChange={(ev) => {handle_change(ev)}}
                />
                <label htmlFor="email">Email Address</label>
            </div>
            <div className="inputGroup" style={{width: '100%', marginBottom: '1.5rem'}}>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    required 
                    autoComplete="new-password" 
                    placeholder=" " 

                    onChange={(ev) => {handle_change(ev)}}
                />
                <label htmlFor="password">Password</label>
            </div>
            <div className="inputGroup" style={{width: '100%', marginBottom: '1.5rem'}}>
                <input 
                    type="password" 
                    id="confirm_password" 
                    name="confirm_password" 
                    required 
                    autoComplete="new-password" 
                    placeholder=" " 

                    onChange={(ev) => {handle_change(ev)}}
                />
                <label htmlFor="confirm_password">Confirm Password</label>
            </div>
           <button type="submit" className="signup-button" onClick={ (ev)=> form_submit(ev)

           }  >Sign Up</button>
        </form>
        <div className="create-account">

            <Link to="/login"> Already have an account? Log In</Link>
        </div>
    </div>
        </div>
    )
}

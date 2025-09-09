import React, { useState } from "react";
import './login.css';
import { Link } from "react-router";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
    const navigate = useNavigate()
    const [user_login,setUser_login] = useState({})

    const handle_user_input = (ev) => {

        const {value,name} = ev.target

        console.log(user_login);
        
        setUser_login({

            ...user_login,
            [name] : value

        })

    }

    const handle_login = () => {

        const users_data = JSON.parse(localStorage.getItem('user_data'))

     if(users_data.find(el => (el.email === user_login.email) && (el.password === user_login.password))){
            navigate('/home')
        
        }
        else{
           toast.error('invalid password')
        }

    }

    return (    
        
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="login-page-body">
                <div className="login-container">
                    <h1>Welcome Back!!</h1>
                    <p>Log in to your online bookstore account.</p>
                    <form >
                        <div className="inputGroup">
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                                autoComplete="email" 
                                placeholder=" " 

                                onChange={handle_user_input}
                            />
                            <label htmlFor="email">Email Address</label>
                        </div>
                        <div className="inputGroup">
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                required 
                                autoComplete="current-password" 
                                placeholder=" " 

                                onChange={handle_user_input}

                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="forgot-password">
                           <Link to="/forgetpassword"> Forgot Password?</Link>
                        </div>
                        
                                <button type="button" className="login-button"
                                onClick={ handle_login} >
                                    <span style={{ textDecoration: 'none' }}>Log In</span>
                                </button>
                            
                    </form>
                    <div className="create-account">
                      <Link to="/"> Don't have an account? Create an Account</Link>
                    </div>
                </div>
            </div>

        </>
    )
}
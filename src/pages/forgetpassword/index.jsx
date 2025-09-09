import React from "react";
import "./forgetpassword.css";  
import { Link } from "react-router";

export default function ForgetPassword() {
    return (
        <div className="forget-password-body">
             <div className="forgot-password-container">
        <h1>Forgot Your Password?</h1>
        <p>Enter your email address below to receive a password reset link.</p>
        <form >
            <div className="inputGroup">
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    autoComplete="email" 
                    placeholder=" " 
                />
                <label htmlFor="email">Email Address</label>
            </div>
            <button type="submit" className="forgot-password-button">Send Reset Link</button>
        </form>
        <div className="create-account">
                <Link to="/login"> Remember your password? Back to Login </Link>
        </div>
    </div>
        </div>
    )
}
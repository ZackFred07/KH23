import React from 'react'
import "./register.css"
import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

const SignUpForm =()=>{
    return(
        <div className="container">
        <div className="register_header">
            <div className="register_text">Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="register_inputs">
            <div className="register_input">
                <img src={user_icon} alt="" />
                <input type="register_username" placeholder='username' />
            </div>
            <div className="register_input">
                <img src={password_icon} alt="" />
                <input type="register_password" placeholder='password' />
            </div>
            <div className="register_input">
                <img src={email_icon} alt="" />
                <input type="register_email" placeholder='JonDoe123@gmail.com'/>
            </div>

            <div className="register_submit">Create Account</div>
        </div>
        </div>  
    )
}

export default SignUpForm   
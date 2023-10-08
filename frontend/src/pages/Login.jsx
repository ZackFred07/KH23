import React, {useState} from "react";
import "./login.css";
import { supabase } from "../auth/supabase";

const LoginForm = () => {


    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    const loginGit=async()=>{
        await supabase.auth.signInWithOAuth({
            provider:'github',
            options:{
                redirectTo:'http://localhost:5173/home/'
            }
        });
       }
    
       const loginDiscord=async()=>{
        await supabase.auth.signInWithOAuth({
            provider:'discord',
            options:{
                redirectTo:'http://localhost:5173/home/'
            }
        });
       }


    return (
        <div>
        <div className="cover">
            <h1>Welcome</h1>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />

            <div className="login-btn" onClick={popup}>Login</div>

            <a href='register' className="text">Create Account Here</a>

            <div className="alt-login">
                <div className="github" onClick={loginGit}></div>
                <div className="discord" onClick={loginDiscord}></div>
            </div>

            <div className={popupStyle}>
                <h3>Login Success</h3>
                <p>Website Rendering</p>
            </div>

        </div>

        </div>
    )
}

export default LoginForm

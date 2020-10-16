import React from 'react'
import './Login.css'
import {auth,provider} from '../firebase'

function Login({onsignin}) {
    const signin=()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            console.log(result.user);
            onsignin(result.user);
        })
        .catch(error=>alert(error.message));
    }
    return (
        <div className="loginclass">
            <h1>Hey! Glad you thought of using our habit tracker</h1>
            <h2>Before taking you ahead, please sign in</h2>
            <button onClick={signin}>Sign in with google</button>            
        </div>
    )
}

export default Login

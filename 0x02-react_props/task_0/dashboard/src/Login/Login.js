import React from "react";
import './Login.css';

function Login() {
    return(
        <>
            <main className='App-body'>
                <p>Login to access the full dashboard</p>
                <div className='form'>
                <label htmlFor='email' onClick={() => {
                    document.getElementById('email').focus();
                }}>Emai </label>
                <input type='email' id='email'/>
                <label htmlFor='pass' onClick={() => {
                                document.getElementById('pass').focus();
                            }}>Password </label>
                <input type='password' id='pass'/>
                <button type="submit">OK</button>
                </div>
            </main>
        </>
    );
}

export default Login;
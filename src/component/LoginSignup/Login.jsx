import React, { useState } from "react";
import './Style.css'
import  Axios  from "axios";
import { Link, useNavigate } from "react-router-dom";


export const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function isValidEmail(email) {
        // Define a regular expression pattern for email validation.
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
      }

    async function submit(e) {

        e.preventDefault();

        if(isValidEmail(email)) {
            try {

                const rest=await Axios.post("http://localhost:4000/", {
                    email, password
                })
                    .then(res => {
                        if (res.data ==="exist") {
                            navigate("/")
                        }
                        else if (res.data === "notexist") {
                            alert("User have not sign up")
                        }
                    })
                    .catch(e => {
                        alert("wrong details")
                        console.log(e);
                    })
    
            }
            catch (e) {
                console.log(e);
    
            }

        }else{
            alert("Please enter  valid email address!");
        }
    }



    return (
        <>
            <section className="containt">
                <div className="containln">
                    <div className="auth-form-login">
                        <h2>Login</h2>
                        <form className="login-form" action="POST">

                            <label htmlFor="email">email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email or phone" id="email" name="email" />
                            <label htmlFor="password">password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                            <button className='btnLS' type="submit" onClick={submit}>Log In</button>
                            <Link className="account-exist-or-not" to='/Signup'>Signup!! if you have'nt  an account?</Link>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
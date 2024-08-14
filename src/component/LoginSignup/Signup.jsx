import React, {useState} from "react";
import './Style.css'
import Axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export const Signup = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    function isValidEmail(email) {
        // Define a regular expression pattern for email validation.
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
      }
      function isValidateName(name) {
        const pattern = /^[a-zA-Z ]{2,30}$/;
        return pattern.test(name);
    }


    async function submit(e) {

        e.preventDefault();

        if(isValidateName(name) === true ){
            if (isValidEmail(email)) {
                try {
    
                    const res = await Axios.post("http://localhost:4000/Signup", {
                        name, email, password
                    })
                        .then(res => {
        
                            if (res.data === "exist") {
                                alert("User already exists")
                            }
                            else if (res.data === "notexist") {
                                navigate("/" )
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
        
             
            } else {
                alert("Please enter correct email")
    
            }

        }else{
            alert("Please enter correct name")
        }
     }

    return (
        <>
        <section className="containt">
            <div className="containsn">
                <div className="auth-form-signup">
                    <h2>Signup</h2>
                    <form className="signup-form" action="POST">
                        <label htmlFor="name">name</label>
                        <input type="text" placeholder="name"
                            value={name} onChange={(e) => setName(e.target.value)}  id="name" name="name" required  pattern="[A-Za-z]" />
                        <label htmlFor="email">email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)}   type="email" placeholder="email or phone" id="email" name="email"  required />
                        <label htmlFor="password">password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" required />
                        <button className='btnLS' type="submit" onClick={submit} >Signup</button>
                        <Link className="account-exist-or-not" to='/Login'>Login!! if you have  an account?</Link>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

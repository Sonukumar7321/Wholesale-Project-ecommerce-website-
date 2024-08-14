import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { TbSquareLetterS } from 'react-icons/tb';


const Navbar = () => {
    // code to toggle/show navBar
    const [active, setActive] = useState('navBar')
    const showNav = () => {
        setActive('navBar activeNavbar')
    }
    // code to remove Navbar
    const removeNav = () => {
        setActive('navBar')
    }
    return (
    
            <div>
                <section className='navBarSection'>
                    <div className='header'>

                        <div className='logoDiv'>
                            <Link to='/' className="logo">
                                <h1 className='flex'><TbSquareLetterS className="icon" />
                                    WholeSale
                                </h1>
                            </Link>
                        </div>
                        <div className={active}>
                            <ul className='navLists flex'>
                                <li className='navItem'>
                                    <Link className='navLink' to="/" onClick={removeNav}>Home</Link>
                                </li>
                                <li className='navItem'>
                                    <Link className='navLink' to="/Product" onClick={removeNav}>Products</Link>                            </li>

                                <li className='navItem'>
                                    <Link to='/Orders' className='navLink' onClick={removeNav}>Orders</Link>
                                </li>
                                <li className='navItem'>
                                    <Link to='/About' className='navLink' onClick={removeNav}>About us</Link>
                                </li>
                                <div className='headerBtns flex'>
                                    <button className='btn loginBtn'>
                                        <Link to='/Login' onClick={removeNav}>Log in</Link>
                                    </button>

                                    <button className='btn'>
                                        <Link to='/Signup' onClick={removeNav}>Sign Up</Link>
                                    </button>
                                </div>
                            </ul>
                            <div onClick={removeNav} className='closeNavbar'>
                                <IoIosCloseCircle className='icon' />
                            </div>
                        </div>
                        <div onClick={showNav} className='toggleNavbar'>
                            <TbGridDots className='icon' />

                        </div>
                    </div>
                </section>
            </div>
    )
}

export default Navbar

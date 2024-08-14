import React from 'react'
import './Footer.css'
import { BsTwitter } from 'react-icons/bs';
import { ImFacebook } from 'react-icons/im'
import { AiFillInstagram } from 'react-icons/ai'
import { TbSquareLetterS } from 'react-icons/tb';
import { MdCopyright } from "react-icons/md";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='secContainer container grid'>
                <div className="logoDiv">
                    <div className='footerLogo'>
                        <a href='/' className='logo flex'>
                            <h2 className='flex'>
                                <TbSquareLetterS className='icon' />WholeSale
                            </h2>
                        </a>
                    </div>
                    <div className='social flex'>
                        <a href='https://www.facebook.com/profile.php?id=100058407736604'>
                            <ImFacebook className="icon" />
                        </a>
                        <a href='/'>
                            <BsTwitter className="icon" />
                        </a>
                        <a href='https://www.instagram.com/tsonu_kr_rawat/'>
                            <AiFillInstagram className="icon" />
                        </a>
                    </div>
                </div>
                <div className="footerLinks">
                    <span className="linkTitle">
                        Navigation
                    </span>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/Products'>Products</Link>
                    </li>
                    <li>
                        <Link to='/Orders'>Orders</Link>
                    </li>
                    <li>
                        <Link to='/About'>About us</Link>
                    </li>
                </div>
                <div className="footerLinks">
                    <span className="linkTitle">
                        Helpful Links
                    </span>
                    <li>
                        <a href='/'>Support</a>
                    </li>
                    <li>
                        <a href='/'><MdCopyright />2024 All rights reserved</a>
                    </li>
                    <li>
                        <a href='/'>Buy with Condition</a>
                    </li>
                    <li>
                        <a href='/'>Privacy and rules</a>
                    </li>
                </div>
                <div className="footerLinks">
                    <span className="linkTitle">
                        Contact Us
                    </span>
                    <span className='pone'>+917321033883</span>
                    <span className="email">sonukumarkas@gmail.com</span>
                </div>
            </div>
        </div>
    )
}

export default Footer

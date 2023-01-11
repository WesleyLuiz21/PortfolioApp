import React from "react";
import './navbar.css';
import emailIcon from './icons/icon-men.png'
import { NavLink } from 'react-router-dom';
import pin from './icons/pin.png'




/*function navClose() {
    SideNav.style.display = 'none';
} */

function Navbar() {
    const name = 'Wesley Souza';
    const email = 'wesley_luiz2001@hotmail.com';

    return (
        <header className="flex">
            <nav className="flex">
            <NavLink to="/PortfolioApp" id="myname">{name}</NavLink>
            <ul className="flex" id="right-nav">
                <li>
                    <img src={emailIcon} class='icons' alt='icon-email' width='39' height='39'></img>
                    <a className="email" href="mailto: wesley_luiz2001@hotmail.com">{email}</a>
                </li>
                <li id="bar"></li>
                <li>
                <img src={pin} className='icons' alt='icon-email' width='39' height='39'></img>
                <p>London - UK</p>
                </li>
            </ul>
            </nav>
        </header>

    )
};
export default Navbar;
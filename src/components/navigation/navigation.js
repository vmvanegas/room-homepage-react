import React, { useEffect } from 'react';
/* IMAGES */
import logo from '../../assets/logo.svg'
import './style.css';

const Navigation = () => {

    useEffect(() => {
        const menuWrapper = document.querySelector(".mobile-menu-wrapper")
        menuWrapper.addEventListener("click", (e) => {
            if (e.target.matches('.mobile-menu-wrapper')) {
                toggleMenuMobile()
            }
        })
    }, []);


    const toggleMenuMobile = () => {
        const mobileMenu = document.querySelector(".mobile-menu-wrapper")
        mobileMenu.classList.toggle("show")
    }

    return (
        <nav className="navigation">
            <div className="menu-icon">
                <img alt="" onClick={() => { toggleMenuMobile() }} />
            </div>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="menu">
                <ul>
                    <li><a href="/">home</a></li>
                    <li><a href="/">shop</a></li>
                    <li><a href="/">about</a></li>
                    <li><a href="/">contact</a></li>
                </ul>
            </div>
            <div className="mobile-menu-wrapper">
                <div className="mobile-menu">
                    <img alt="" onClick={() => { toggleMenuMobile() }} />
                    <ul>
                        <li><a href="/">home</a></li>
                        <li><a href="/">shop</a></li>
                        <li><a href="/">about</a></li>
                        <li><a href="/">contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
// import React from "react"

import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header__logo">
                    Food Villa
                </div>
                <div className="header__navbar">
                    <ul className="header__menu">
                        <li className="header__menu__item"><Link to="/">Home</Link> </li>
                        <li className="header__menu__item"><Link to="/about">About</Link> </li>
                        <li className="header__menu__item"><Link to="/contact">Contact</Link> </li>
                        <li className="header__menu__item"><Link to="/register">Register</Link> </li>
                        <li className="header__menu__item"><Link to="/login">Login</Link> </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
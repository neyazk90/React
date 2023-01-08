// import React from "react"

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header__logo">
                    Food Villa
                </div>
                <div className="header__search">
                    <input type="text" className="btn btn--search" placeholder="Search Here" />
                </div>
                <div className="header__navbar">
                    <ul className="header__menu">
                        <li className="header__menu__item"><a href="/">Home</a> </li>
                        <li className="header__menu__item"><a href="/">About</a> </li>
                        <li className="header__menu__item"><a href="/">Contact</a> </li>
                        <li className="header__menu__item"><a href="/">Dashboard</a> </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
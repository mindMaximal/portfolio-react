import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import mockup from "../img/macbook.png";

export const Navbar = () => {
    let location = useLocation();
    return (
        <nav className={'navbar app__navbar'}>
            <div className="navbar__wrapper flex flex--space-between container">

                <NavLink
                    className="logo__link"
                    exact
                    to={'/'}
                >
                    <div className="logo navbar__logo flex flex--center">
                        <span className="logo__span">Волков Евгений.</span>
                    </div>
                </NavLink>


                <ul className="navbar__list list flex flex--end">
                    {location.pathname !== "/" &&
                    <NavLink
                        className="navbar__elem navbar__link"
                        exact
                        to={'/'}
                    >
                        Главная
                    </NavLink>
                    }

                    <NavLink
                        className="navbar__elem navbar__link"
                        to={'/projects'}
                    >
                        Проекты
                    </NavLink>

                    {location.pathname === "/" &&
                        <div className="navbar__mockup mockup">

                            <div className="mockup__wrapper">
                                <div className="mockup__img">
                                    <img src={mockup} alt="Mockup"/>
                                </div>
                            </div>

                        </div>
                    }

                    <NavLink
                        className="navbar__elem navbar__link"
                        to={'/contacts'}
                    >
                        Контакты
                    </NavLink>

                </ul>
            </div>
        </nav>
    )
}
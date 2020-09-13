import React from "react";
import {NavLink} from "react-router-dom";

export const Home = () => {

    return (
        <div className="home">
            <div className="home__wrapper container">

                <div className="home__info">

                    <div className="home__person">
                        <div className="home__position flex flex--center">
                            <span>Web-разработчик</span>
                            <div className="line home__line"></div>
                        </div>
                        <h2 className="home__title">Создание сайтов</h2>
                    </div>

                    <div className="home__text">
                        <p>
                            Разработка сайтов с нуля до результата, соблюдая все современные требования для веб-страниц.
                        </p>
                    </div>

                    <div className="home__links">
                        <NavLink
                            className="home__link  home__link--projects font--bold"
                            to={'/projects'}
                        >
                            Посмотреть проекты
                            <span className="home__link--bg home__link--hover"></span>
                        </NavLink>
                    </div>

                </div>

            </div>
        </div>
    )
}
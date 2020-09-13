import React from "react";
import {Route, Switch} from "react-router-dom";

import {Navbar} from "./Navbar";
import {Home} from "../pages/home";
import {Projects} from "../pages/projects";
import {Contacts} from "../pages/contacts";

export const Main = () => {

    return (
        <div className="app">
            <Navbar/>
            <Switch>
                <Route path={'/'} exact component={Home}/>
                <Route path={'/projects'} component={Projects}/>
                <Route path={'/contacts'} component={Contacts}/>
            </Switch>
        </div>
    )

}
import "../../App.css";

import React from "react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import App from "../../App";

export default function Router() {
    return (
        <div>
            <header>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/chats">Chats</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </header>
            <Switch>
                <Route path="/" exact>
                    <p>Home page</p>
                </Route>
                {/* <Route path="/chats" render={ params => {
                    console.log( { params } );
                    return <p>Chats page</p>
                }} /> */}
                {/* <Route path="/chats/:chatId" component={ App } render={ ({ match }) => {
                    return <p>Certain chat page, { match.params?.chatId }</p>
                }} /> */}
                <Route path="/chats" component={ App } />
                <Route path="/chats/:chatId" component={ App } />
                <Route path="/profile">
                    <p>Profile</p>
                </Route>
                <Route>
                    <h1>404: page not found!</h1>
                </Route>
            </Switch>
        </div>
    );
}
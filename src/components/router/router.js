import "../../App.css";

import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { Link } from "react-router-dom";
import App from "../../App";
import Profile from "../../components/profile/index";
import Chat from "../../components/chat/chat";
import Spacenews from "../spaceNews/spacenews";
import Login from "../login/login";
import { useSelector, useDispatch } from 'react-redux';
import firebase from "firebase";
import { changeIsAuth } from '../../store/actions/profile';

const PrivateRoute = ( props ) => {
    const isAuthed = useSelector((state) => state.profile.isAuth);

    return isAuthed ? <Route { ...props } /> : <Redirect to="/login" />
}

// news page error:
// Warning: Maximum update depth exceeded. 
// This can happen when a component calls setState inside useEffect, 
// but useEffect either doesn't have a dependency array, 
// or one of the dependencies changes on every render.
// DONE by adding dispatch to the dependencies!

// messages page error:
// encountered two times a non unique key 'NaN'???
// DONE by adding a Date.now suffix to message ID

export default function Router() {

    const dispatch = useDispatch();

    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            dispatch( changeIsAuth( Boolean( user ) ) );
        })
    })

    const handleSignOut = (ev) => {
        ev.preventDefault();

        firebase.auth().signOut();
    }

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
                    <li>
                        <Link to="/spacenews">Space News!</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <a href="/login" onClick={ handleSignOut }>LogOUT</a>
                    </li>
                </ul>
            </header>
            <Switch>
                <Route path="/" exact>
                    <p>Home page</p>
                </Route>
                <PrivateRoute path="/chats" component={ App } />
                <PrivateRoute path="/chats/:chatId" component={ Chat } />
                <PrivateRoute path="/profile" component={ Profile } />
                <Route path="/spacenews" component={ Spacenews } />

                <Route path="/login" component={ Login } />

                <Route>
                    <h1>404: page not found!</h1>
                </Route>
            </Switch>
        </div>
    );
}
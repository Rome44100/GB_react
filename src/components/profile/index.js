import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeIsOnline } from "../../store/actions/profile";

import firebase from 'firebase';
import { changeIsAuth } from "../../store/actions/profile";

export default function Profile() {

    const dispatch = useDispatch();

    React.useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log("onAuthStateChange", { user });
            
            dispatch( changeIsAuth( Boolean( user ) ) );
        })
    })

    const { age, name, isOnline } = useSelector( state => state.profile )

    const handleIsOnline = (e) => {
        dispatch(changeIsOnline(e.target.checked))
    }

    // store.subscribe(() => console.info(store.getState()))

    return <div>
            <h3>Profile</h3>
            <p>
                <b>Name:</b> { name }
            </p>
            <p>
                <b>Age:</b> { age }
            </p>
            <input 
                type="checkbox"
                checked={ isOnline }
                onChange={ handleIsOnline }
                />
            <span>Set Online</span>
        </div>
}
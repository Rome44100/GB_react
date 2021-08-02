import React, { useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";

import { store } from "../../store/index"
import { changeIsOnline, changeName } from "../../store/actions/profile";

export default function Profile() {
    // const { showName, name } = store.getState().profile;
    // const dispatch = store.dispatch;

    const dispatch = useDispatch();
    const { age, name, isOnline } = useSelector( state => state.profile )

    const handleIsOnline = (e) => {
        dispatch(changeIsOnline(e.target.checked))
    }    

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
                // value={ isOnline }
                onChange={ handleIsOnline }
                />
            <span>Set Online</span>
        </div>
}
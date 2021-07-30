import React, { useCallback } from "react";

import { store } from "../../store/index"
import { changeName } from "../../store/actions/profile";

export default function Profile() {
    // const [ dummy, setDummy ] = React.useState();
    const { showName, name } = store.getState().profile;
    const dispatch = store.dispatch;

    const setShowName = useCallback(() => {
        dispatch(changeName);
        // setDummy({});
    }, [dispatch]);
    

    return <div>
            <h3>Profile</h3>
            <input 
                type="checkbox"
                checked={ showName }
                value={ showName }
                onChange={ setShowName }
                />
            <span>Show Name</span>
            { showName && <div>{name}</div> }
        </div>
}
import AUTHORS from "../../constants";

import firebase from "firebase";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message
    }
})

export const sendMessageToBot = (chatId, message) => {
    return () => {
        firebase.database().ref("messages").child(chatId).push(message);

        // dispatch(addMessage(chatId, message));
        let timer = setTimeout(() => {
            // dispatch(
            //     addMessage(chatId, {
            //         id: `msg${Date.now()}`,
            //         author: AUTHORS.BOT,
            //         text: "You should leave this chat!",
            //     })
            // )

            firebase.database().ref("messages").child(chatId).push({
                id: `msg${Date.now()}`,
                author: AUTHORS.BOT,
                text: "You should leave this chat!",
            })

            clearTimeout(timer);
        }, 1500);
    }
}

export const subscribeOnMsgsChanged = (chatId) => {
    return (dispatch, getState) => {
        firebase.database().ref("messages").child(chatId).on("child_added", (snapshot) => {
            console.log("child_added", snapshot.val());
            dispatch(addMessage(chatId, snapshot.val()));
        })
    
        firebase.database().ref("messages").child(chatId).on("child_changed", (snapshot) => {
            console.log("child_changed", snapshot.val());
            dispatch(addMessage(chatId, snapshot.val()));
        })
    }
}
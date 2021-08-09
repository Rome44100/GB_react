import AUTHORS from "../../constants";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message
    }
})

export const sendMessageToBot = (chatId, message) => {
    return (dispatch, getState) => {
        dispatch(addMessage(chatId, message));
        let timer = setTimeout(() => {
            dispatch(
                addMessage(chatId, {
                    id: `msg${Date.now()}`,
                    author: AUTHORS.BOT,
                    text: "You should leave this chat!",
                })
            )

            clearTimeout(timer);
        }, 1500);
    }
}
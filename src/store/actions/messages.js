export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

export const addMessage = (message) => ({
    type: ADD_MESSAGE,
    payload: {
        message
    }
})
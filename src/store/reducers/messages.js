import { ADD_MESSAGE } from "../actions/messages";

const initialState = {
    name: "Niburu",
}

export default function messagesReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                name: action.payload.name
            }
        }
        default:
            return state;
    }
}
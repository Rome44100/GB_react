import { CHANGE_NAME } from "../actions/profile.js";

const initialState = {
    showName: false,
    name: "Niburu",
    age: 237
}

export default function profileReducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_NAME: {
            return {
                ...state,
                name: action.payload.name,
                showName: !state.showName
            }
        }
        default:
            return state;
    }
}
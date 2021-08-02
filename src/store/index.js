import { combineReducers, createStore } from "redux";
import chatsReducer from "./reducers/chats.js";
import profileReducer from "./reducers/profile.js";

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
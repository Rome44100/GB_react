import { combineReducers, createStore } from "redux";
import profileReducer from "./reducers/profile.js";
import chatsReducer from "./reducers/chats.js";
import messagesReducer from "./reducers/messages.js";

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
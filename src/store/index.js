import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import profileReducer from "./reducers/profile.js";
import chatsReducer from "./reducers/chats.js";
import messagesReducer from "./reducers/messages.js";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import newsReducer from "./reducers/getNews.js";

const persistConfig = {
    key: "root",
    storage
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    news: newsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
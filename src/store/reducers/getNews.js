import { SET_ERROR_STATUS, SET_IDLE_STATUS, SET_LOADING_STATUS, SET_NEWS_LIST } from "../actions/news";

export const NEWS_REQUEST_STATUS = {
    LOADING: 'loading',
    ERROR: 'error',
    IDLE: 'idle'
}

const initialState = {
    list: [],
    status: NEWS_REQUEST_STATUS.IDLE
}

export default function newsReducer (state = initialState, action) {
    switch (action.type) {
        case SET_IDLE_STATUS:
            return {
                ...state,
                status: NEWS_REQUEST_STATUS.IDLE
            }
        case SET_ERROR_STATUS:
            return {
                ...state,
                status: NEWS_REQUEST_STATUS.ERROR
            }
        case SET_LOADING_STATUS:
            return {
                ...state,
                status: NEWS_REQUEST_STATUS.LOADING
            }
        case SET_NEWS_LIST:
            return {
                ...state,
                list: action.payload.newsList
            }
        default:
            return state;
    }
}
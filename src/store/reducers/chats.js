import { ADD_CHAT, REMOVE_CHAT } from "../actions/chats";

const initialState = {
    '1001': {
        id: '1001',
        name: 'Первый чат!'
    }
}

export default function chatsReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        }
        case REMOVE_CHAT: {
            delete state[action.payload.chatId]
            return {
                ...state,
            }
        }
        default:
            return state;
    }
}
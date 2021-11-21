import { UPDATE_CHAT_MESSAGES, UPDATE_CHAT_MESSAGES_SELECT, UPDATE_CHAT_USERS, UPDATE_CHAT_USER_SELECT } from "../actions"

const initialState = {
    chatUsers: [],
    chatUserSelected: null,
    chatMessages: [],
    chatMessagesSelected: []
}

const chatReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_CHAT_USERS:
            return {
                ...state,
                chatUsers: action.payload
            }
        case UPDATE_CHAT_USER_SELECT:
            return {
                ...state,
                chatUserSelected: action.payload
            }
        case UPDATE_CHAT_MESSAGES:
            return {
                ...state,
                chatMessages: action.payload
            }
        case UPDATE_CHAT_MESSAGES_SELECT:
            return {
                ...state,
                chatMessagesSelected: action.payload
            }
        default:
            return state
    }
}

export default chatReducer
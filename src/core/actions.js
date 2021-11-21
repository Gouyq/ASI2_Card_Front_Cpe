import { UserDisplay } from '../models/UserDisplay';

export const UPDATE_ISLOGGED = 'UPDATE_ISLOGGED'
export const UPDATE_USER = 'UPDATE_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export const UPDATE_CARDS = 'UPDATE_CARDS'
export const UPDATE_CARD_DETAIL = 'UPDATE_CARD_DETAIL'
export const UPDATE_CONTEXT = 'UPDATE_CONTEXT'

export const UPDATE_CHAT_USERS = 'UPDATE_CHAT_USERS'
export const UPDATE_CHAT_USER_SELECT = 'UPDATE_CHAT_USER_SELECT'
export const UPDATE_CHAT_MESSAGES = 'UPDATE_CHAT_MESSAGES'
export const UPDATE_CHAT_MESSAGES_SELECT = 'UPDATE_CHAT_MESSAGES_SELECT'


// Users
export function setIsLogged(value) {
    return { 
        type: UPDATE_ISLOGGED, 
        payload: value 
    }
}

export function setUser(user) {
    return { 
        type: UPDATE_USER, 
        payload: user 
    }
}

export function setLogoutUser() {
    return { 
        type: LOGOUT_USER, 
        payload: {
            isLogged: false,
            user: new UserDisplay()
        }
    }
}

export function setContext(context) {
    return { 
        type: UPDATE_CONTEXT, 
        payload: context
    }
}

// Cards
export function setCards(cards) {
    return { 
        type: UPDATE_CARDS, 
        payload: cards 
    }
}

export function setCardDetail(cardDetail) {
    return { 
        type: UPDATE_CARD_DETAIL, 
        payload: cardDetail 
    }
}


// Chat
export function setChatUsers(chatUsers) {
    return {
        type: UPDATE_CHAT_USERS,
        payload: chatUsers
    }
}

export function setChatUserSelect(user) {
    return {
        type: UPDATE_CHAT_USER_SELECT,
        payload: user
    }
}

export function setChatMessages(messages) {
    return {
        type: UPDATE_CHAT_MESSAGES,
        payload: messages
    }
}

export function setChatMessagesSelect(messages) {
    return {
        type: UPDATE_CHAT_MESSAGES_SELECT,
        payload: messages
    }
}


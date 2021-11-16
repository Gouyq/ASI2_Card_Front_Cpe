export const UPDATE_ISLOGGED = 'UPDATE_ISLOGGED'
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_CARDS = 'UPDATE_CARDS'

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

export function setCards(cards) {
    return { 
        type: UPDATE_CARDS, 
        payload: cards 
    }
}
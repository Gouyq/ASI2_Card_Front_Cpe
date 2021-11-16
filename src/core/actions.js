export const UPDATE_ISLOGGED = 'UPDATE_ISLOGGED'
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_CARDS = 'UPDATE_CARDS'
export const UPDATE_CARD_DETAIL = 'UPDATE_CARD_DETAIL'

export function setIsLogged(value) {
    return { type: UPDATE_ISLOGGED, value }
}

export function setUser(user) {
    return { type: UPDATE_USER, user }
}

export function setCards(cards) {
    return { type: UPDATE_CARDS, cards }
}

export function setCardDetail(cardDetail) {
    return { type: UPDATE_CARD_DETAIL, cardDetail }
}
import { UPDATE_CARDS, UPDATE_CARD_DETAIL } from "../actions";

const initialState = {
    cards: [],
    cardDetail: undefined
}

const cardReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_CARDS:
            return {
                ...state,
                cards: action.payload
            }
        case UPDATE_CARD_DETAIL:
            return {
                ...state,
                cardDetail: action.payload
            }
        default:
            return state
    }
}

export default cardReducer
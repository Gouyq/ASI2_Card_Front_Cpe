import { UPDATE_CARDS } from "../actions";

const initialState = {
    cards: []
}

const cardReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_CARDS:
            return {
                ...state,
                cards: action.cards
            }
        default:
            return state
    }
}

export default cardReducer
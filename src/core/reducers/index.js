import { combineReducers, createStore } from 'redux'

import userReducer from './user.reducer'
import cardReducer from './card.reducer'

const store = createStore(combineReducers({
    userState: userReducer,
    cardState: cardReducer
}))

export default store
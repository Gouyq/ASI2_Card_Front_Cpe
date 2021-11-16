import { combineReducers } from 'redux'

import userReducer from './user.reducer'
import cardReducer from './card.reducer'

const globalReducer = combineReducers({
    userState: userReducer,
    cardState: cardReducer
})

export default globalReducer
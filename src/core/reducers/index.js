import { combineReducers } from 'redux'
import userReducer from './user.reducer'

const globalReducer = combineReducers({
    userState: userReducer
})

export default globalReducer
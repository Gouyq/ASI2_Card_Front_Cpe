import { UserDisplay } from "../../models/UserDisplay";
import { UPDATE_ISLOGGED, UPDATE_USER, LOGOUT_USER, UPDATE_CONTEXT } from '../actions';

const initialState = {
    isLogged: false,
    user: new UserDisplay(),
    context: null
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_ISLOGGED:
            return {
                ...state,
                isLogged: action.payload,
            }
        case UPDATE_USER:
            return {
                ...state,
                user: action.payload
            }
        case LOGOUT_USER:
            return {
                ...state,
                user: action.payload.user,
                isLogged: action.payload.isLogged
            }
        case UPDATE_CONTEXT:
            return {
                ...state,
                context: action.payload
            }
        default:
            return state
    }
}

export default userReducer
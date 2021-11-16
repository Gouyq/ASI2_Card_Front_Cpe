import { UserDisplay } from "../../models/UserDisplay";
import { UPDATE_ISLOGGED, UPDATE_USER } from "../actions";

const initialState = {
    isLogged: false,
    user: new UserDisplay()
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
        default:
            return state
    }
}

export default userReducer
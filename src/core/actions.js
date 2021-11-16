export const UPDATE_ISLOGGED = 'UPDATE_ISLOGGED'
export const UPDATE_USER = 'UPDATE_USER'

export function setIsLogged(value) {
    return { type: UPDATE_ISLOGGED, value }
}

export function setUser(user) {
    return { type: UPDATE_USER, user }
}
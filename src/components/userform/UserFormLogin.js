import { useState } from 'react'
import { UserDisplay } from '../../models/UserDisplay'
import { UserLogin } from '../../models/UserLogin'
import { UserService } from '../../services/UserService'

import { useDispatch } from 'react-redux'
import { setIsLogged, setUser } from '../../core/actions'

export const UserFormLogin = (props) => {

    const [login, setLogin] = useState(props.login)
    const [password, setPassword] = useState(props.password)

    const dispatch = useDispatch()

    const handleSubmit = () => {
        if(login && password) {
            let user = new UserLogin(login, password)
            const userService = new UserService()
            let authUser = userService.getAuth(user)

            authUser.then(function(response) {
                response.json().then(function(value) {
                    console.log("authUser response")
                    console.log(value)

                    if(value !== -1) {
                        // OK
                        userService.refreshUser(value).then((responseUser) => {
                            if(responseUser){
                                dispatch(setIsLogged(true))
                                dispatch(setUser(responseUser))
                            }
                        })
                        
                    } else {
                        // KO
                        alert("The user does not exists... Please check the fields!")
                    }
                })
            })
        } else {
            alert("All fields are mandatory!")
        }
    }

    const connectUser = (id) => {
        let getUser = new UserService().getUserById(id)

        getUser.then(function(response) {
            response.json().then(function(value) {
                console.log("getUser response")
                console.log(value)

                let userDisplay = new UserDisplay(value.id, value.account,
                    value.lastName, value.surName, value.email, value.cardList)

                dispatch(setIsLogged(true))
                dispatch(setUser(userDisplay))
            })
        })
    }

    const handleInputChange = (event) => {
        const value = event.target.value
        const name = event.target.name

        switch(name) {
            case "login":
                setLogin(value)
                break
            case "password":
                setPassword(value)
                break
            default:
                break;
        }
    }

    return (
        <div>
            <label>
                Login
            </label>
            <br/>
            <input
                name="login"
                type="text"
                placeholder="Login"
                required
                value={login}
                onChange={handleInputChange} />
            <br/>
            <label>
                Password
            </label>
            <br/> 
            <input
                name="password"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={handleInputChange} />
            <br/>
            <button onClick={handleSubmit}>
                Login
            </button>
        </div>
    )
}
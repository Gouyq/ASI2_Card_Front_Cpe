import { useState } from 'react'
import { UserDisplay } from '../../models/UserDisplay'
import { UserLogin } from '../../models/UserLogin'
import { UserService } from '../../services/UserService'

export const UserFormLogin = (props) => {

    const [login, setLogin] = useState(props.login)
    const [password, setPassword] = useState(props.password)

    const handleSubmit = () => {
        if(login && password) {
            let user = new UserLogin(login, password)
            let authUser = new UserService().getAuth(user)

            authUser.then(function(response) {
                response.json().then(function(value) {
                    console.log("authUser response")
                    console.log(value)

                    if(value != -1) {
                        // OK
                        connectUser(value)
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
                
                // TODO - set le user courant à l'aide de Redux

                // TODO - redirection vers une auter page (HomePage ?)
                window.location.replace("/")
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
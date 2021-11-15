import { useState } from 'react'
import { UserLogin } from '../../models/UserLogin'

export const UserFormLogin = (props) => {

    const [login, setLogin] = useState(props.login)
    const [password, setPassword] = useState(props.password)

    const handleSubmit = (event) => {
        if(login && password) {
            let user = new UserLogin(login, password)

            let userJSON = JSON.stringify(user)

            // TODO - envoie au WS
            console.log(userJSON)
        } else {
            alert("All fields are mandatory!")
        }
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
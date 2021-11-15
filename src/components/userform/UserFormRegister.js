import { useState } from "react"
import { UserRegister } from "../../models/UserRegister"

export const UserFormRegister = (props) => {

    const [lastName, setLastName] = useState(props.lastName)
    const [surName, setSurName] = useState(props.surName)
    const [email, setEmail] = useState(props.email)
    const [login, setLogin] = useState(props.login)
    const [password, setPassword] = useState(props.password)

    const handleSubmit = (event) => {
        if(lastName && surName && email && login && password) {
            let user = new UserRegister(lastName, surName, email, login, password)

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
            case "lastName":
                setLastName(value)
                break
            case "surName":
                setSurName(value)
                break
            case "email":
                setEmail(value)
                break
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
                Lastname
            </label>
            <br/>
            <input
                name="lastName"
                type="text"
                placeholder="Lastname"
                required
                value={lastName}
                onChange={handleInputChange} />
            <br/>
            <label>
                Surname
            </label>
            <br/>
            <input
                name="surName"
                type="text"
                placeholder="Surname"
                required
                value={surName}
                onChange={handleInputChange} />
            <br/>
            <label>
                Email
            </label>
            <br/>
            <input
                name="email"
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={handleInputChange} />
            <br/>
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
                Register
            </button>
        </div>
    )
}
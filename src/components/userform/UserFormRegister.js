import { useState } from "react"
import { UserRegister } from "../../models/UserRegister"
import UserService from "../../services/UserService"

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export const UserFormRegister = (props) => {

    const [lastName, setLastName] = useState(props.lastName)
    const [surName, setSurName] = useState(props.surName)
    const [email, setEmail] = useState(props.email)
    const [login, setLogin] = useState(props.login)
    const [password, setPassword] = useState(props.password)

    const handleSubmit = () => {
        if(lastName && surName && email && login && password) {
            let user = new UserRegister(lastName, surName, email, login, password)

            UserService.getInstance().registerUser(user).then(function(response) {
                if(response.status === 200) {
                    window.location.replace("/login")
                } else {
                    alert("Something wrong happened... Please check the fields!")
                }
            })
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
            default: 
                break;
        }
    }

    return (
        <Form>
            <Form.Group className="m-3">
                <Form.Label>
                    Lastname
                </Form.Label>
                <Form.Control
                    name="lastName"
                    type="text"
                    placeholder="Lastname"
                    required
                    value={lastName}
                    onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="m-3">
                <Form.Label>
                    Surname
                </Form.Label>
                <Form.Control
                    name="surName"
                    type="text"
                    placeholder="Surname"
                    required
                    value={surName}
                    onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="m-3">
                <Form.Label>
                    Email
                </Form.Label>
                <Form.Control
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="m-3">
                <Form.Label>
                    Login
                </Form.Label>
                <Form.Control
                    name="login"
                    type="text"
                    placeholder="Login"
                    required
                    value={login}
                    onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="m-3">
                <Form.Label>
                    Password
                </Form.Label>
                <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={handleInputChange} />
            </Form.Group>
            <Button
                className="m-3"
                variant="primary"
                onClick={handleSubmit} >
                Register
            </Button>
        </Form>
    )
}
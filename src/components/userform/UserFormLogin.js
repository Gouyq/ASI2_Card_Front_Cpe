import { useState } from 'react'
import { UserLogin } from '../../models/UserLogin'
import { UserService } from '../../services/UserService'

import { useDispatch } from 'react-redux'
import { setIsLogged, setUser } from '../../core/actions'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export const UserFormLogin = (props) => {

    const [login, setLogin] = useState(props.login)
    const [password, setPassword] = useState(props.password)

    const dispatch = useDispatch()

    const handleSubmit = () => {
        if(login && password) {
            let user = new UserLogin(login, password)

            UserService.getInstance().getAuth(user).then(function(response) {
                response.json().then(function(value) {
                    if(value !== -1) {
                        UserService.getInstance().refreshUser(value.id).then((responseUser) => {
                            if(responseUser){
                                dispatch(setIsLogged(true))
                                dispatch(setUser(responseUser))
                            }
                        })
                    } else {
                        alert("The user does not exists... Please check the fields!")
                    }
                })
            })
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
            default:
                break;
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }

    return (
        <Form onKeyPress={handleKeyPress}>
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
                Login
            </Button>
        </Form>
    )
}
import { useState } from 'react'
import { UserLogin } from '../../models/UserLogin'
import { UserService } from '../../services/UserService'

import { useDispatch } from 'react-redux'
import { setChatUsers, setIsLogged, setUser } from '../../core/actions'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { UserSocket } from '../../sockets/UserSocket'

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
                        UserService.getInstance().refreshUser(value).then((responseUser) => {
                            if(responseUser){
                                console.log('here')
                                dispatch(setIsLogged(true))
                                dispatch(setUser(responseUser))
                                UserSocket.getInstance().listenUserConnected((data) => {
                                    dispatch(setChatUsers(data));
                                });
                                UserSocket.getInstance().emitUserConnected(responseUser);
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

    return (
        <Form>
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
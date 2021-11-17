import Nav from 'react-bootstrap/Nav'

import { useSelector } from 'react-redux'
import { selectIsLogged } from '../../core/selectors'

export const Menu = function() {

    const isLogged = useSelector(selectIsLogged)

    if(isLogged) {
        return (
            <Nav fill>
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/buy">Buy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/sell">Sell</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/play">Play</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    } else {
        return (
            <Nav fill>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
        )

    }
}

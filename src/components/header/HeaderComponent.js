import { Menu } from "../menu/Menu"

import { useDispatch, useSelector } from 'react-redux'
import { selectUser, selectIsLogged } from '../../core/selectors';
import { setChatReset, setChatUsers, setLogoutUser } from '../../core/actions';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import { UserSocket } from "../../sockets/UserSocket";

export const HeaderComponent = () => {
    const user = useSelector(selectUser)
    const isLogin = useSelector(selectIsLogged)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(setLogoutUser())
        dispatch(setChatReset());
        UserSocket.getInstance().disconnect();
    }

    const titlePage = (
        <h1 style={{ float: 'left' }}>
            <i className="bi bi-suit-spade-fill"></i>
            &nbsp;
            Card Store
            &nbsp;
            <i className="bi bi-suit-diamond-fill"></i>
        </h1>
    )

    const userInfo = (
        <Stack direction="horizontal" gap={3} style={{ float: 'right' }}>
            <div>
                <h1>
                    <i className="bi bi-person-circle"></i>
                </h1>
            </div>
            <div>
                <Stack>
                    <div>
                        {user.surName}&nbsp;{user.lastName}
                    </div>
                    <div>
                        {user.account}&nbsp;$
                    </div>
                </Stack>
            </div>
            <div>
                <Button variant="danger" onClick={handleLogout} size="lg">
                    <i className="bi bi-arrow-right-square"></i>
                </Button>
            </div>
        </Stack>
    )

    return (
        <div className="m-3">
            <Row>
                <Col>{titlePage}</Col>
                <Col><h2><Menu></Menu></h2></Col>
                <Col>{ isLogin ? userInfo : ''}</Col>
            </Row>
            <hr/>
        </div>
    )
}
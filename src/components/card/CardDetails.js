import { useDispatch, useSelector } from 'react-redux'
import { selectCardDetail, selectUser, selectContext } from '../../core/selectors';
import { StoreService } from '../../services/StoreService';
import { UserService } from '../../services/UserService';
import { setUser } from '../../core/actions';

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import logo from '../../assets/images/logoCS.jpg';

export const CardDetails = () => {

    const dispatch = useDispatch()
    const cardDetail = useSelector(selectCardDetail)
    const user = useSelector(selectUser)
    const context = useSelector(selectContext)

    const refresh = (result) => {
        if(result){
            UserService.getInstance().refreshUser(user.id).then((responseUser) => {
                if(responseUser) {
                    dispatch(setUser(responseUser))
                }
            })
        }
    }

    const handleClick = () => {
        if(context === "buy") {
            let buyCard = StoreService.getInstance().buyCard({ 
                userId: user.id,
                cardId: cardDetail.id
            })

            buyCard.then(function(response) {
                response.json().then(function(value) {
                    refresh(value)
                })
            })
        } else if (context === "sell") {
            let sellCard = StoreService.getInstance().sellCard({ 
                userId: user.id,
                cardId: cardDetail.id
            })

            sellCard.then(function(response) {
                response.json().then(function(value) {
                    refresh(value)
                })
            })
        }
    }

    const getActionButton = () => {
        if((context === "buy" && user.account >= cardDetail.price) || context === "sell") {
            return (
                <Button variant="secondary" onClick={handleClick}>
                    {context.toUpperCase()}&nbsp;|&nbsp;
                    <i className="bi bi-cash"></i>&nbsp;{cardDetail.price}&nbsp;$
                </Button>
            )
        } else {
            return (
                <Button variant="secondary" disabled>
                    {context.toUpperCase()}&nbsp;|&nbsp;
                    <i className="bi bi-cash"></i>&nbsp;{cardDetail.price}&nbsp;$
                </Button>
            )
        }
    }

    if(!cardDetail) {
        return (
            <Card>
                <Card.Header>
                    <Row>
                        <Col>
                            <i className="bi bi-heart-fill"></i><br/>HP
                        </Col>
                        <Col>
                            Select a card
                        </Col>
                        <Col>
                            <i className="bi bi-bookmark-heart-fill"></i><br/>Charisma
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Img src={logo} alt="" />
                <Card.Body>
                    <Row>
                        <Col>
                            Description
                        </Col>
                        <Col>
                            Family
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            <i className="bi bi-heart-fill"></i><br/>HP
                        </Col>
                        <Col>
                            <i className="bi bi-shield-fill-x"></i><br/>Credibility
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            <i className="bi bi-hammer"></i><br/>Special Attack
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            <i className="bi bi-person-check-fill"></i><br/>Affinity
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    <Button variant="secondary">
                        <i className="bi bi-cash"></i>&nbsp;{context.toUpperCase()}&nbsp;<i className="bi bi-cash"></i>
                    </Button>
                </Card.Footer>
            </Card>
        )
    }

    return (
        <Card>
            <Card.Header>
                <Row>
                    <Col>
                        <i className="bi bi-heart-fill"></i>&nbsp;{cardDetail.hp}
                    </Col>
                    <Col>
                        {cardDetail.name}
                    </Col>
                    <Col>
                        {cardDetail.charisme}&nbsp;<i className="bi bi-bookmark-heart-fill"></i>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Img src={cardDetail.imgUrl} alt={cardDetail.name} />
            <Card.Body>
                <Row>
                    <Col>
                        {cardDetail.description}
                    </Col>
                    <Col>
                        {cardDetail.family}
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                        <i className="bi bi-heart-fill"></i>&nbsp;{cardDetail.hp}
                    </Col>
                    <Col>
                        {cardDetail.credibilite}&nbsp;<i className="bi bi-shield-fill-x"></i>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                        <i className="bi bi-hammer"></i><br/>{cardDetail.coupSpecial}
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                        <i className="bi bi-person-check-fill"></i><br/>{cardDetail.affinity}
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer>
                { getActionButton() }
            </Card.Footer>
        </Card>
    )
}
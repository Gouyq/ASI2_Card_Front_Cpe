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
                if(responseUser){
                    dispatch(setUser(responseUser))
                }
            })
        }
       
    }

    const handleClick = () =>{
        if(context === "buy"){
            let buyCard = StoreService.getInstance().buyCard({ 
                user_id: user.id,
                card_id: cardDetail.id
            })
            buyCard.then(function(response) {
                response.json().then(function(value) {
                    refresh(value)
                })
            })
        }
        else if (context === "sell"){
            let sellCard = StoreService.getInstance().sellCard({ 
                user_id: user.id,
                card_id: cardDetail.id
            })

            sellCard.then(function(response) {
                response.json().then(function(value) {
                    refresh(value)
                })
            })
        }
    }

    if(!cardDetail) {
        return (
            <Card>
                <Card.Header>
                    <Row>
                        <Col>
                            <i class="bi bi-heart-fill"></i>&nbsp;HP
                        </Col>
                        <Col>
                            Select a card
                        </Col>
                        <Col>
                            Energy&nbsp;<i class="bi bi-lightning-fill"></i>
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
                            <i class="bi bi-heart-fill"></i>&nbsp;HP
                        </Col>
                        <Col>
                            Energy&nbsp;<i class="bi bi-lightning-fill"></i>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col>
                            <i class="bi bi-hammer"></i>&nbsp;Attack
                        </Col>
                        <Col>
                            Defence&nbsp;<i class="bi bi-shield-fill-x"></i>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    <Button variant="secondary">
                        <i class="bi bi-cash"></i>&nbsp;{context.toUpperCase()}&nbsp;<i class="bi bi-cash"></i>
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
                        <i class="bi bi-heart-fill"></i>&nbsp;{cardDetail.hp}
                    </Col>
                    <Col>
                        {cardDetail.name}
                    </Col>
                    <Col>
                        {cardDetail.energy}&nbsp;<i class="bi bi-lightning-fill"></i>
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
                        <i class="bi bi-heart-fill"></i>&nbsp;{cardDetail.hp}
                    </Col>
                    <Col>
                        {cardDetail.energy}&nbsp;<i class="bi bi-lightning-fill"></i>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                        <i class="bi bi-hammer"></i>&nbsp;{cardDetail.attack}
                    </Col>
                    <Col>
                        {cardDetail.defence}&nbsp;<i class="bi bi-shield-fill-x"></i>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer>
                <Button variant="secondary" onClick={handleClick}>
                    {context.toUpperCase()}&nbsp;|&nbsp;
                    <i class="bi bi-cash"></i>&nbsp;{cardDetail.price}&nbsp;$
                </Button>
            </Card.Footer>
        </Card>
    )
}
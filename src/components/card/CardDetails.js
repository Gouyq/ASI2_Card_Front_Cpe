import { useDispatch, useSelector } from 'react-redux'
import { selectCardDetail, selectUser, selectContext } from '../../core/selectors';
import { StoreService } from '../../services/StoreService';
import { UserService } from '../../services/UserService';
import { setUser } from '../../core/actions';

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export const CardDetails = () => {

    const dispatch = useDispatch()
    const cardDetail = useSelector(selectCardDetail)
    const user = useSelector(selectUser)
    const context = useSelector(selectContext)
    const userService = new UserService()

    const refresh = (result) => {
        if(result){
            userService.refreshUser(user.id).then((responseUser) => {
                if(responseUser){
                    dispatch(setUser(responseUser))
                }
            })
        }
       
    }

    const handleClick = () =>{
        console.log(context)
        if(context === "buy"){
            let buyCard = new StoreService().buyCard({ 
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
            let sellCard = new StoreService().sellCard({ 
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
        return null
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
                    <i class="bi bi-cash"></i>&nbsp;{cardDetail.price}&nbsp;$
                </Button>
            </Card.Footer>
        </Card>
    )
}
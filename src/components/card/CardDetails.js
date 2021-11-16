import '../../assets/Semantic-UI-CSS-master/semantic.css'

import { useDispatch, useSelector } from 'react-redux'
import { selectCardDetail, selectUser, selectContext } from '../../core/selectors';
import { StoreService } from '../../services/StoreService';
import { UserService } from '../../services/UserService';
import { setUser } from '../../core/actions';

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
        <div>
            <div class="ui special cards">
                <div class="card">
                    <div class="content">
                        <div class="ui grid">
                            <div class="three column row">
                                <div class="column">
                                    <i class="heart outline icon"></i>
                                    <span id="cardHPId">{cardDetail.hp}</span>
                                </div>
                                <div class="column">
                                    <h5>{cardDetail.family}</h5>
                                </div>
                                <div class="column">
                                    <span id="energyId">{cardDetail.energy}</span>
                                    <i class="lightning icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="image imageCard">
                        <div class="blurring dimmable image">
                            <div class="ui inverted dimmer">
                                <div class="content">
                                    <div class="center">
                                        <div class="ui primary button">
                                            Add Friend
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ui fluid image">
                                <a class="ui left corner label">
                                    {cardDetail.name}
                                </a>
                                <img id="cardImgId" class="ui centered image" src={cardDetail.imgUrl} alt={cardDetail.name}></img>
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        {cardDetail.description}
                    </div>
                    <div class="content">
                        <i class="heart outline icon"></i>
                        <span id="cardHPId">HP: {cardDetail.hp}</span>
                        <div class="right floated">
                            <span id="cardEnergyId">Energy: {cardDetail.energy}</span>
                            <i class="lightning icon"></i>
                        </div>
                    </div>
                    <div class="content">
                        <div class="right floated">
                            <i class="wizard icon"></i>
                            <span id="cardAttackId">Attack: {cardDetail.attack}</span>
                        </div>
                        <div class="left floated">
                            <i class="protect icon"></i>
                            <span id="cardDefenceId">Defence: {cardDetail.defence}</span>
                        </div>
                        
                    </div>
                    <div class="ui bottom attached button" onClick={handleClick}>
                        <i class="money icon"></i>
                        <span id="cardPriceId">{cardDetail.price} $</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
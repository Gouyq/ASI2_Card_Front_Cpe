import { CardTab } from "../../components/card/CardTab"

import { useEffect } from 'react'
import { CardService } from "../../services/CardService"
import { useDispatch, useSelector } from 'react-redux'
import { setCards, setContext, setCardDetail } from '../../core/actions';
import { selectUser } from '../../core/selectors';

export const BuyPage = () => {

    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    useEffect(() => {
        dispatch(setContext("buy"))
        dispatch(setCardDetail(null))

        CardService.getInstance().getAllCards().then(function(response) {
            response.json().then(function(value) {
                const cards = value.filter(card => !user.cardList.some(userCard => card.id === userCard.id  ))
                dispatch(setCards(cards))
            })
        })
    })

    return <CardTab></CardTab>
}
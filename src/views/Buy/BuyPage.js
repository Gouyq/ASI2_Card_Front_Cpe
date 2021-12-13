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

        CardService.getInstance().getCardsToSell().then(function(response) {
            response.json().then(function(value) {
                dispatch(setCards(value))
            })
        })
    })

    return <CardTab></CardTab>
}
import { CardTab } from "../../components/card/CardTab"

import { useEffect } from 'react'
import { CardService } from "../../services/CardService"
import { useDispatch } from 'react-redux'
import { setCards } from "../../core/actions"

export const BuyPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        let getAllCards = new CardService().getAllCards()

        getAllCards.then(function(response) {
            response.json().then(function(value) {
                dispatch(setCards(value))
            })
        })
    })

    return <CardTab></CardTab>
}
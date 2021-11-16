import { CardTab } from "../../components/card/CardTab"

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setCards } from "../../core/actions"
import { selectUser } from '../../core/selectors'

export const SellPage = () => {

    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    useEffect(() => {
        let cards = user.cardList
        dispatch(setCards(cards))
    })

    return <CardTab></CardTab>
}
import { CardCell } from './CardCell'

import { useSelector } from 'react-redux'
import { selectCards } from '../../core/selectors'

export const CardTab = () => {

    const cards = useSelector(selectCards)
    
    return (
        <table class="ui selectable celled table" id="cardListId">
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Family</th>
                <th>HP</th>
                <th>Energy</th>
                <th>Defence</th>
                <th>Attack</th>
                <th>Price</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {cards.map(card => <CardCell card={card}/>)}
        </tbody>
    </table>
    )
}
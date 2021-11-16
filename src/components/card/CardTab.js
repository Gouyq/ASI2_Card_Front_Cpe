import { CardCell } from './CardCell'
import { CardDetails } from './CardDetails'

import { useSelector } from 'react-redux'
import { selectCards } from '../../core/selectors';

export const CardTab = () => {

    const cards = useSelector(selectCards)
    
    return (
        <div class="ui grid">
            <div class="twelve wide column">
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
                        </tr>
                    </thead>
                    <tbody>

                        {cards != undefined ? cards.map(card => <CardCell card={card}/>) : ''}
                    </tbody>
                </table>
            </div>
            <div class="four wide column">
                <CardDetails></CardDetails>
            </div>
        </div>
    )
}
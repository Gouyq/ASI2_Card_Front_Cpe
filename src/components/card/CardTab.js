import { CardCell } from './CardCell'

export const CardTab = (props) => {
    
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
            {props.cards
                .map(card => <CardCell card={card}/>)}
        </tbody>
    </table>
    )
}
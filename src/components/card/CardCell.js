import '../../assets/Semantic-UI-CSS-master/semantic.css'

export const CardCell = ({card}) => {
    return (
    <tr>
        <td>{card.name}</td>
        <td>{card.description}</td>
        <td>{card.family}</td>
        <td>{card.hp}</td>
        <td>{card.energy}</td>
        <td>{card.defence}</td>
        <td>{card.attack}</td>
        <td>{card.price} $</td>
        <td>
            <div class="ui vertical animated button" tabindex="0">
                <div class="hidden content">Sell</div>
                <div class="visible content">
                    <i class="shop icon"></i>
                </div>
            </div>
        </td>
    </tr>)
}
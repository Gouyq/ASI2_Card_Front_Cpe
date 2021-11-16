import '../../assets/Semantic-UI-CSS-master/semantic.css'

import { useDispatch } from 'react-redux'
import { setCardDetail } from '../../core/actions';

export const CardCell = ({card}) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setCardDetail(card))
    }

    return (
        <tr onClick={handleClick}>
            <td>
                <img id="cardImgId" class="ui avatar image" src={card.smallImgUrl} alt={card.name}></img>
                <span>{card.name}</span>
            </td>
            <td>{card.description}</td>
            <td>{card.family}</td>
            <td>{card.hp}</td>
            <td>{card.energy}</td>
            <td>{card.defence}</td>
            <td>{card.attack}</td>
            <td>{card.price} $</td>
        </tr>
    )
}
import { useDispatch } from 'react-redux'
import { setCardDetail } from '../../core/actions';

import Image from 'react-bootstrap/Image'

export const CardCell = ({card}) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setCardDetail(card))
    }

    return (
        <tr onClick={handleClick}>
            <td><Image src={card.smallImgUrl} alt={card.name} roundedCircle fluid style={{ width: "32px", height: "32px" }}/></td>
            <td>{card.name}</td>
            <td>{card.description}</td>
            <td>{card.family}</td>
            <td>{card.hp}</td>
            <td>{card.charisme}</td>
            <td>{card.credibilite}</td>
            <td>{card.affinity}</td>
            <td>{card.coupSpecial}</td>
            <td>{card.price}&nbsp;$</td>
        </tr>
    )
}
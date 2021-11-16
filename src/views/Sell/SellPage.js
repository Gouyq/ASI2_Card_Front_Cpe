import { CardTab } from "../../components/card/CardTab"
import cards from '../../assets/json/cardSell.json'

export const SellPage = (props) => {
    return <CardTab cards={cards}></CardTab>
}
import { Service } from './Service'

export class CardService extends Service {

    static instance = null

    static getInstance() {
        if(this.instance == null) {
            this.instance = new CardService()
        }

        return this.instance
    }

    constructor() {
        // Notre serveur.
        const domain = "http://localhost:8084/api"

        // Serveur de Jacques.
        //const domain = "https://asi2-backend-market.herokuapp.com"

        super(domain)
    }

    getAllCards() {
        const url = "/cards"
        const method = "GET"

        return super.request(url, method)
    }

    getCardsByUserId(userId) {
        const url = `/cards/${userId}`
        const method = "GET"

        return super.request(url, method)
    }

    getCardsToSell() {
        const url = "/cards_to_sell"
        const method = "GET"

        return super.request(url, method)
    }
}

export default CardService
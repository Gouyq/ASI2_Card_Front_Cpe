import { Service } from './Service'

export class CardService extends Service {
    constructor() {
        // Noter serveur.
        //const domain = "http://localhost:8081"

        // Serveur de Jacques.
        const domain = "https://asi2-backend-market.herokuapp.com"

        super(domain)
    }

    getAllCards() {
        const url = "/cards"
        const method = "GET"

        return super.request(url, method)
    }
}

export default CardService
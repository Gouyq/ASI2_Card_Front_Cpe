import { Service } from './Service'

export class StoreService extends Service {
    constructor() {
        // Noter serveur.
        //const domain = "http://localhost:8081"

        // Serveur de Jacques.
        const domain = "https://asi2-backend-market.herokuapp.com"

        super(domain)
    }

    buyCard(data) {
        const url = "/buy"
        const method = "POST"

        return super.request(url, method, data)
    }

    sellCard(data) {
        const url = "/sell"
        const method = "POST"

        return super.request(url, method, data)
    }
}

export default StoreService
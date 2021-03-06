import { Service } from './Service'

export class StoreService extends Service {

    static instance = null

    static getInstance() {
        if(this.instance == null) {
            this.instance = new StoreService()
        }

        return this.instance
    }

    constructor() {
        // Notre serveur.
        const domain = "http://localhost:8083/api"

        // Serveur de Jacques.
        //const domain = "https://asi2-backend-market.herokuapp.com"

        super(domain)
    }

    buyCard(data) {
        const url = "buy"
        const method = "POST"

        return super.request(url, method, data)
    }

    sellCard(data) {
        const url = "sell"
        const method = "POST"

        return super.request(url, method, data)
    }
}

export default StoreService
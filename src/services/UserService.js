import { Service } from './Service'
import { CardService } from './CardService'
import { UserDisplay } from '../models/UserDisplay'

export class UserService extends Service {

    static instance = null

    static getInstance() {
        if(this.instance == null) {
            this.instance = new UserService()
        }

        return this.instance
    }
    
    constructor() {
        // Notre serveur.
        const domain = "http://localhost:8086/api"

        // Serveur de Jacques.
        //const domain = "https://asi2-backend-market.herokuapp.com"

        super(domain)
    }

    getAuth(userLogin) {
        const url = `auth/${userLogin.login}/${userLogin.password}`
        const method = "GET"

        return super.request(url, method)
    }

    getUserById(id) {
        const url = `user/${id}`
        const method = "GET"

        return super.request(url, method)
    }

    registerUser(userRegister) {
        const url = `/user`
        const method = "POST"
        const data = userRegister

        return super.request(url, method, data)
    }

    refreshUser(id) {
        let getUser = this.getUserById(id)
        let getCards = CardService.getInstance().getCardsByUserId(id)

        return Promise.all([getUser, getCards]).then((values) => {
            return Promise.all([values[0].json(), values[1].json()]).then((valuesNested) => {
                let userDisplay = new UserDisplay()

                userDisplay.id = valuesNested[0].id
                userDisplay.account = valuesNested[0].account
                userDisplay.lastName = valuesNested[0].lastName
                userDisplay.surName = valuesNested[0].surName
                userDisplay.email = valuesNested[0].email
                userDisplay.cardList = valuesNested[1]

                return userDisplay
            })
        })
    }
}

export default UserService
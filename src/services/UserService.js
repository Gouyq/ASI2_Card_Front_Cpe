import { Service } from './Service'
import { UserDisplay } from '../models/UserDisplay';

export class UserService extends Service {

    static instance = null

    static getInstance() {
        if(this.instance == null) {
            this.instance = new UserService()
        }

        return this.instance
    }
    
    constructor() {
        // Noter serveur.
        const domain = "http://localhost:8081"

        // Serveur de Jacques.
        // const domain = "https://asi2-backend-market.herokuapp.com"

        super(domain)
    }

    getAuth(userLogin) {
        const url = `auth?login=${userLogin.login}&pwd=${userLogin.password}`
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

    refreshUser(id){
        let getUser = this.getUserById(id)

        return getUser.then(function(response) {
            return response.json().then(function(value) {
                let userDisplay = new UserDisplay(value.id, value.account,
                    value.lastName, value.surName, value.email, value.cardList)

                return userDisplay
            })
        })
    }
}

export default UserService
import { Service } from './Service'

export class UserService extends Service {
    constructor() {
        // Noter serveur.
        //const domain = "http://localhost:8081"

        // Serveur de Jacques.
        const domain = "https://asi2-backend-market.herokuapp.com"

        super(domain)
    }

    getAuth(userLogin) {
        const url = `auth?login=${userLogin.login}&pwd=${userLogin.password}`
        const method = "GET"
        //const data = JSON.stringify(userLogin)

        return super.request(url, method)
    }
}

export default UserService
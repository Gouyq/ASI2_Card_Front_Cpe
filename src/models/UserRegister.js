export class UserRegister {
    constructor(lastName, surName, email, login, password) {
        this.lastName = lastName
        this.surName = surName
        this.email = email
        this.login = login
        this.pwd = password
        this.account = 1000 // Argent du user avec une valeur arbitraire.
    }
}
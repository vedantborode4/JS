class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}vedant`
    }

    set password(value){
        this._password = value
    }
}

const vedant = new User("v@vedant.ai", "abc")
console.log(vedant.email);
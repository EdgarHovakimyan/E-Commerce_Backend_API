module.exports = class UserDto{
    id;
    name;
    surname;
    email;
    isVerified;
    isBlocked
    type;
    constructor(model){
        this.id = model.id;
        this.name = model.name;
        this.surname = model.surname;
        this.email = model.email;
        this.isVerified = model.isVerified;
        this.type = model.type;
        this.isBlocked = model.isBlocked;
    } 
}
import mg  from "mongoose";

let Myschema = new mg.Schema({
    name: {
        type: String
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone_no: {
        type: Number
    },
    password: {
        type: String,
        required: true
    }
})
let User = new mg.model("User", Myschema)

export default User;

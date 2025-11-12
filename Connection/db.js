import mg  from "mongoose";

let connection = () => {
    try {
        mg.connect("mongodb://localhost:27017/Practice")
        console.log("Database Connected....")
    } catch (err) {
        console.log(err)
    }
}
export default connection;

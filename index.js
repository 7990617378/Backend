import ex from "express";
let app = ex()
import cors from "cors";
import connection from "../Backend/Connection/db.js";
import router from "../Backend/Router/Router.js";

connection()
app.use(cors());
app.use(ex.json())
app.use(router)
// app.listen(5000)
export default app
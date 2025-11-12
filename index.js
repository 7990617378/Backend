let ex = require("express")
let app = ex()
const cors = require("cors");
let connection = require("../Backend/Connection/db")
let router = require("../Backend/Router/Router")

connection()
app.use(cors());
app.use(ex.json())
app.use(router)
app.listen(5000)
let ex = require("express")
let router = ex.Router()
let {Register, Login} = require("../Controllers/Controllers")

router.post("/register",Register)
router.post("/login",Login)

module.exports = router
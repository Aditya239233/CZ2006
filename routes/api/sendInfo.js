const express = require("express");
const router = express.Router();

//Email to: housematchers.no.reply@gmail.com
//Password: WhenWillSemEnd
router.post("/sendMessage", (req,res) => {
    const email = req.body.email;
    const message = req.body.message;

})

module.exports = router;
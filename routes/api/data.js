const express = require("express");
const router = express.Router();
const csv = require("csvtojson");

router.get("/data", (req, res) => {
  const converter = csv()
    .fromFile("./data/data.csv")
    .then((json) => {
      res.json(json);
    });
});

module.exports = router;

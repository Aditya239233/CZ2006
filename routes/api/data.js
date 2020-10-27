const express = require("express");
const router = express.Router();

router.get("/data", (req, res) => {
  // placeholder for csv file
  const data = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Brad", lastName: "Traversy" },
    { id: 3, firstName: "Mary", lastName: "Swanson" },
  ];

  res.json(data);
});

module.exports = router;

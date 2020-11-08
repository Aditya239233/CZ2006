const express = require("express");
const router = express.Router();

router.get("/bargraph", (req, res) => {
  let data = {
    labels: [
      "Improved",
      "New Generation",
      "DBSS",
      "Standard",
      "Apartment",
      "Simplified",
      "Model A",
      "Premium Apartment",
      "Adjoined flat",
      "Model A-Maisonette",
      "Maisonette",
      "Type S1",
      "Type S2",
      "Model A2",
      "Terrace",
      "Improved-Maisonette",
      "Premium Maisonette",
      "Multi Generation",
      "Premium Apartment Loft",
      "2-room",
    ],
    datasets: [
      {
        label: "Average HBD Retail Price",
        backgroundColor: "rgb(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(54,162,235,0.4)",
        hoverBorderColor: "rgba(54,162,235,1)",
        data: [
          229500.0,
          673387.0263157894,
          609883.0319312251,
          758173.4504504504,
          450858.7672118403,
          680492.0,
          670184.3824705387,
          422694.7394872185,
          702171.7058823529,
          342952.7454545455,
          800258.1621621621,
          329543.6207286864,
          463273.682964668,
          877833.2307692308,
          746500.0,
          339005.37143705465,
          391847.31061946903,
          812082.1060869565,
          926643.9776119404,
          1031750.5405405406,
        ],
      },
    ],
  };
  res.send(data);
});

router.get("/timeseries", (req, res) => {
  let data = {
    labels: [2009, 2012, 2015, 2018, 2021],
    datasets: [
      {
        label: "Average Price of HBD",
        data: [2.39316, 3.09316, 3.99316, 4.39316],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        yAxisID: "y-axis-1",
      },
      {
        label: "Predicted Average Price",
        data: [2.29316, 3.19316, 3.98316, 4.39116, 4.49116],
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 0.2)",
        yAxisID: "y-axis-2",
      },
    ],
  };
  res.send(data);
});

module.exports = router;

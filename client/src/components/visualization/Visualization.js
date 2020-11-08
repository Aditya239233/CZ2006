import React, { Component, Fragment } from "react";
import "./Visualization.css";
import { Bar, Line } from "react-chartjs-2";
import map from "../../assets/Map.png";

const data = {
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

const data_1 = {
  labels: [2010, 2013, 2015, 2018, 2020],
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

class Visualization extends Component {
  constructor() {
    super();
    this.state = { data: "Heatmap" };
  }

  btnClick(val) {
    this.setState({ data: val });
  }

  render() {
    return (
      <Fragment>
      <h1 className="large text-primary">Visualization Page</h1>
      <div className="wrapper">
        <div className="inner">
          <button
            className="heading"
            onClick={this.btnClick.bind(this, "Heatmap")}
          >
            Heatmap
          </button>
        </div>
        <div className="inner">
          <button
            className="heading"
            onClick={this.btnClick.bind(this, "Bar Graph")}
          >
            Bar Graph
          </button>
        </div>
        <div className="inner">
          <button
            className="heading"
            onClick={this.btnClick.bind(this, "Time Series")}
          >
            Time Series
          </button>
        </div>
        <div className="">{graph(this.state.data)}</div>
      </div>
      </Fragment>
    );
  }
}

function graph(mode) {
  if (mode === "Heatmap") {
    return <img alt="" src={map} width="475px" height="275px"></img>
  } else if (mode === "Bar Graph") {
    return (
      <div>
        <Bar
          data={data}
          width={550}
          height={300}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "Price",
                  },
                },
              ],
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "Flat Model",
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  } else if (mode === "Time Series") {
    return (
      <div className="graph"style={{ maxWidth: "750px",}}>
        <Line
          data={data_1}
          width={500}
          height={500}
          options={{
            aintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "Price",
                  },
                  type: "linear",
                  display: true,
                  position: "left",
                  id: "y-axis-1",
                },
                {
                  type: "linear",
                  display: true,
                  position: "right",
                  id: "y-axis-2",
                  gridLines: {
                    drawOnArea: false,
                  },
                },
              ],
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "Years",
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}

export default Visualization;

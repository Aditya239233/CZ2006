import React, { Component, Fragment } from "react";
import { Bar, Line } from "react-chartjs-2";
import store from "../../store";
import map from "../../assets/map.png";

class Visualization extends Component {
  constructor() {
    super();
    this.state = { data: "Bar Graph" };
  }

  btnClick(val) {
    this.setState({ data: val });
  }

  render() {
    var bargraph = store.getState()["data"]["bargraph"];
    var timeseries = store.getState()["data"]["timeseries"];
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
          <div className="">{graph(this.state.data, bargraph, timeseries)}</div>
        </div>
      </Fragment>
    );
  }
}

function graph(mode, bargraph, timeseries) {
  if (mode === "Heatmap") {
    return <img src={map} alt=""></img>;
  } else if (mode === "Bar Graph") {
    return (
      <div>
        <Bar
          data={bargraph}
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
      <div className="graph" style={{ maxWidth: "750px" }}>
        <Line
          data={timeseries}
          width={500}
          height={500}
          options={{
            aintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "Price in 10K",
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

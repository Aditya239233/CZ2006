import React, { Component } from "react";
import "./Visualization.css";

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
      </div>
    );
  }
}

export default Visualization;

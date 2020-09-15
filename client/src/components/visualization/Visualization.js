import React, { Component } from "react";
import CanvasJSReact from "../../lib/canvasjs.react";
import "./Visualization.css";

class Visualization extends Component {
  render() {
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const models = {
      animationEnabled: true,
      title: {
        text: "Model Comparison",
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { label: "Standard", y: 71 },
            { label: "New Generation", y: 55 },
            { label: "Improved", y: 50 },
            { label: "Simplified", y: 65 },
            { label: "Apartment", y: 71 },
            { label: "Model A", y: 68 },
            { label: "Flexi", y: 38 },
            { label: "Maisonette", y: 92 },
            { label: "3 Gen", y: 54 },
          ],
        },
      ],
    };
    const timeseries = {
      animationEnabled: true,
      title: {
        text: "Timeseries",
      },
      axisY: {
        title: "Average Price",
      },
      toolTip: {
        shared: true,
      },
      data: [
        {
          type: "line",
          name: "Actual",
          showInLegend: true,
          dataPoints: [
            { y: 155, label: "Jan" },
            { y: 150, label: "Feb" },
            { y: 152, label: "Mar" },
            { y: 148, label: "Apr" },
            { y: 142, label: "May" },
            { y: 150, label: "Jun" },
            { y: 146, label: "Jul" },
            { y: 149, label: "Aug" },
            { y: 153, label: "Sept" },
            { y: 158, label: "Oct" },
            { y: 154, label: "Nov" },
          ],
        },
        {
          type: "line",
          name: "Prediction",
          showInLegend: true,
          dataPoints: [
            { y: 155, label: "Jan" },
            { y: 150, label: "Feb" },
            { y: 152, label: "Mar" },
            { y: 148, label: "Apr" },
            { y: 142, label: "May" },
            { y: 150, label: "Jun" },
            { y: 146, label: "Jul" },
            { y: 149, label: "Aug" },
            { y: 153, label: "Sept" },
            { y: 158, label: "Oct" },
            { y: 154, label: "Nov" },
            { y: 150, label: "Dec" },
          ],
        },
      ],
    };

    return (
      <div className="graphs">
        <br />
        <CanvasJSChart name="graph" options={models} />
        <br />
        <CanvasJSChart
          name="graph"
          options={timeseries}
          onRef={(ref) => (this.chart = ref)}
        />
      </div>
    );
  }
}

export default Visualization;

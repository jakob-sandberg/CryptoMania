import React, { useRef, useEffect, useState } from "react";
import Chartjs from "chart.js";
import { historyOptions } from "../chartConfigs/chartConfigs";
import "../css/Chart.css";

const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState("24h");

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  };

  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      // eslint-disable-next-line no-unused-vars
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${detail.name} price`,
              data: determineTimeFormat(),
              backgroundColor: "rgba(174, 305, 194, 0.5)",
              borderColor: "rgba(174, 305, 194, 0.9",
              color: "#9c9c9c",
              pointRadius: 0,
            },
          ],
        },
        options: {
          ...historyOptions,
        },
      });
    }
  });

  const renderPrice = () => {
    if (detail) {
      return (
        <>
          <p className="my-0">${detail.current_price.toFixed(6)}</p>
          <p
            className={
              detail.price_change_24h < 0 ? "percentRed" : "percentGreen"
            }
          >
            {detail.price_change_percentage_24h.toFixed(2)}%
          </p>
        </>
      );
    }
  };
  return (
    <div className="chart-container">
      <div>{renderPrice()}</div>
      <div>
        <canvas
          className="myChart"
          ref={chartRef}
          height={250}
          width={500}
        ></canvas>
      </div>

      <div className="button-container">
        <button onClick={() => setTimeFormat("24h")} className="time-button">
          24h
        </button>
        <button onClick={() => setTimeFormat("7d")} className="time-button">
          7d
        </button>
        <button onClick={() => setTimeFormat("1y")} className="time-button">
          1y
        </button>
      </div>
    </div>
  );
};

export default HistoryChart;

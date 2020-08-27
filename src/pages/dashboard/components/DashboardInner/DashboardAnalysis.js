import React, { useState, useRef, useEffect } from "react";
import EmptyCard from "./EmptyCard";
import ReactApexChart from "react-apexcharts";
import Chart from 'chart.js';

const DashboardAnalysis = () => {
  const [chartOptions] = useState({
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July' ],
      datasets: [
        {
          label: 'Savings',
          data: [40000, 644500, 30000, 50000, 35000, 15000, 50000],
          backgroundColor: "#fa90a2",
          borderColor: '#fa90a2',
          fill: false
        },
        {
          label: 'Investment',
          data: [25000, 30000, 450000, 32000, 45000, 520000, 1000000],
          backgroundColor: '#cf67f4',
          borderColor: '#cf67f4',
          fill: false
        },
      ]
    },
    options: {
      responsive: true,
      title: {
        display: false,
        text: 'Title'
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        x: {
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Month'
          }
        },
        y: {
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Value'
          }
        }
      }
    }
  });
  const canvasEl = useRef(null);

  useEffect(() => {
    if (canvasEl.current instanceof HTMLCanvasElement) {
      new Chart(canvasEl.current, chartOptions);
    }
    return () => {
    }
  }, [canvasEl, Chart, chartOptions])

  return (
    <div className="flex flex-col card w-full">
      <h1 className="text-4xl mb-4 font-medium card-header">Analytics</h1>
      <div className="flex-grow flex justify-center items-center px-20">
        {/* <EmptyCard
          title="Nothing to see here yet."
          message="Find any of your savings plan to and see you your transactions history here."
        /> */}
        <canvas ref={canvasEl} />
        {/*
        <can<ReactApexChart*/}
        {/*    className="gggggg"*/}
        {/*  options={state.options}*/}
        {/*  series={state.series}*/}
        {/*  type="area"*/}
        {/*  // height={300}*/}
        {/*  // width={780}*/}
        {/*/>*/}
        {/* <ReactApexChart
          className="gggggg"
          options={state.options}
          series={state.series}
          type="area"
          height={300}
          width={780}
        /> */}
      </div>
    </div>
  );
};

export default DashboardAnalysis;

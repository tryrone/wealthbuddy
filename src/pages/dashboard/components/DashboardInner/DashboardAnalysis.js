import React, { useState } from "react";
import EmptyCard from "./EmptyCard";
import ReactApexChart from "react-apexcharts";

const DashboardAnalysis = () => {
  const [state] = useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    colors: ["#ef878e", "#3986ee"],
    options: {
      chart: {
        height: "100%",
        width: "100%",
        type: "area",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ef878e", "#3986ee"],
        width: 2,
      },
      markers: {
        colors: ["#ef878e", "#3986ee"],
      },
      fill: {
        colors: ["#d9e8fC", "#ffffff"],
      },
      legend: {
        labels: {
          colors: ["#ef878e", "#3986ee"],
          // useSeriesColors: true
        },
        markers: {
          fillColors: ["#ef878e", "#3986ee"],
          // useSeriesColors: true
        },
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div className="flex flex-col card w-full">
      <h1 className="text-4xl mb-6 font-medium card-header">Analytics</h1>
      <div className="flex-grow flex justify-center items-center">
        <EmptyCard
          title="Nothing to see here yet."
          message="Find any of your savings plan to and see you your transactions history here."
        />
        {/*<ReactApexChart*/}
        {/*    className="gggggg"*/}
        {/*  options={state.options}*/}
        {/*  series={state.series}*/}
        {/*  type="area"*/}
        {/*  // height={300}*/}
        {/*  // width={780}*/}
        {/*/>*/}
      </div>
    </div>
  );
};

export default DashboardAnalysis;

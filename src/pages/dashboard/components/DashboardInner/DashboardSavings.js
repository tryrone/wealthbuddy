import React, { useRef, useEffect, useState } from "react";
import EmptyCard from "./EmptyCard";
import Chart from 'chart.js';


const DashboardSavings = () => {
  const canvasEl = useRef(null);
  const [ chartOptions, setChartOptions ] = useState({
    type: 'pie',
    data: {
      datasets: [{ data: [100,0], backgroundColor: [ "#90e5f6", "#c389fa"] }],
      labels: ['Inflow', 'Outflow']
    },
    options: {
      legend: {
        display: false
      }
    }
  });
  useEffect(() => {
    if (canvasEl.current instanceof HTMLCanvasElement) {
      new Chart(canvasEl.current, chartOptions);
    }
    return () => {}
  }, []);

  return (<div className="flex flex-col card">
    <h1 className="text-4xl mb-3 font-medium card-header">INFLOW-OUTFLOW</h1>
    <div className="flex-grow flex justify-center items-center">
      <canvas ref={canvasEl} height="50px" width="90px" />
      {/* <EmptyCard
        title="Nothing to see here yet."
        message="Find any of your savings plan to and see you your transactions history here."
      /> */}
    </div>
  </div>)
};

export default DashboardSavings;

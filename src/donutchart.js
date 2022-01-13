import React, { Component, useState } from 'react';
import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';
import './Donut.css';

const DonutChart = () => {
  const [series, setseries] = useState([44, 55, 41, 17, 15]);
  const [options, setoptions] = useState({
    chart: {
      type: 'donut',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 100,
            type: 'donut',
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  });

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="donut" />
      <p> hi avcjsck</p>
      <ReactApexChart options={options} series={series} type="line" />
    </div>
  );
};

export default DonutChart;

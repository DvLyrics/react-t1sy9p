import React, { Component, useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';
import './data.json';
import axios from axios;

const CallApi = () => {
  const [options, setoptions] = useState();
  const [series, setseries] = useState();
  useEffect(() => {
    axios
      .get('./data.json')
      .then((response) => {
               console.log('response', response);

      })
      
  }, []);


  useEffect(() => {}, []);

  return (
    <>
      <p> Calling Api from json data file </p>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={350}
        />
      </div>
    </>
  );
};

export default CallApi;

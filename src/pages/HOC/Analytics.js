import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import "./Analytics.css";

const Analytics = () => {
  //bar,line,area,radar,histogram,scatter,heatmap
  useEffect(() => {
    var data = generateDayWiseTimeSeries(
      new Date("22 Apr 2017").getTime(),
      115,
      {
        min: 30,
        max: 90,
      }
    );
    //    The first chart is an area chart with a gradient fill. It shows the daily values over time.
    //    Horizontal_axis - displays the date,
    //    Vertical_axis - displays the value.
    var options1 = {
      chart: {
        id: "chart2",
        type: "area",
        height: 230,
        width: "50%",
        foreColor: "#ccc",
        toolbar: {
          autoSelected: "pan",
          show: false,
        },
      },
      colors: ["#00BAEC"],
      stroke: {
        width: 3,
      },
      grid: {
        borderColor: "#555",
        clipMarkers: false,
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        gradient: {
          enabled: true,
          opacityFrom: 0.55,
          opacityTo: 0,
        },
      },
      markers: {
        size: 5,
        colors: ["#000524"],
        strokeColor: "#00BAEC",
        strokeWidth: 3,
      },
      series: [
        {
          data: data,
        },
      ],
      tooltip: {
        theme: "dark",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        min: 0,
        tickAmount: 4,
      },
    };
    var chart1 = new ApexCharts(
      document.querySelector("#chart-area"),
      options1
    );

    chart1.render();

    // The second chart is a bar chart that is linked to the first chart.
    // It shows the values within a specific date range that can be selected by dragging the mouse over the first chart.
    // The chart has a horizontal axis that displays the date, and a vertical axis that displays the value.

    var options2 = {
      chart: {
        id: "chart1",
        height: 130,
        width: "50%",
        type: "bar",
        foreColor: "#ccc",
        brush: {
          target: "chart2",
          enabled: true,
        },
        selection: {
          enabled: true,
          fill: {
            color: "#fff",
            opacity: 0.4,
          },
          xaxis: {
            min: new Date("27 Jul 2017 10:00:00").getTime(),
            max: new Date("14 Aug 2017 10:00:00").getTime(),
          },
        },
      },
      colors: ["#FF0080"],
      series: [
        {
          data: data,
        },
      ],
      stroke: {
        width: 2,
      },
      grid: {
        borderColor: "#444",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        tickAmount: 2,
      },
    };

    var chart2 = new ApexCharts(document.querySelector("#chart-bar"), options2);

    chart2.render();

    //////////////////////////////////////////////////////////////////
    var data3 = generateDayWiseTimeSeries(
      new Date("22 Apr 2017").getTime(),
      115,
      {
        min: 20,
        max: 80,
      }
    );

    var options3 = {
      chart: {
        id: "chart3",
        type: "line",
        height: 230,
        foreColor: "#ccc",
        toolbar: {
          autoSelected: "pan",
          show: false,
        },
      },
      colors: ["#2196F3"],
      stroke: {
        width: 3,
      },
      grid: {
        borderColor: "#555",
        clipMarkers: false,
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 5,
        colors: ["#000524"],
        strokeColor: "#2196F3",
        strokeWidth: 3,
      },
      series: [
        {
          data: data3,
        },
      ],
      tooltip: {
        theme: "dark",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        min: 0,
        tickAmount: 4,
      },
    };

    var chart3 = new ApexCharts(
      document.querySelector("#chart-line"),
      options3
    );

    chart3.render();
  }, []);

  function generateDayWiseTimeSeries(baseval, count, yrange) {
    // baseval -  a timestamp representing the start date of the time series
    // count - the number of data points to be generated
    // yrange - an object containing the minimum and maximum values for the y-axis.
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

  return (
    <div>
      <div id="chart-area"></div>
      <div id="chart-bar"></div>
      <div id="chart-line"></div>
    </div>
  );
};

export default Analytics;

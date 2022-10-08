const chart1 = document.getElementById("chart1").getContext("2d");
const chart2 = document.getElementById("chart2").getContext("2d");
const chart3 = document.getElementById("chart3").getContext("2d");
const chart4 = document.getElementById("chart4").getContext("2d");
const chart5 = document.getElementById("chart5").getContext("2d");

const tempChart = new Chart(chart1, {
  type: "line", // bar,horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: [7.8, 7.9, 7.1, 7.11, 7.12, 7.13],
    datasets: [
      {
        data: [12, 25, 26, 12, 27, 18],
        fill: true,
        backgroundColor: "#8a16f060",
        borderColor: "#8a16f0",
        tension: 0.4,
      },
    ],
  },
  options: line_options,
});

const humidChart = new Chart(chart2, {
  type: "line", // bar,horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: [7.8, 7.9, 7.1, 7.11, 7.12, 7.13],
    datasets: [
      {
        data: [12, 25, 26, 12, 27, 18],
        fill: true,
        backgroundColor: "#8a16f060",
        borderColor: "#8a16f0",
        tension: 0.4,
      },
    ],
  },
  options: line_options,
});

const lightChart = new Chart(chart3, {
  type: "line", // bar,horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: [7.8, 7.9, 7.1, 7.11, 7.12, 7.13],
    datasets: [
      {
        data: [12, 25, 26, 12, 27, 18],
        fill: true,
        backgroundColor: "#8a16f060",
        borderColor: "#8a16f0",
        tension: 0.4,
      },
    ],
  },
  options: line_options,
});

const CO2Chart = new Chart(chart4, {
  type: "line", // bar,horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: [7.8, 7.9, 7.1, 7.11, 7.12, 7.13],
    datasets: [
      {
        data: [12, 25, 26, 12, 27, 18],
        fill: true,
        backgroundColor: "#8a16f060",
        borderColor: "#8a16f0",
        tension: 0.4,
      },
    ],
  },
  options: line_options,
});

doughnut_options.plugins.title.text = "";
const submitChart = new Chart(chart5, {
  type: "polarArea", // bar,horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ["平均温度", "平均湿度", "平均光照强度", "平均CO2浓度"],
    datasets: [
      {
        data: [12, 16, 13, 18],
        backgroundColor: ["rgba(255, 99, 132)", "rgba(54, 162, 235)", "rgba(255, 206, 86)", "rgba(75, 192, 192)"],
      },
    ],
  },
  plugins: [ChartDataLabels],
  options: doughnut_options,
});

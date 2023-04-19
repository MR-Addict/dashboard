const chart1 = document.getElementById("chart1").getContext("2d");
const chart2 = document.getElementById("chart2").getContext("2d");
const chart3 = document.getElementById("chart3").getContext("2d");
const chart4 = document.getElementById("chart4").getContext("2d");
const chart5 = document.getElementById("chart5").getContext("2d");

function getRecentDaysArray(days_length) {
  var array = [];
  for (
    dt = new Date(new Date().setDate(new Date().getDate() - days_length + 1));
    dt <= new Date();
    dt.setDate(dt.getDate() + 1)
  ) {
    const temp_date = dt.toISOString().slice(5, 10);
    array.push(Number(temp_date.split("-")[0]) + "-" + Number(temp_date.split("-")[1]));
  }
  return array;
}

const recent_days = getRecentDaysArray(7);

const tempChart = new Chart(chart1, {
  type: "line", // bar,horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: recent_days,
    datasets: [
      {
        data: [16, 22, 19, 23, 20, 18, 20],
        fill: true,
        backgroundColor: "#8a16f060",
        borderColor: "#8a16f0",
        tension: 0.4,
      },
    ],
  },
  plugins: [ChartDataLabels],
  options: line_options,
});

const humidChart = new Chart(chart2, {
  type: "line", // bar,horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: recent_days,
    datasets: [
      {
        data: [18, 22, 23, 19, 20, 18, 21],
        fill: true,
        backgroundColor: "#8a16f060",
        borderColor: "#8a16f0",
        tension: 0.4,
      },
    ],
  },
  plugins: [ChartDataLabels],
  options: line_options,
});

const lightChart = new Chart(chart3, {
  type: "line", // bar,horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: recent_days,
    datasets: [
      {
        data: [22, 17, 18, 23, 20, 18, 16],
        fill: true,
        backgroundColor: "#8a16f060",
        borderColor: "#8a16f0",
        tension: 0.4,
      },
    ],
  },
  plugins: [ChartDataLabels],
  options: line_options,
});

const CO2Chart = new Chart(chart4, {
  type: "line", // bar,horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: recent_days,
    datasets: [
      {
        data: [18, 24, 20, 19, 23, 18, 23],
        fill: true,
        backgroundColor: "#8a16f060",
        borderColor: "#8a16f0",
        tension: 0.4,
      },
    ],
  },
  plugins: [ChartDataLabels],
  options: line_options,
});

doughnut_options.plugins.title.text = "";
const submitChart = new Chart(chart5, {
  type: "polarArea", // bar,horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ["花卉一", "花卉二", "花卉三", "花卉四", "花卉五", "花卉六"],
    datasets: [
      {
        data: [89, 78, 85, 86, 80, 76],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
        ],
      },
    ],
  },
  plugins: [ChartDataLabels],
  options: doughnut_options,
});

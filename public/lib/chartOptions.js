const doughnut_options = {
  maintainAspectRatio: false,
  responsive: false,
  plugins: {
    tooltip: {
      enabled: true,
    },
    title: {
      display: false,
      text: "",
      position: "bottom",
      font: {
        size: 16,
      },
    },
    legend: {
      display: true,
      position: "top",
    },
    datalabels: {
      anchor: "center",
      align: "center",
      color: "#000",
      formatter: (value, context) => {
        const dataPoints = context.dataset.data;
        const sum = parseInt(dataPoints.reduce((prop, a) => prop + a, 0));
        if (sum) return `${value}分`;
        else return "error";
      },
      labels: {
        title: {
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
  },
};

const line_options = {
  maintainAspectRatio: false,
  responsive: false,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    tooltip: {
      enabled: true,
    },
    title: {
      display: false,
      text: "",
      position: "bottom",
      font: {
        size: 16,
      },
    },
    legend: {
      display: false,
      position: "top",
    },
    datalabels: {
      anchor: "end",
      align: "start",
      color: "#555",
      formatter: (value, context) => {
        return `${value}`;
      },
      labels: {
        title: {
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
  },
};

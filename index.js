function getDate() {
  const date = new Date();

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  var currentDate = `${year}-${month}-${day}`;

  document.querySelector("input[type=date]").value = currentDate;
}

window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "",
    },
    data: [
      {
        type: "pie",
        startAngle: 240,
        yValueFormatString: '##0.00"PLN"',
        indexLabel: "{label} {y}",
        dataPoints: [
          { y: 50.45, label: "Food" },
          { y: 100.31, label: "House" },
          { y: 150.06, label: "Transport" },
          { y: 50.91, label: "Clothing" },
          { y: 10.26, label: "Hygiene" },
        ],
      },
    ],
  });
  chart.render();
};

getDate();

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

document.getElementById("currentMonth").addEventListener("click", function () {
  document.getElementById("changePeriod").innerHTML = "current month";
});

document.getElementById("previousMonth").addEventListener("click", function () {
  document.getElementById("changePeriod").innerHTML = "previous month";
});

document.getElementById("currentYear").addEventListener("click", function () {
  document.getElementById("changePeriod").innerHTML = "current year";
});

document.getElementById("customPeriod").addEventListener("click", function () {
  document.getElementById("changePeriod").innerHTML = "custom period";
});

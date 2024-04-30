function getDate() {
  const date = new Date();

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  var currentDate = `${year}-${month}-${day}`;
  console.log(currentDate);

  document.querySelector("input[type=date]").value = currentDate;
}

window.onload = getDate;

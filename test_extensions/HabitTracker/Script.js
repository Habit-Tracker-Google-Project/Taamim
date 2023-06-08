// Data pulling ----------------------------------------------------

let urls = [];
let times = [];

Object.entries(localStorage).forEach(([key, item]) => {
  if (key != "list"){ // get every key : value pair except for the to-do list
    urls.push(key);
    times.push(item);
  }
})


console.log(urls);
console.log(times);

// 1st chart -------------------------------------------------------------------------

// attributes and data of the bar chart 
let data = {
  labels: ['Youtube','github','Google Docs','etc'], // array of website names (this is placeholder array)
  datasets: [{
    label: 'Most Time Spent on These Tabs (sec)', // title of the chart
    data: [91294, 50000, 29294, 22222], // array of times (this is a placeholder array)
    backgroundColor: [
      'rgba(54, 162, 235, 0.2)',
    ],
    borderColor: [
      'rgba(54, 162, 235, 1)',
    ],
    borderWidth: 1
  }]
};

// config 
const config1 = {
  type: 'bar',
  data,
  options: {
    scales: { // puts measurements on the side aka the scale of the x and y axis
      y: {
        beginAtZero: true
      }
    }
  }
};

// render init block
const barChart = new Chart(
  document.getElementById('barChart'),
  config1
);

// 2nd chart -------------------------------------------------------------------------

// attributes and data of the pie chart
data = {
  labels: ['Work','Other'],
  datasets: [{
    label: 'Chrome Activity',
    data: [0.4, 0.6],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
    ],
    borderColor: [
      'rgba(255, 26, 104, 1)',
      'rgba(54, 162, 235, 1)',
    ],
    borderWidth: 1
  }]
};

// config 
const config2 = {
  type: 'pie',
  data,
  options: {  
  }
};

// render init block
const polarChart = new Chart(
  document.getElementById('polarChart'),
  config2
);

// 3nd chart -------------------------------------------------------------------------

// attributes and data of the pie chart
data = {
  labels: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  datasets: [{
    label: 'Awesomeness',
    data: [0.2, 0.6, 0.1, 0.1, 0.2, 0.6, 0.1, 0.1, 0.2, 0.6, 0.1, 0.1],
    borderColor: [
      'rgba(255, 26, 104, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(255, 26, 104, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(255, 26, 104, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
    ],
    borderWidth: 1
  }]
};

// config 
const config3 = {
  type: 'line',
  data,
  options: {  
  }
};

// render init block
const lineChart = new Chart(
  document.getElementById('lineChart'),
  config3
);
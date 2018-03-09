'use strict';
//clears the localStorage
//localStorage.clear();
var context = document.getElementById('itemsPicked').getContext('2d');

var itemObjects = JSON.parse(localStorage.itemObjects);

function itemObjectsClicks(items){
  var itemClicks = [];

  for (var i = 0; i < items.length; i++) {
    itemClicks.push(items[i].timesClicked);
  }
  console.log('all item clicks ' + itemClicks);
  return itemClicks;
}

function itemObjectsNames(items){
  var itemNames = [];
  for (var i = 0; i < items.length; i++) {
    itemNames.push(items[i].imgName);
  }
  console.log('all item names ' + itemNames);
  return itemNames;
}

function itemObjectsViewed(items){
  var itemViewed = [];
  for (var i = 0; i < items.length; i++) {
    itemViewed.push(items[i].timesViewed);
  }
  console.log('times item was viewed ' + itemViewed);
  return itemViewed;
}

function itemObjectsPerc(items){
  var itemPerc = [];
  for (var i = 0; i < items.length; i++) {
    itemPerc.push(items[i].perc);
  }
  console.log('percentage clicked ' + itemPerc);
  return itemPerc;
}

var viewedData = itemObjectsViewed(itemObjects);
var clickData = itemObjectsClicks(itemObjects);
var nameData = itemObjectsNames(itemObjects);
var percData = itemObjectsPerc(itemObjects);
console.log(percData);
var data = [13,2,90,67,4,34,1,0,56,45,72,98,29,57,83,8, 87, 59, 93, 55];
var labelColors = ['tan', 'blue', 'teal', 'red', 'orange', 'darkolivegreen', 'goldenrod', 'tomato', 'green', 'salmon', 'black', 'yellowgreen', 'olivedrab', 'chartreuse', 'orange', 'indigo', 'yellow', 'chocolate', 'crimson', 'brown',];

var chartData = {
  type: 'bar',
  data: {
    labels: nameData,
    datasets: [{
      label: 'Items Selected',
      data: clickData,
      backgroundColor: labelColors
    },{
      label: 'Items Viewed',
      data: viewedData,
      backgroundColor: labelColors
    }],
  },

  options: {
    scales: {
      yAxes:[{
        ticks: {
          beginAtZero: true,
          maintainAspectRatio: false,
        }
      }]
    }
  }
};

var myChart = new Chart(context, chartData);

//chart 2
var context = document.getElementById('mostPicked').getContext('2d');

var chartDataTwo = {
  type: 'polarArea',
  data: {
    labels: nameData,
    datasets: [{
      label: 'Most Selected',
      data: percData,
      backgroundColor: labelColors
    }],
  },

  options: {
    scales: {
      yAxes:[{
        ticks: {
          beginAtZero: true,
          maintainAspectRatio: false,
        }
      }]
    }
  }
};

//chartData.options.scales.yAxes[0].ticks.beginAtZero = true;
var myChartTwo = new Chart(context, chartDataTwo);

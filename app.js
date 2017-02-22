'use strict';

//variables
var imageNameArray = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogDuck', 'dragon', 'pen', 'petSweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'waterCan', 'wineGlass'];
var chances = 24;
var itemObjects = [];
var clickCounter = -1;
var randNum1 = 0;
var randNum2 = 0;
var randNum3 = 0;
var first = 0;
var second = 0;
var third = 0;
var perc = [];
 //constructor
function addItem(imgName,idNumber) {
  this.imgName = imgName;
  this.idNumber = idNumber;
  this.filePath = 'assets/' + imgName + '.jpg';
  this.imgHTMLtag = '<img src="img/' + imgName + '.jpg">';
  this.timesClicked = 0;
  this.timesViewed = 0;
  this.perc = perc;
  itemObjects.push(this);

}

//start clicking
function start() {

  // var button = document.getElementById('startButton');
  // button.addEventListener('click',hideshow,false);
  // function hideshow() {
  //   document.getElementById('startButton').style.display = 'block';
  //   this.style.display = 'none';
  // }
  startButton.className = 'hidden';
  //var intro = document.getElementById('intro');
  intro.className = 'hidden';
  var runningCounter = document.getElementById('runningCounter');
  runningCounter.className = 'active';

  return genNewItems();
}

//create startButton
var startButton = document.getElementById('startButton');
startButton.addEventListener('click', start);

//random number
function getRandNum(min, max) {

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//creating item objects
for(var i = 0; i < imageNameArray.length; i++) {
  var newImage = imageNameArray[i];
  newImage = new addItem(newImage,i);
}

//get three random non matching numbers
function threeNonMatching(){
  first = getRandNum(0,(itemObjects.length - 1));
  while (first === randNum1 || first === randNum2 || first === randNum3) {
    first = getRandNum(0,(itemObjects.length - 1));
  }
  second = getRandNum(0,(itemObjects.length - 1));
  while(first === second || second === randNum1 || second === randNum2 || second === randNum3) {
    second = getRandNum(0,(itemObjects.length - 1));
  }
  third = getRandNum(0,(itemObjects.length - 1));
  while(third === second || third === first || third === randNum1 || third === randNum2 || third === randNum3) {
    third = getRandNum(0,(itemObjects.length - 1));
  }
  randNum1 = first;
  randNum2 = second;
  randNum3 = third;
}

//show three new items
function genNewItems() {

  //get three unique numbers
  threeNonMatching();

  //select div to place items
  var divEl = document.getElementById('itemSpace');

//creat img tags
  var imgEl = document.createElement('img');
  imgEl.setAttribute('src', itemObjects[first].filePath);
  imgEl.id = 'firstItemImg';
  itemObjects[first].timesViewed++;
  divEl.appendChild(imgEl);

  var imgEl = document.createElement('img');
  imgEl.setAttribute('src', itemObjects[second].filePath);
  imgEl.id = 'secondItemImg';
  itemObjects[second].timesViewed++;
  divEl.appendChild(imgEl);

  var imgEl = document.createElement('img');
  imgEl.setAttribute('src', itemObjects[third].filePath);
  imgEl.id = 'thirdItemImg';
  itemObjects[third].timesViewed++;
  divEl.appendChild(imgEl);

  clickCounter ++;
  var clickCounterEl = document.getElementById('runningTotal');
  clickCounterEl.textContent = clickCounter;

// //variables for charts
//   var labelNameChartOne = [];
//   var dataChartOne = [];
//   var labelNameChartTwo = [];
//   var dataChartTwo = [];

  if(clickCounter > chances) {
    itemSpace.removeEventListener('click', showMorePhotos);

    var tbEl = document.getElementById('tableResults');
    divEl.className = 'hidden';
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = 'Image Name';
    trEl.appendChild(thEl);

    var thEl = document.createElement('th');
    thEl.textContent = 'Times Viewed';
    trEl.appendChild(thEl);
    var thEl = document.createElement('th');
    thEl.textContent = 'Times Clicked';
    trEl.appendChild(thEl);

    var thEl = document.createElement('th');
    thEl.textContent = 'Click Thru Rate';
    trEl.appendChild(thEl);
    tbEl.appendChild(trEl);

    for(var ii = 0; ii < itemObjects.length; ii++){
      var trEl = document.createElement('tr');
      var tdEl = document.createElement('td');

      //dataChartOne.push(itemObjects[ii].timesClicked);
      tdEl.textContent = itemObjects[ii].imgName;
      //labelNameChartOne.push(itemObjects[ii].imgName);
      //labelNameChartTwo.push(itemObjects[ii].imgName);
      trEl.appendChild(tdEl);

      var tdEl = document.createElement('td');
      tdEl.textContent = itemObjects[ii].timesViewed;
      trEl.appendChild(tdEl);

      var tdEl = document.createElement('td');
      tdEl.textContent = itemObjects[ii].timesClicked;
      trEl.appendChild(tdEl);

      var tdEl = document.createElement('td');
      itemObjects[ii].perc = Math.floor(((itemObjects[ii].timesClicked / itemObjects[ii].timesViewed) * 100));

      tdEl.textContent = itemObjects[ii].perc;
      //dataChartTwo.push(perc);
      trEl.appendChild(tdEl);
      tbEl.appendChild(trEl);

      // console.log(dataChartTwo);
    }
    seecharts.className = '';
    // //charts
    // var context = document.getElementById('itemsPicked').getContext('2d');
    //
    // var labelColors = ['tan', 'blue', 'teal', 'red', 'orange', 'darkolivegreen', 'Beige ', 'tomato', 'green', 'salmon', 'black', 'yellowgreen', 'teal', 'red', 'orange', 'indigo', 'yellow', 'chocolate', 'crimson', 'brown',];
    //
    // var chartData = {
    //   type: 'bar',
    //   data: {
    //     labels: labelNameChartOne,
    //     datasets: [{
    //       label: 'Items Selected',
    //       data: dataChartOne,
    //       backgroundColor: labelColors
    //     }],
    //   },
    //
    //   options: {
    //     scales: {
    //       yAxes:[{
    //         ticks: {
    //           beginAtZero: true,
    //           maintainAspectRatio: false,
    //         }
    //       }]
    //     }
    //   }
    // };
    //
    // var myChart = new Chart(context, chartData);
    // document.getElementById('chartOne', 'chartTwo');
    // chartOne.className = 'show';
    // chartTwo.className = 'show';
    //
    // //chart 2
    // var context = document.getElementById('mostPicked').getContext('2d');
    //
    // var chartDataTwo = {
    //   type: 'polarArea',
    //   data: {
    //     labels: labelNameChartTwo,
    //     datasets: [{
    //       label: 'Most Selected',
    //       data: dataChartTwo,
    //       backgroundColor: labelColors
    //     }],
    //   },
    //
    //   options: {
    //     scales: {
    //       yAxes:[{
    //         ticks: {
    //           beginAtZero: true,
    //           maintainAspectRatio: false,
    //         }
    //       }]
    //     }
    //   }
    // };
    //
    // //chartData.options.scales.yAxes[0].ticks.beginAtZero = true;
    // var myChartTwo = new Chart(context, chartDataTwo);
    saveToLocalStorage(itemObjects);
  }
}

//checking items to show new ones
function checkPhoto(arrayObj) {
  arrayObj.timesClicked++;

  var divEl = document.getElementById('itemSpace');
  divEl.innerHTML = '';
  genNewItems();
};

//show three new items
function showMorePhotos(event) {
  if (event.target.id === 'firstItemImg') {
    checkPhoto(itemObjects[first]);
  }
  if (event.target.id === 'secondItemImg') {
    checkPhoto(itemObjects[second]);
  }
  if (event.target.id === 'thirdItemImg') {
    checkPhoto(itemObjects[third]);
  }
};

function saveToLocalStorage(itemObjects){
  localStorage.itemObjects = JSON.stringify(itemObjects);
  console.log('Saved to localStorage');
}
//waiting untill click on item
itemSpace.addEventListener('click', showMorePhotos);

//product constructor
  //% of times item was clicked when shown
    //number times shown
    //number of times clicked
//arrays to hold items
//function to display items
    //no duplicate items
    //new set of items
//function to gen random number
//track click counts limit to 25
  //done displaying items
//show results

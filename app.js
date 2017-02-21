'use strict';
//
//
//
// var toalItems = [];
//
// // function constructItem(){
// //   for (var i = 0; i < allItems.length; i++) {
// //     this.name = allItems[i];
// //   }
// // }
// var bag = new ItemObject('assets/bag.jpg', 0, 0);
// var bannana = new ItemObject('assets/bannana.jpg', 0, 0);
// var bathroom = new ItemObject('assets/bathroom.jpg', 0, 0);
// var boots = new ItemObject('assets/boots.jpg', 0, 0);
// var breakfast = new ItemObject('assets/breakfast.jpg', 0, 0);
// var bubbleGum = new ItemObject('assets/bubbleGum.jpg', 0, 0);
// var chair = new ItemObject('assets/chair.jpg', 0, 0);
// var cthulhu = new ItemObject('assets/cthulhu.jpg', 0, 0);
// var dogDuck = new ItemObject('assets/dog-duck.jpg', 0, 0);
// var dragon = new ItemObject('assets/dragon.jpg', 0, 0);
// var pen = new ItemObject('assets/pen.jpg', 0, 0);
// var petSweep = new ItemObject('assets/pet-sweep.jpg', 0, 0);
// var scissors = new ItemObject('assets/scissors.jpg', 0, 0);
// var shark = new ItemObject('assets/shark.jpg', 0, 0);
// var sweep = new ItemObject('assets/sweep.jpg', 0, 0);
// var tauntaun = new ItemObject('assets/tauntaun.jpg', 0, 0);
// var unicorn = new ItemObject('assets/unicorn.jpg', 0, 0);
// var usb = new ItemObject('assets/usb.jpg', 0, 0);
// var waterCan = new ItemObject('assets/water-can.jpg', 0, 0);
// var wineGlass = new ItemObject('assets/wine-glass.jpg', 0, 0);
//
// var allItems = [bag, bannana, bathroom, boots, breakfast, bubbleGum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];
//
// var imgEl = document.getElementsByClassName('items');
// var itemOneEl = document.createElement('img');
// var itemTwo = document.createElement('img');
// var itemThree = document.createElement('img');
//
// function ItemObject(fileName, displayed, clicked) {
//   this.fileName = fileName;
//   this.displayed = displayed;
//   this.clicked = clicked;
//   this.justDisplayed = 0;
//   //add arrays?
// }
//
// ItemObject.prototype.usrClicked = function(){
//   this.clicked += clicked;
// };
//
// ItemObject.prototype.usrViewed = function(){
//   this.displayed += displayed;
// };
//
// itemOneEl.getE('src', 'assets/bag.jpg');
// imgEl.appendChild(itemOneEl);
// console.log('itemOneEl' + imgEl);

// function showItems(){
//   var numItemsToShow = 3;
//
//   for (var i = 0; i <= numItemsToShow; i++) {
//   //   for (var ii = 0; ii < allItems.length; ii++) {
//   //     if(allItems.)
//   //   }
//     console.log('the item is' + this.fileName[i]);
//     itemOneEl.texContent = this.fileName[i];
//     imgEl.appendChild(itemOneEl);
//   }
// }
// variables
// var itemsToShow = 3;
// var totalClicks = 0;
// var clickLimit = 25;
// // arrays
// var justDisplayed = [];
// var count = [];
// var allItems = [];
//
// var pics = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
//
// // functions
// function randNum(){
//   return (1 + Math.floor(Math.random() * pics.length));
// }
//
// function threeNonMatching(){
//   var left = randNum();
//   var center = randNum();
//   var right = randNum();
//
//   while (justDisplayed.includes(left)) {
//     left = randNum();
//   }
//   while (center === left || justDisplayed.includes(center)) {
//     center = randNum();
//   }
//   while (right === left || right === center || justDisplayed.includes(right)) {
//     right = randNum();
//   }
// }
//
// function showItems() {
//   for (var i = 0; i < itemsToShow; i++) {
//     pics[i] = (1 + Math.floor(Math.random() * pics.length));
//     //while second and third random numbers do not match
//     for (var j = 0; j < justDisplayed.length; j++) {
//       if (pics[i] === justDisplayed[j]) {
//         console.log('pics = justDisplayed');
//         showItems();
//       }// for (var ii = 0; ii < itemsToShow; ii++) {
//
//     }
//     //   console.log(pics[i]);
//     // }
//     console.log('count is ' + pics[i]);
//
//     //console.log('pics is ' + pics);
//   };
//   // for (var i = 0; i < count.length; i++) {
//   //   console.log(pics.count[i]);
//   // }
//   displayItems();
// };
// // for (var i = 0; i < pics.length; i++) {
// //   allItems.push(new addItem(pics[i]));
// //   console.log(allItems);
// // }
//
// // creates images for display function
// function addItem(id, src) {
//   var img = document.createElement('img');
//   img.id = id;
//   img.src = src;
//   img.views = 0;
//   img.clicks = 0;
//   // img.class = 'items-show';
//
//   //img.onmouseup = keepItem;
//   document.getElementById('item').appendChild(img);
//   console.log(img);
//
// };
//
// function displayItems() {
//   for (var i = 0; i < itemsToShow; i++) {
//     if(justDisplayed[i] !== pics[i]){
//       addItem(i + 1, 'assets/' + pics[i] + '.jpg');
//       justDisplayed.push(pics[i]);
//       console.log('justDisplayed' + justDisplayed);
//     } else {
//       showItems();
//     }
//   }
//   justDisplayed = [];
// }

//variables
var imageNameArray = ['bag','banana','bathroom','boots','breakfast','bubblegum', 'chair','cthulhu','dogDuck','dragon','pen','petSweep','scissors','shark','sweep','tauntaun','unicorn','usb','waterCan','wineGlass'];

var itemObjects = [];
var clickCounter = -1;
var randNum1 = 0;
var randNum2 = 0;
var randNum3 = 0;
var i = 0;
var j = 0;
var k = 0;

 //constructor
function addItem(imgName,idNumber) {
  this.imgName = imgName;
  this.idNumber = idNumber;
  this.filePath = 'assets/' + imgName + '.jpg';
  this.imgHTMLtag = '<img src="img/' + imgName + '.jpg">';
  this.timesClicked = 0;
  this.timesViewed = 0;
  itemObjects.push(this);
}

//start clicking
function start() {
  startButton.className = 'hidden';
  var intro = document.getElementById('intro');
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
  i = getRandNum(0,(itemObjects.length - 1));
  while (i === randNum1 || i === randNum2 || i === randNum3) {
    i = getRandNum(0,(itemObjects.length - 1));
  }
  j = getRandNum(0,(itemObjects.length - 1));
  while(i === j || j === randNum1 || j === randNum2 || j === randNum3) {
    j = getRandNum(0,(itemObjects.length - 1));
  }
  k = getRandNum(0,(itemObjects.length - 1));
  while(k === j || k === i || k === randNum1 || k === randNum2 || k === randNum3) {
    k = getRandNum(0,(itemObjects.length - 1));
  }
  randNum1 = i;
  randNum2 = j;
  randNum3 = k;
}

//show three new items
function genNewItems() {
  threeNonMatching();
  var ulEl = document.getElementById('itemSpace');
  var liEl = document.createElement('li');
  liEl.id = 'firstPhotoLi';
  var imgEl = document.createElement('img');
  imgEl.setAttribute('src', itemObjects[i].filePath);
  imgEl.id = 'firstPhotoImg';
  itemObjects[i].timesViewed++;
  liEl.appendChild(imgEl);
  ulEl.appendChild(liEl);

  var liEl = document.createElement('li');
  liEl.id = 'secondPhotoLi';
  var imgEl = document.createElement('img');
  imgEl.setAttribute('src', itemObjects[j].filePath);
  imgEl.id = 'secondPhotoImg';
  itemObjects[j].timesViewed++;
  liEl.appendChild(imgEl);
  ulEl.appendChild(liEl);

  var liEl = document.createElement('li');
  liEl.id = 'thridPhotoLi';
  var imgEl = document.createElement('img');
  imgEl.setAttribute('src', itemObjects[k].filePath);
  imgEl.id = 'thirdPhotoImg';
  itemObjects[k].timesViewed++;
  liEl.appendChild(imgEl);
  ulEl.appendChild(liEl);

  clickCounter ++;
  var clickCounterEl = document.getElementById('runningTotal');
  clickCounterEl.textContent = clickCounter;
  if(clickCounter > 24) {
    itemSpace.removeEventListener('click', showMorePhotos);

    var tbEl = document.getElementById('tableResults');
    ulEl.className = 'hidden';
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

    for(var p = 0; p < itemObjects.length; p++){
      var trEl = document.createElement('tr');
      var tdEl = document.createElement('td');
      tdEl.textContent = itemObjects[p].imgName;
      trEl.appendChild(tdEl);
      var tdEl = document.createElement('td');
      tdEl.textContent = itemObjects[p].timesViewed;
      trEl.appendChild(tdEl);
      var tdEl = document.createElement('td');
      tdEl.textContent = itemObjects[p].timesClicked;
      trEl.appendChild(tdEl);
      var tdEl = document.createElement('td');
      tdEl.textContent = Math.floor(((itemObjects[p].timesClicked / itemObjects[p].timesViewed) * 100)) + '%';
      trEl.appendChild(tdEl);
      tbEl.appendChild(trEl);
    }
  }
}

//checking items to show new ones
function checkPhoto(arrayObj) {
  arrayObj.timesClicked++;
  var ulEl = document.getElementById('itemSpace');
  ulEl.innerHTML = '';
  genNewItems();
};

//show three new items
function showMorePhotos(event) {
  if (event.target.id === 'firstPhotoImg') {
    checkPhoto(itemObjects[i]);
  }
  if (event.target.id === 'secondPhotoImg') {
    checkPhoto(itemObjects[j]);
  }
  if (event.target.id === 'thirdPhotoImg') {
    checkPhoto(itemObjects[k]);
  }
};

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

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
var itemsToShow = 3;

// arrays

var count = [];

var pics = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

// functions

function showItems() {
  for (var i = 0; i < itemsToShow; i++) {
    pics[i] = (1 + Math.floor(Math.random() * 20));
    // for (var ii = 0; ii < itemsToShow; ii++) {
    //   console.log(pics[i]);
    // }
    console.log('count is ' + pics[i]);

    //console.log('pics is ' + pics);
  };
  // for (var i = 0; i < count.length; i++) {
  //   console.log(pics.count[i]);
  // }
  displayItems();
};

// creates images for displayRoll function
function addItem(id, src) {
  var img = document.createElement('img');
  img.id = id;
  img.src = src;
  // img.class = 'items-show';

  //img.onmouseup = keepItem;
  document.getElementById('item').appendChild(img);
  console.log(img);

};

function displayItems() {
  for (var i = 0; i < itemsToShow; i++) {
    addItem(i + 1, 'assets/' + pics[i] + '.jpg');

  }
}

'use strict';



var toalItems = [];

// function constructItem(){
//   for (var i = 0; i < allItems.length; i++) {
//     this.name = allItems[i];
//   }
// }
var bag = new ItemObject('assets/bag.jpg', 0, 0);
var bannana = new ItemObject('assets/bannana.jpg', 0, 0);
var bathroom = new ItemObject('assets/bathroom.jpg', 0, 0);
var boots = new ItemObject('assets/boots.jpg', 0, 0);
var breakfast = new ItemObject('assets/breakfast.jpg', 0, 0);
var bubbleGum = new ItemObject('assets/bubbleGum.jpg', 0, 0);
var chair = new ItemObject('assets/chair.jpg', 0, 0);
var cthulhu = new ItemObject('assets/cthulhu.jpg', 0, 0);
var dogDuck = new ItemObject('assets/dog-duck.jpg', 0, 0);
var dragon = new ItemObject('assets/dragon.jpg', 0, 0);
var pen = new ItemObject('assets/pen.jpg', 0, 0);
var petSweep = new ItemObject('assets/pet-sweep.jpg', 0, 0);
var scissors = new ItemObject('assets/scissors.jpg', 0, 0);
var shark = new ItemObject('assets/shark.jpg', 0, 0);
var sweep = new ItemObject('assets/sweep.jpg', 0, 0);
var tauntaun = new ItemObject('assets/tauntaun.jpg', 0, 0);
var unicorn = new ItemObject('assets/unicorn.jpg', 0, 0);
var usb = new ItemObject('assets/usb.jpg', 0, 0);
var waterCan = new ItemObject('assets/water-can.jpg', 0, 0);
var wineGlass = new ItemObject('assets/wine-glass.jpg', 0, 0);

var allItems = [bag, bannana, bathroom, boots, breakfast, bubbleGum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

function ItemObject(fileName, displayed, clicked ) {
  this.fileName = fileName;
  this.displayed = displayed;
  this.clicked = clicked;
  //add arrays?
}

var player;


var buildings = [];


var clouds = [];


const MIN_BUILDING_HEIGHT = 20;
const MAX_BUILDING_HEIGHT = 50;
const BUILDING_WIDTH  = 15;


const CLOUD_SIZE = 20;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  player = new Plane(window.innerWidth/ 2, 100);

  createLandscape();

}


function createLandscape() {
    buildings.push(new Building(random(window.innerWidth), BUILDING_WIDTH, random(MIN_BUILDING_HEIGHT, MAX_BUILDING_HEIGHT)));
    buildings.push(new Building(random(window.innerWidth), BUILDING_WIDTH, random(MIN_BUILDING_HEIGHT, MAX_BUILDING_HEIGHT)));
    buildings.push(new Building(random(window.innerWidth), BUILDING_WIDTH, random(MIN_BUILDING_HEIGHT, MAX_BUILDING_HEIGHT)));

    clouds.push(new Cloud(200, 200));
    clouds.push(new Cloud(200, 200));
    clouds.push(new Cloud(200, 200));

}



function drawLandscape() {

  for(let i = 0; i < buildings.length; i ++) {
    buildings[i].render();
    buildings[i].update();
  }

  for(let j = 0; j < clouds.length; j ++) {
    clouds[j].render();
    clouds[j].update();
  }

}


function draw() {
  background(35);
  player.render();
  drawLandscape();

}
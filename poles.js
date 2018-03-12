let jumpHeight = 0;
let xPos = 0;
let yPos = 0;

let x = 0;
let y = 0;
let time = 0;
let diameter = 35;
let speed = 0.8;

const accel = 0.00001;

function setup() {
    createCanvas(1024, 480);
}

function draw() {
    background(255, 255, 255);
    let xOrg = 320;
    let yOrg = 240;

    translate(xOrg, yOrg);
    strokeWeight(2);

    setInterval(move(), 1000);
    setInterval(display(), 1000);

    // Pole
    //translate(xOrg, yOrg-240);
    strokeWeight(3);
    line(125, -100, 125, 100);
    line(150, -100, 150, 100);
    line(125, -90, 150, -90);
}


function move() {
  if(x <= 140) {
    x += speed;
    y -= speed;
  } else {
    x += speed;
    y += speed;
  }
  speed += accel;
  //if(x >= 48+240 || x <= 48-240) speed = -speed;
  time = time + 1;
}

function display() {
  ellipse(x, y, diameter, diameter);
}

function calculate() {
    let flex = document.getElementById('flex').value;
    let mass = document.getElementById('mass').value;
    let poleLength = document.getElementById('poleL').value;
    let height = document.getElementById('height').value;
    let angle = document.getElementById('angle').value;

    let angleinDegrees = (angle / 2.0) * Math.PI / 180.0;
    let k = 51 * (1 - flex) + 2327;
    let compress = 0.03279 * (poleLength - 4.265) + 0.3;
    let tmp = Math.pow(compress, 2) * Math.pow(poleLength, 2);

    let a = (k * tmp) / (2.0 * mass * 9.8);
    let b = poleLength * (1 - compress) - (height / 4.0) - 0.2;
    let c = height * Math.cos(angleinDegrees) / 6.0;
    let result = document.getElementById('result');

    result.innerHTML = (a + b + c).toFixed(2) + " meters";
    jumpHeight = (a + b + c).toFixed(2);

}

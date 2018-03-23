let jumpHeight = 0;

let x = 0;
let y = 0;

let diameter = 30;
const RADIUS = diameter/2.0;
let angle = 3.1415926/2;

let time = 0;
let speed = 0.8;
let accel = 0.001;

function setup() {
    createCanvas(1024, 480);
    frameRate(1);
}

function draw() {
    translate(320, 240);
    background(255, 255, 255);

    //move();
    display();

    // Pole
    strokeWeight(3);
    line(125, -100, 125, 100);
    line(150, -100, 150, 100);
    line(125, -90, 150, -90);
    // Pole is at (125, -100), (150, -100).
}

// Move stick man
function move() {
    if (x >= 300) {
        x = 0;
        time = 0;
    }

    x += accel * time * time + speed * time;
    y = (1.0 / 75) * (x - 135) * (x - 135) - 100;

    time = time + 1;
}

// Display stick man
function display() {
    ellipse(x, y, diameter, diameter); // head
    console.log(Math.ceil(RADIUS*Math.sin(angle)));
    line(RADIUS*Math.cos(angle), Math.ceil(RADIUS*Math.sin(angle)), Math.cos(angle), y+75); // body
    //line(x, y+50, x-15, y+10); // left arm
    //line(x, y+50, x+15, y+10); // right arm
    //line(x, y+75, x-10, y+100); // left leg
    //line(x, y+75, x+10, y+100); // right leg
    angle = angle - 3.1415926 / 8;
}

// Calculates potential jump height of pole vaulter.
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

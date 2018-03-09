let jumpHeight = 0;

function setup() {
    createCanvas(1024, 480);
}

function draw() {
    let xOrg = 320;
    let yOrg = 240;
    
    translate(xOrg, yOrg);
    strokeWeight(2);
    // Stick figure
    line(0, 0, 0, 75);
    line(0, 30, 35, 35);
    line(0, 30, -35, 35);
    line(0, 75, 25, 35+75);
    line(0, 75, -25, 35+75);
    ellipse(0, 0, 30, 30);
    
    // Pole
    translate(xOrg, yOrg-240);
    line(0, -100, 0, 100);
    line(50, -100, 50, 100);
    line(0, -90, 50, -90);
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

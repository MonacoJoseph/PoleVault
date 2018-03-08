function setup() {
    createCanvas(640, 480);
}

function draw() {
    // TODO: Draw stick figure and pole
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

}

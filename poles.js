let jumpHeight = 0;
let man;
let xPos = 0;
let yPos = 0;

function setup() {
    createCanvas(1024, 480);
    man = new StickMan();
}

function draw() {
    background(50, 89, 100);
    let xOrg = 320;
    let yOrg = 240;
    
    translate(xOrg, yOrg);
    strokeWeight(2);
    // Stick figure
    //line(xPos, yPos, xPos, yPos+75); // Body
    //line(xPos, yPos+30, xPos+35, yPos+35); // Right Arm
    //line(xPos, yPos+30, xPos-35, yPos+35); // Left Arm
    //line(xPos, yPos+75, xPos+25, yPos+35+75); // Right Leg
    //line(xPos, yPos+75, xPos-25, yPos+35+75); // Left Leg
    //ellipse(xPos, yPos, 30, 30); // Head
    for(let i=0; i < 100; i++) {
        man.move();
        man.display();
    }
    
    xPos = xPos + 1;
    yPos = yPos - 1;
    if(xPos > 75) xPos = 0;
    if(yPos < -200) yPos = 0;
    
    
    // Pole
    translate(xOrg, yOrg-240);
    strokeWeight(3);
    line(0, -100, 0, 100);
    line(50, -100, 50, 100);
    line(0, -90, 50, -90);
}

function StickMan() {
    this.x = 0;
    this.y = 0;
    this.diameter = 35;
    this.speed = 1;
    
    this.move = function() {
        this.x += this.speed;
        this.y -= this.speed;
    };
    
    this.display = function() {
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }; 
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

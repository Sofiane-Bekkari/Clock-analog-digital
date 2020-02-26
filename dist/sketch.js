
function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(150, 200);
  rotate(-90);
  let hur = hour();
  let min = minute();
  let sec = second();

  // Make variable to add 0 to Sec & Min
  let x = '0' + sec;
  let y = '0' + min;

  // Use condition to check if it under 10s
  if (x < 10) {
    sec = x;
    console.log(x);
  }
  // Separet //
  if (y < 10) {
    min = y;
    console.log(y);
  }

  function digitalClock() {
    fill(0);
    stroke(200, 20, 80, 240);
    rotate(90);
    strokeWeight(4);
    textSize(45);
    text(hur + ' : ' + min + ' : ' + sec, 55, 0)
  }
  digitalClock();

  // MAP METHOD
  let secAngle = map(sec, 0, 60, 0, 360);
  let minAngle = map(min, 0, 60, 0, 360);
  let hurAngle = map(hur, 0, 12, 0, 360);
  rotate(-90);
  strokeWeight(4);
  noFill(0)
  stroke(200, 20, 80, 150 + sec);
  arc(0, 100, 390, 390, 0, secAngle)

  push();
  rotate(secAngle);
  fill(200, 150, 100);
  stroke(50, 50, 100, 200);
  line(0, 0, 55, 0);
  pop();

  push();
  rotate(minAngle);
  fill(50, 50, 100);
  stroke(50, 50, 100, 150)
  rect(0, 0, 50, 4);
  pop();

  push();
  rotate(hurAngle);
  fill(50, 50, 100);
  stroke(50, 50, 100, 150)
  rect(0, 0, 40, 5);
  pop();

  point(1, 1)

  // SOME EARLY CODE FOR DESIGN CLOCK //
  // //Min
  // strokeWeight(4)
  // stroke(200)
  // line(150, -secAngle, 200, 150);
  // // SEC
  // noFill()
  // stroke(150, 45, 50)
  // ellipse(200, 150, sec + 0);
  // // NEW ELLIPSE
  // noFill()
  // stroke(150, 45, 150)
  // ellipse(250, 160, 340, 340);
}
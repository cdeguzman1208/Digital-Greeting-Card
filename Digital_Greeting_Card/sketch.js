let circle1X, circle1Y, circle2X, circle2Y, circle3X, circle3Y;
let textColor;

function setup() {
  createCanvas(400, 550);
  textColor = color(255);

  // Initialize circle positions
  circle1X = random(width);
  circle1Y = random(height);
  circle2X = random(width);
  circle2Y = random(height);
  circle3X = random(width);
  circle3Y = random(height);
  circle4X = random(width);
  circle4Y = random(height);

  // Set frame rate for smoother animation
  frameRate(30);
}

function draw() {
  background(255); // Set background to white

  // Animate and display the colorful background gradient
  drawBackground();

  // Animate and draw decorative elements (circles)
  animateDecorations();
  
  // Draw text with animated color
  drawText();
  
  // Draw cake
  drawBirthdayCake(width / 2, height - 50);
}

function drawBackground() {
  // Gradient background from light pink to light purple
  let lightPink = color(255, 204, 255);
  let lightPurple = color(204, 153, 255);
  setGradient(0, 0, width, height, lightPink, lightPurple, "Y_AXIS");
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === "Y_AXIS") {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }
}

function drawText() {
  // Text settings
  textAlign(CENTER);
  textSize(32);
  stroke(0);
  strokeWeight(0.5);

  // Animate text color (oscillate between white and a random color)
  textColor = lerpColor(textColor, color(random(255), random(255), random(255)), 0.15);
  fill(textColor);

  // Greeting message
  text("Happy Anniversary!", width / 2, height / 2 - 50);

  // Subtitle
  textSize(20);
  text("Celebrating 10 Years with POPreKa", width / 2, height / 2 + 20);
}

function animateDecorations() {
  // Update and animate circle positions (simulate bouncing)
  let bounceSpeed = 2;
  circle1X += bounceSpeed * cos(frameCount * 0.05);
  circle1Y += bounceSpeed * sin(frameCount * 0.05);
  circle2X += bounceSpeed * cos(frameCount * 0.04);
  circle2Y += bounceSpeed * sin(frameCount * 0.04);
  circle3X += bounceSpeed * cos(frameCount * 0.03);
  circle3Y += bounceSpeed * sin(frameCount * 0.03);
  circle4X += bounceSpeed * cos(frameCount * 0.02);
  circle4Y += bounceSpeed * sin(frameCount * 0.02);

  // Draw colorful circles with animated positions
  noStroke();
  fill(255, 255, 255, 200); // White
  ellipse(circle1X, circle1Y, 50, 50);
  ellipse(circle2X, circle2Y, 70, 70);
  ellipse(circle3X, circle3Y, 90, 90);
  ellipse(circle4X, circle4Y, 110, 110);

  // Wrap circles around the canvas edges
  circle1X = constrain(circle1X, 0, width);
  circle1Y = constrain(circle1Y, 0, height);
  circle2X = constrain(circle2X, 0, width);
  circle2Y = constrain(circle2Y, 0, height);
  circle3X = constrain(circle3X, 0, width);
  circle3Y = constrain(circle3Y, 0, height);
  circle4X = constrain(circle4X, 0, width);
  circle4Y = constrain(circle4Y, 0, height);
}

function drawBirthdayCake(x, y) {
  // Draw the cake base
  fill(255); // White color for cake base
  rect(x - 150, y - 50, 300, 100); // Cake base (ellipse)

  // Draw the cake icing
  fill(255); // White color for icing
  ellipse(x, y - 50, 300, 40); // Icing on top of cake (ellipse)

  // Draw the candles
  fill(255, 192, 203); // Pink color for candles
  let candleSpacing = 25; // Spacing between candles
  let candleHeight = 50; // Height of candles
  let candleX = x - (candleSpacing * 4.5); // Starting x position for candles

  for (let i = 0; i < 10; i++) {
    rect(candleX - 5, y - 100, 10, candleHeight); // Draw each candle (rectangle)
    candleX += candleSpacing; // Move to the next candle position
  }
  
  // Draw the flames
  fill(255, 222, 0); // Yellow color for flames
  let flameSpacing = 25; // Spacing between flames
  let flameHeight = 20; // Height of flames
  let flameX = x - (flameSpacing * 4.5); // Starting x position for flames

  for (let i = 0; i < 10; i++) {
    ellipse(flameX, y - 113, 10, flameHeight); // Draw each flame (ellipse)
    flameX += flameSpacing; // Move to the next candle position
  }
}
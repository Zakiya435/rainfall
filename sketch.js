var raindrops = [];

function setup() {
  createCanvas(600, 300);
  for (var i = 0; i < 400; i++) {
    raindrops[i] = new Drop();
  }
}

function draw() {
  background(133, 244, 41);
  for (var i = 0; i < raindrops.length; i++) 
  {
    raindrops[i].fall();
    raindrops[i].display();
  }
}
    
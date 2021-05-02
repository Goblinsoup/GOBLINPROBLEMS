
let snowflakes = [];

function snowsetup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
  noStroke();
}

function snowmaker() {
  background(0);
  let t = frameCount / 60; // update time


  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake());
  }


  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}


function snowflake() {

  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);


  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {

    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);


    this.posY += pow(this.size, 0.5);


    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}

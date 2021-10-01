
class Particle {

  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(3,10);
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1.5);
  }

  createParticle() {
    noStroke();
    fill(255);
    ellipse(this.x,this.y,this.r);
  }


  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }


  joinParticles(particles) {
    particles.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis<150) {
        stroke(255,255,255,50);
        line(this.x,this.y,element.x,element.y);
      }
    });
  }
}


let particles = [];

function particlesetup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0;i<width/9;i++){
    particles.push(new Particle());
  }
  background(0);
}

function particlemaker() {
  background(0)

  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }
}

let jits=[];
let jitnum

function jittersetup(){
   jitnum=width/3
  for(i=0;i<jitnum;i++){
    jits[i]=new Jitter();
  }
}

function jitterbugsdance() {
  background(0);
  
  for(j=0;j<jitnum;j++){
    jits[j].move();
    jits[j].display();
  }
}

class Jitter {
  constructor(){
    this.x=random(width);
    this.y=random(height);
    this.diameter=random(10,40);
    this.speed=1;  
  }
  move(){
    //the constrains dont seem to work 
    constrain(this.x, 0, width)
    constrain(this.y, 0, height)
    this.x+=random(-this.speed,this.speed);
    this.y+=random(-this.speed,this.speed);
  }
  
  display() {
    fill(0)
    stroke(255)
    strokeWeight(1)
    ellipse(this.x,this.y,this.diameter,this.diameter);
  }
}
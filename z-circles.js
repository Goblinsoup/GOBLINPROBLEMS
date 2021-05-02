let circles=[]
let circnum
function circlesetup() {
  //createCanvas(windowWidth, windowHeight);
  //background(0);
  
  circnum=width/50
  for(i=0;i<circnum;i++){
    circles[i]=new rings();
  }
  
  
}

function circlemaker() {
  background(0);
  frameRate(50)
  for(j=0;j<circnum;j++){
    circles[j].display();
    circles[j].grow();
  }
}



class rings{
  constructor(){
    this.x=random(width);
    this.y=random(height);
    this.radius=random(1,3)
    this.speed=random(1,10)
  }
  display(){
    stroke(255)
    
    noFill();
    ellipse(this.x,this.y,this.radius);
  }
  grow(){
    this.radius=this.radius+this.speed
    if(this.radius>width && this.radius>height){
      this.x=random(width)
      this.y=random(height)
      this.radius=1
      this.speed=(random(1,10))
    }
  }
}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  }
    
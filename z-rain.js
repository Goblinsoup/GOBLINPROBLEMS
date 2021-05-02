let rain=[];
let num
function rainsetup() {
  createCanvas(windowWidth, windowHeight);
  num=width/3
  for(g=0;g<num;g++){
    rain[g]=new drops();
  }
}

function rainmaker() {
  frameRate(45)
  background(0);
  for(h=0;h<num;h++){
    rain[h].display();
    rain[h].fall();
 
  }
}

class drops{
 constructor(){
  this.x=random(width)
  this.x2=this.x
  this.y=random(height)
  this.y2=this.y-random(10,15)
  this.speed=random(13,19)
  this.fill=random(150,255)
  
 }
 display(){
   stroke(this.fill)
   line(this.x,this.y,this.x2,this.y2)
   }
fall(){
  this.y=this.y+this.speed
  this.y2=this.y2+this.speed
  if(this.y>height+5){
    
    this.y=0-random(50,70)
    this.y2=this.y-random(20,30)
    this.speed=random(10,17)
    this.fill=random(150,255)    
  }
}
 }
let quads=[];
let quadnum=75
function quadsetup() {
  for(i=0;i<quadnum;i++){
    quads[i]=new quadJitter();
  }
  
}

function quadmaker() {
  background(0);
  
  for(j=0;j<quadnum;j++){
    quads[j].move();
    quads[j].display();
  }
}

class quadJitter {
  constructor(){
    
    this.x1=random(-50,width+50);
    this.y1=random(-50,height+50);
    this.x2=random(-50,width+50);
    this.y2=random(-50,height+50);
    this.x3=random(-50,width+50);
    this.y3=random(-50,height+50);    
    this.x4=random(-50,width+50);
    this.y4=random(-50,height+50);
    
    this.speed=0.5;  
  }
  move(){
    this.x1+=random(-this.speed,this.speed);
    this.y1+=random(-this.speed,this.speed);
    this.x2+=random(-this.speed,this.speed);
    this.y2+=random(-this.speed,this.speed);
    this.x3+=random(-this.speed,this.speed);
    this.y3+=random(-this.speed,this.speed);
    this.x4+=random(-this.speed,this.speed);
    this.y4+=random(-this.speed,this.speed);
    
  }
  
  display() {
    fill(0)
    stroke(255)
    strokeWeight(1)
    quad(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3,this.x4,this.y4);
  }
}
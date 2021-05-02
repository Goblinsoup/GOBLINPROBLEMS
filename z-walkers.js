let bugs=[];
let walknum



function walkersetup(){
  background(0)
  walknum=windowWidth/15
for(i=0;i<walknum;i++){
    bugs[i]=new walkers();
  }
}

function walkingsquares(){
  //rectMode(CENTER)
  for(j=0;j<walknum;j++){
    bugs[j].display();
    bugs[j].walk();
  }
  background(0,5);
}

class walkers{
  constructor(){
    this.x=random(width);constrain
    (this.x,0,width)
    this.y=random(height);

   }
  display(){
    fill(0)
    stroke(255)
    strokeWeight(1)
    rect(this.x,this.y,10,10);
  }
  walk(){
    const r = floor(random(4));
  switch (r) {
    case 0:
      this.x = this.x + 10;
      break;
    case 1:
      this.x = this.x - 10;
      break;
    case 2:
      this.y = this.y + 10;
      break;
    case 3:
      this.y = this.y - 10;
      break;
      }

    if(this.x<0){
    this.x=width
    }
    if(this.x>width){
    this.x=0
    }
    if(this.y<0){
    this.y=height
    }
    if(this.y>height){
    this.y=0
    }
  }
}

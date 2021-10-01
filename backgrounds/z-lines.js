let x=[];
let y=[];
let xs,ys;
let j,p;
let a=1




function linersetup() {
   background(0);
  strokeWeight(1);
  stroke(255)
  frameRate(30)
  j=0;
  p=0;
  for (i=0; i<200; i++){
    x[i]=random (-100,windowWidth+100);
    y[i]=random (-100,windowHeight+100);

  }
  xs=5;
  ys=3;

}

function linermaker() {
background(0,10)


  line(x[j],y[j],x[p],y[p]);
  j=j+1;
  if(j>=7){
    j=0
    p=p+1;
  }
  if(p>width/5){
    p=0
  }
}

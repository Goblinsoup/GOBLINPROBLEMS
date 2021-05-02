let b
function setup() {
  createCanvas(windowWidth, windowHeight);
  b=random(10)
  background(0)
  print(b)
  rectMode(CENTER);


walkersetup()

jittersetup();

wavesetup();

rainsetup();

circlesetup();

quadsetup();

particlesetup();

snowsetup();

dotsetup();

flocksetup();


}

function draw() {
  background(0,10);
  fill(255);


if(b<1){
  jitterbugsdance();
}

if(b>1&b<2){
  walkingsquares();

}

if(b>2&b<3){
  wavemaker();
}

if(b>3&b<4){
  rainmaker();
}

if(b>4&b<5){
  circlemaker();
}

if(b>5&b<6){
  quadmaker();
}

if(b>6&b<7){
  particlemaker();
}

if(b>7&b<8){
  snowmaker();
}

if(b>8&b<9){
  dotmaker();
}

if(b>9&b<10){
  flockmaker();
}

}


function windowR() {
  resizeCanvas(windowWidth, windowHeight);

}

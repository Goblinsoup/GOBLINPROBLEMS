let wWave 
let hWave 
let scl = 20;
let cols;
let rows;
let xoff = 0;
let displacement = 0;

function wavesetup(){
  wWave=windowWidth
  hWave=windowHeight
  cols = wWave / scl;
  rows = hWave / scl;
}

function wavemaker() {
  displacement += 0.00009;
  background(0);
	
  xoff = displacement;
  
  for (let y = 0; y <= hWave; y += scl) {
    strokeWeight(1);
    stroke(255);
    noFill();
    
    beginShape();
    vertex(0, y);  

    for (let x = 0; x <= wWave; x += scl) {
    	let noiseScale = map(noise(x * xoff, y), 0, 1, 0, 20)  
			curveVertex(x, y + noiseScale);
    }
    xoff += 0.02;

    vertex(wWave, y);
    endShape();
  }
}
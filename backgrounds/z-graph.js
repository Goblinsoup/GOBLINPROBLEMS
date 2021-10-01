
var cols, rows;
var scl = 50;
var w = 2600;
var h = 850;

var flying = 0;

var terrain;
function graphsetup() {


  createCanvas(windowWidth, windowHeight, WEBGL);
  cols = w / scl;
  rows = h / scl;
  terrain = create2DArray(cols, rows);
}

function graphmaker() {
  flying -= 0.1;

  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
    }
    yoff += 0.2;
  }

  background(0);
  stroke(255);
  noFill();


  rotateX(PI / 3);
  translate(-width/1.2, -height / 2);
  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);

    }
    endShape();
  }
}

function create2DArray(numArrays, numSubArrays) {
  var arr = new Array(numArrays);
  for (var i = 0; i < numArrays; i++) {
    arr[i] = new Array(numSubArrays);
  }
  return arr;
}

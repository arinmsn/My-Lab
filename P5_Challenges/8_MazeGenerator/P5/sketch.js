// Algorithms used:
// Recursive backtracker
// Depth-first search

var cols, rows;
var w = 40;
var grid = [];
// current cell being visited
var current;

function setup() {
  createCanvas(400, 400);
  cols = floor(width / w);
  rows = floor(height / w);
  frameRate(5);

  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }
  current = grid[0];
}

function draw() {
  background(51);
  for (var i = 0; i < grid.length; i++) {
    grid[i].show();
  }
  current.visited = true;
  // // Step 1 Mark the current cell as visited
  var next = current.checkNeighbors();
  if (next) {
    next.visited = true;
    current.highlight();
    // Step 3: Remove wall between current cell and chosen cell
    removeWalls(current, next);

    // Step 4:
    current = next;
  }
}

function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }

  return i + j * cols;
}

function Cell(i, j) {
  // column number
  this.i = i;

  // row number
  this.j = j;

  // [top, right, buttom, left]
  this.walls = [true, true, true, true];
  this.visited = false;

  this.checkNeighbors = function () {
    var neighbors = [];

    var top = grid[index(i, j - 1)];
    var right = grid[index(i + 1, j)];
    var bottom = grid[index(i, j + 1)];
    var left = grid[index(i - 1, j)];

    if (top && !top.visited) {
      neighbors.push(top);
    }

    if (right && !right.visited) {
      neighbors.push(right);
    }

    if (bottom && !bottom.visited) {
      neighbors.push(bottom);
    }

    if (left && !left.visited) {
      neighbors.push(left);
    }

    if (neighbors.length > 0) {
      var r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else {
      return undefined;
    }
  };

  this.highlight = function () {
    var x = this.i * w;
    var y = this.j * w;
    noStroke();
    fill(0, 0, 255, 100);
    rect(x, y, w, w);
  };

  this.show = function () {
    var x = this.i * w;
    var y = this.j * w;
    stroke(255);
    /*
    Top left corner: (x, y)
    Top right corner: (x+w, y)
    Bottom left corner (x, y+w)
    Bottom right corner (x+w, y+w)
    */
    if (this.walls[0]) {
      line(x, y, x + w, y);
    }

    if (this.walls[1]) {
      line(x + w, y, x + w, y + w);
    }

    if (this.walls[2]) {
      line(x + w, y + w, x, y + w);
    }

    if (this.walls[3]) {
      line(x, y + w, x, y);
    }

    if (this.visited) {
      noStroke();
      fill(255, 0, 255, 100);
      rect(x, y, w, w);
    }
  };
}

function removeWalls(a, b) {
  // difference between current cell and neighboring cell
  var x = a.i - b.i;
  if (x === 1) {
    // left wall of cell
    a.walls[3] = false;
    // right wall of cell
    b.walls[1] = false;
  } else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }

  var y = a.j - b.j;
  if (y === 1) {
    // top of cell
    a.walls[0] = false;
    // bottom wall of cell
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}

function Flower(x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;

  this.xdir = 1;

  this.grow = function () {
    this.r = this.r + 2;
  };

  this.shiftDown = function () {
    // reverse the direction
    this.xdir *= -1;
    // move it down
    this.y += this.r;
  };

  this.move = function () {
    this.x = this.x + this.xdir;
  };

  this.show = function () {
    noStroke();
    fill(255, 0, 200, 150);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };
}

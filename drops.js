class Drop {
    constructor(){
      this.x = random(width);
      this.y = random(500, 10);
    }
    fall()
    {
      this.velocityY = 5;
    }
    display () 
    {
      strokeWeight(random(2,6));
      stroke(0, 67, 255);
      line(this.x, this.y, this.x, this.y + 50);
    }
  }
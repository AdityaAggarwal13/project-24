class Stone {
    constructor(x, y) {
      var options = {
        'density':12,
        'friction': 0.9,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 150, 50, options);
      this.width = 50;
      this.height = 80;
      this.x=x;
      this.y=y;
      World.add(world, this.body);
    };
    display(){
      var stonepos = this.body.position;
      
      var angle = this.body.angle;
  
      push();
      translate(stonepos.x,stonepos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('brown')
      fill('dark brown')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
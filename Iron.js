class Iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 3,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 150,150, options);
      this.width = 150;
      this.height = 150;
   
      World.add(world, this.body);
    };
    display(){
      var ironpos = this.body.position;
    
      var angle = this.body.angle;
  
      push();
      translate(ironpos.x,ironpos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('dark grey')
      fill('black')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
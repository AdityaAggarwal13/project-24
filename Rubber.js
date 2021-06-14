class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options={
		'density':1,
		'friction':5,
		'restitution':0.3



	}
	this.x=x;
		this.y=y;
		this.r=r
	this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		this.width=300;
		this.height=300;
		
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;
			var angle = this.body.angle;	
			push()
			translate(rubberpos.x, rubberpos.y);
			
			rotate(angle);
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
             ellipse(0,0,this.r,this.r);
			pop()
	}

}
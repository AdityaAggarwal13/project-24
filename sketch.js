const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
Stone=new Stone(600,450);
Rubber=new Rubber(300,570,PI/7);
Iron=new Iron(800,570);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    
    Stone.display();
    Rubber.display();
    Iron.display();

    
 
}
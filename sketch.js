const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var log1,log3,log4;
var pig1;
var box5;
var bird;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,2000,20)
    box1 = new Box(700,620,70,70);
    box2 = new Box(920,620,70,70);
    log1 = new Log(810,560,300,PI/2);
    pig1 = new Pig(810,630);

    box3 = new Box(700,520,70,70);
    box4 = new Box(920,520,70,70);
    box5 = new Box(810, 400, 70, 70);
    log2 = new Log(810,460,300,PI/2);
    log3 = new Log(760,370, 150, PI/6);
    log4 = new Log(860,370,150,-PI/6);
    pig2 = new Pig(810,530);
    bird = new Bird(300,600);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    log1.display();
    pig1.display();
    box3.display();
    box4.display();
    box5.display();
    log2.display();
    pig2.display();
    log3.display();
    log4.display();
    bird.display();
}
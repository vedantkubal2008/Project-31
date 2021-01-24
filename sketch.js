const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops = [];
var maxDrops =200;
var umbrella;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
}

function setup(){
    var canvas = createCanvas(400,700);   
    engine = Engine.create();
    world = engine.world;
  if (frameCount%100===0){
    for(var i =0;i<maxDrops;i++){
        drops.push(new Drops(random(0,800),random(0,800)));
    }
}
umbrella = new Umbrella(200,580,100);

}
function draw(){
    background(0);
    Engine.update(engine);
 
    for(var i =0;i<maxDrops;i++){
        //drops.push(new Drops(random(0,400),random(0,400)));
        drops[i].display();
        drops[i].update_y();
    }
   Thunder();
    umbrella.display();

    drawSprites();
}   
function Thunder(){
    rand=Math.round(random(1,4));
    if (frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder =createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6);
        thunder.lifetime =30;
    }
}

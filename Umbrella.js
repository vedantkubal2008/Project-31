class Umbrella{
constructor(x,y,r){
    var options = {
        isStatic: true,
        restitution: 0,
        density: 1,
        friction: 1.2,
    }
    this.body = Bodies.circle(x,y,r,options);
    this.r = r;
    this.image = loadImage("images/Walking Frame/walking_1.png");
    World.add(world,this.body);
}
display(){
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,270,270);
}
}
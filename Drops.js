class Drops{
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 0,
            density: 1,
            friction: 1.2,
        
        }
        //this.drops = [];
        this.body = Bodies.circle(x,y,0.04,options);
        World.add(world,this.body);
        }
display(){
   
   
    fill("Darkblue");
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,5,5);
    
        }
    
update_y(){
    if (this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0,700),y:random(0,700)})
    }
}}
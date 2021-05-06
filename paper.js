class Paper{
    constructor(x, y, w, h){
    var options = {
        isStatic : false,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2,
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w
    
    World.add(world,this.body);
}
display(){
    var p = this.body.position;

    push()
    translate(p.x, p.y);
    rectMode (CENTER);
    rect(0, 0, this.w, this.h);
    pop();    
}
}

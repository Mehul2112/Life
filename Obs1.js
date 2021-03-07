class Obs1{

    constructor(x,y,width,height){

        var options = {
            restitution:0.8,
            friction:50,
            density:500
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height
        World.add(world,this.body);

        
    }
    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        fill(73, 66, 173);
        rect(pos.x,pos.y,this.width,this.height);
    }
}

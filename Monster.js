class Monster{
    constructor(x, y, r){
        var options = {
            density : 1,
            //frictionAir :1,
            isStatic: true,
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("Images/monster.png");
        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options)
        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y, this.body.position.r);
        imageMode(CENTER);
        image(this.image, 0, 0, 500,200);
        pop();
      }
}
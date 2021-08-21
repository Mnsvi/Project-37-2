class Fly{

    constructor(bodyA, pointB){

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 400
        }

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
     
    fly(){
        this.sling.bodyA = null;
    }
    
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke(48,22,8);
            strokeWeight(0);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop()
}
}
}
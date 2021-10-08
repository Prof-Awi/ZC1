class Stone{
    constructor(x,y,w,h){
        this.w = w
        this.h = h
        var options = {
            restitution:0.2
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        ellipse(0,0,this.w,this.h)
        pop()
    }
}
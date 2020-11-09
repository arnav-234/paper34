class bin{
    constructor(x,y,width,height)
    {
        var options=
    {
        restitution:0
    
    }
    this.body=Bodies.rectangle(x,y,width,height)
    World.add(world,this.body)
    }
    display(){
    push()
    var pos=this.body.position
    rectMode(CENTER)
    fill(255,0,80)
    rect(pos.x,pos.y,this.width,this.height)
    pop()
    }
    }
class polygon{
    constructor(x,y,width,height){
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(width,height,x,y)
        this.loadImage("polygon.png") 
        World.add(world,this.body)
    }
}
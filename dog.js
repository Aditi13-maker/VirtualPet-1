class Dog{
    constructor(x, y, width, height, angle) {
        var options = {
          isStatic:false,
            'restitution':0.8,
            'friction':1.0,
            'density':0.3
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
       
     
      this.image = loadImage("images/dog.png");
      World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,100, 100);
        pop();
      }
}
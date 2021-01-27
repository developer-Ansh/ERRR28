class stone extends BaseClass {
  constructor(x,y,options){
    var options = {
      'isStatic':false,
      'restitution':0,
      'friction':1,
      'density':1.2
    }
    super(x,y,50,50,options);
    this.image = loadImage("images/stone.png");
  }

  display() {
    // this.body.position.x = mouseX;
    // this.body.position.y = mouseY;
    super.display();
  }
}

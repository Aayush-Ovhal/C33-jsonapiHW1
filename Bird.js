
class Bird extends BaseClass{
  constructor(x,y){
     super(x,y,70,70);
     this.image = loadImage("images/pgd.png");
     this.smokeImage = loadImage("sprites/smoke.png");
     this.trajectory = [];
  }

  display(){

    super.display();

    if(this.body.velocity.x > 5 && this.body.position.x > 300){
      var position = [this.body.position.x,this.body.position.y];
      this.trajectory.push(position);
    }

    for(var i = 0; i < this.trajectory.length; i++){
      image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1]);
    }
    
  }
}
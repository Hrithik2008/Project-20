var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(600,1800);

  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  car.shapeColor="white";
  
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=rgb(80,80,80);
  
}

function draw() {
  background(0,0,0);  
 
  if(car.x - wall.x <= car.width/2+wall.width/2 &&
    wall.x - car.x <= car.width/2+wall.width/2){
      car.velocityX=0;
      var deformation=(0.5*weight*speed*speed)/22500
      if (deformation < 100) {
        car.shapeColor=rgb(0,255,0);
      }
      if (deformation > 100 && deformation < 180) {
        car.shapeColor=rgb(230,230,0);
      }
      if (deformation > 180) {
        car.shapeColor=rgb(255,0,0);
      }      
    }

  drawSprites();
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  Box.tint(0,153,204)
}
polygon = Bodies.circle(50,200,20);
    World.add(world,polygon)
    slingShot = new SlingShot(this.polygon,{x:100,y:200})

    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
  
    var score = 0;
    text("SCORE:"+score,750,40);

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();


function draw() {
  background(255,255,255);  
  drawSprites();
  score();
}
if(speed<3){
  Box.visibility = false
}
if(speed>5){
  Box.visibility = true
}
function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.polygon);
  }
}
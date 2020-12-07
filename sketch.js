var a,b;
function setup(){

  createCanvas(400,400);
  a=createSprite(200,200,50,50);
  b=createSprite(200,200,80,30);
  a.shapeColor = "green"
  b.shapeColor = "green"
}
function draw(){
background(255,255,255);
a.x = mouseX;
a.y = mouseY;
console.log(a.x-b.x)

if(a.x-b.x<65){
  a.shapeColor = "red";
  b.shapeColor = "red";
}
else{
  a.shapeColor = "green";
  b.shapeColor = "green";
}
if(b.x-a.x<65){
  a.shapeColor = "red";
  b.shapecolor = "red";
}
else{
  a.shapeColor = "green";
  b.shapeColor = "green";
}
drawSprites();

}
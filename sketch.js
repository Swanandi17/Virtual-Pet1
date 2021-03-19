//Create variables here\
var happyDoggy,doggy,foodStock,foodS,database,doggyimg;

function preload(){
	//load images here
happyDoggy = loadImage("happydog.png");
 doggyimg = loadImage("Dog.png");
}

function setup() {
	createCanvas(500, 500);

  database = firebase.database();

  foodStock = database.ref("food");
  foodStock.on("value",readStock);

  doggy=createSprite(250,400,0,0);
  doggy.scale=0.2;
  doggy.addImage(doggyimg);
}

function writeStock(x){
if(x<0){
  x=0;
}
else{
  x=x-1;
}

database.ref("/").set({
  food:x
})
}

function readStock(data){
    foodS=data.val();
}

function draw() {  
  background(46,139,87);

  stroke(20);
  fill("white");
  text("Food remaining : "+ foodS,200,200);

  if(keyWentDown("UP_ARROW")){
    writeStock(foodS);
    happyDoggy.scale=0.2;
    doggy.addImage(happyDoggy);
    console.log("haha");
  }

 /* else{
    
  }*/

  if(foodS<1){
    text("Game Over",200,300);
    doggy.addImage(doggyimg);
   // database.update(food=20);
  }

  drawSprites();
  //add styles here

}




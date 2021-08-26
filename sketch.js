var striker_img , arrow_img , board_img , red_img , yellow_img;

var wood1 , wood2 , wood3 , wood4 ;

var  borders , arrow , striker;

var token1 ; 
var token2 , token3 , token4 , token5 ;
var pushStrength=0;
var score=0;
var canfire=true;
var foul=0;

function preload(){
striker_img = loadImage("striker.png");

arrow_img = loadAnimation("arrow1.png" , "arrow2.png" , "arrow3.png");

board_img = loadImage("board.png");

red_img = loadImage("red.png");

yellow_img = loadImage("yellow.png");

}

function setup(){
createCanvas(400,400);

//groups

borders = new Group;



/*borders
   |
   |
   |
  \|/
     */
wood1 = createSprite(200,0,400,52);
wood1.shapeColor = ("#6F4D31");
borders.add(wood1);

wood2 = createSprite(200,400,400,52);
wood2.shapeColor = ("#6F4D31");
borders.add(wood2);

wood3 = createSprite(0,200,52,400);
wood3.shapeColor = ("#6F4D31");
borders.add(wood3);

wood4 = createSprite(400,200,52,400);
wood4.shapeColor = ("#6F4D31");
borders.add(wood4);

//create arrow

arrow = createSprite(200,250)
arrow.addAnimation("arrow",arrow_img);
arrow.scale = 0.3;
arrow.rotateToDirection = true;
arrow.visible = false;
arrow.pause();

//create striker

striker = createSprite(200,310);
striker.addImage("striker",striker_img);
striker.scale = 0.1;
striker.rotation = 270;
//striker.debug = true;
striker.setCollider("circle",0,0,110)

//create tokens

token1 = createSprite(200,200);
token1.addImage(yellow_img);
token1.scale = 0.1;
token1.setCollider("circle",0,0,80);


token2 = createSprite(200,177);
token2.addImage(red_img);
token2.scale = 0.1;
token2.setCollider("circle",0,0,80);


token3 = createSprite(200,222);
token3.addImage(red_img);
token3.scale = 0.1;
token3.setCollider("circle",0,0,80);


token4 = createSprite(222,200);
token4.addImage(red_img);
token4.scale = 0.1;
token4.setCollider("circle",0,0,80);


token5 = createSprite(177,200);
token5.addImage(red_img);
token5.scale = 0.1;
token5.setCollider("circle",0,0,80);



}

function draw(){
background(board_img);
   striker.bounceOff(borders);


  token1.bounceOff(borders);
  token2.bounceOff(borders);
  token3.bounceOff(borders);
  token4.bounceOff(borders);
  token5.bounceOff(borders);

  striker.bounce(token1);
  striker.bounce(token2);
  striker.bounce(token3);
  striker.bounce(token4);
  striker.bounce(token5);

  token1.bounce(token2);
  token1.bounce(token3);
  token1.bounce(token4);
  token1.bounce(token5);

  token2.bounce(token3);
  token2.bounce(token4);
  token2.bounce(token5);

  token3.bounce(token4);
  token3.bounce(token5);

  token4.bounce(token5);
  drawSprites();
   createEdgeSprites()
  if(keyWentUp(UP_ARROW))
  {
     striker.addSpeed(pushStrength,striker.rotation);
     canFire= false;
  }

  if(striker.getSpeed() < 0.2)
  {
     canFire=true;
  }

//token 1
if (token1.x > 50 && token1.x < 70 && token1.y > 50 && token1.y < 70) {
   token1.x = -100;
   score++;
 }
 if (token1.x > 330 && token1.x < 360 && token1.y > 50 && token1.y < 70) {
   token1.x = -100;
   score++;
 }
 if (token1.x > 50 && token1.x < 70 && token1.y > 330 && token1.y < 360) {
   token1.x = -100;
   score++;
 }
 if (token1.x > 330 && token1.x < 360 && token1.y > 330 && token1.y < 360) {
   token1.x = -100;
   score++;
 }

 //token 2
 if (token2.x > 50 && token2.x < 70 && token2.y > 50 && token2.y < 70) {
   token2.x = -100;
   score++;
 }
 if (token2.x > 330 && token2.x < 360 && token2.y > 50 && token2.y < 70) {
   token2.x = -100;
   score++;
 }
 if (token2.x > 50 && token2.x < 70 && token2.y > 330 && token2.y < 360) {
   token2.x = -100;
   score++;
 }
 if (token2.x > 330 && token2.x < 360 && token2.y > 330 && token2.y < 360) {
   token2.x = -100;
   score++;
 }

 //token3
 if (token3.x > 50 && token3.x < 70 && token3.y > 50 && token3.y < 70) {
   token3.x = -100;
   score++;
 }
 if (token3.x > 330 && token3.x < 360 && token3.y > 50 && token3.y < 70) {
   token3.x = -100;
   score++;
 }
 if (token3.x > 50 && token3.x < 70 && token3.y > 330 && token3.y < 360) {
   token3.x = -100;
   score++;
 }
 if (token3.x > 330 && token3.x < 360 && token3.y > 330 && token3.y < 360) {
   token3.x = -100;
   score++;
 }

 //token 4
 if (token4.x > 50 && token4.x < 70 && token4.y > 50 && token4.y < 70) {
   token4.x = -100;
   score++;
 }
 if (token4.x > 330 && token4.x < 360 && token4.y > 50 && token4.y < 70) {
   token4.x = -100;
   score++;
 }
 if (token4.x > 50 && token4.x < 70 && token4.y > 330 && token4.y < 360) {
   token4.x = -100;
   score++;
 }
 if (token4.x > 330 && token4.x < 360 && token4.y > 330 && token4.y < 360) {
   token4.x = -100;
   score++;
 }

 //token 5
 if (token5.x > 50 && token5.x < 70 && token5.y > 50 && token5.y < 70) {
   token5.x = -100;
   score++;
 }
 if (token5.x > 330 && token5.x < 360 && token5.y > 50 && token5.y < 70) {
   token5.x = -100;
   score++;
 }
 if (token5.x > 50 && token5.x < 70 && token5.y > 330 && token5.y < 360) {
   token5.x = -100;
   score++;
 }
 if (token5.x > 330 && token5.x < 360 && token5.y > 330 && token5.y < 360) {
   token5.x = -100;
   score++;
 }

// Striker 

if (striker.x > 50 && striker.x < 70 && striker.y > 50 && striker.y < 70) {
  striker.x = 200 , striker.y = 310;
  foul++;
}
if (striker.x > 330 && striker.x < 360 && striker.y > 50 && striker.y < 70) {
  striker.x = 200 , striker.y = 310;
  foul++;
}
if (striker.x > 50 && striker.x < 70 && striker.y > 330 && striker.y < 360) {
  striker.x = 200 , striker.y = 310;
  foul++;
}
if (striker.x > 330 && striker.x < 360 && striker.y > 330 && striker.y < 360) {
  striker.x = 200 , striker.y = 310;
  foul++;
}

  //slow the striker/tokens
  striker.setSpeedAndDirection(striker.getSpeed() * 0.97);
  token1.setSpeedAndDirection(token1.getSpeed() * 0.985);
  token2.setSpeedAndDirection(token2.getSpeed() * 0.985);
  token3.setSpeedAndDirection(token3.getSpeed() * 0.985);
  token4.setSpeedAndDirection(token4.getSpeed() * 0.985);
  token5.setSpeedAndDirection(token5.getSpeed() * 0.985);
  
//aiming and firing the striker
  if(keyDown(UP_ARROW) && canFire===true)
  {
     arrow.visible=true;
     pushStrength += 0.5;
     if( pushStrength > 10 &&  pushStrength < 15)
     {
        arrow.setFrame(1);
     }
     else if(pushStrength > 15 &&  pushStrength < 20)
     {
      arrow.setFrame(2)
     }
     else if(pushStrength >=20)
     {
        pushStrength=20;
        arrow.setFrame(2);
     }
     else{
        arrow.setFrame(0);
     }
  }
  else{
   arrow.visible=false;
   pushStrength=0;
  }

  //helping in aimimg the striker
  if(keyDown(LEFT_ARROW) &&  canFire===true)
  {
      striker.rotation -= 5
  }
  else if(keyDown(RIGHT_ARROW) &&  canFire===true)
  {
      striker.rotation += 5
  }


  //moving arrow with the striker
  arrow.x= striker.x;
  arrow.y=striker.y;
  arrow.rotation= striker.rotation;

  //score
  fill("white");
  textSize(20);
  text("Score: "+score,170,20);
  
 // text(mouseX+","+mouseY,mouseX,mouseY);
 fill("red");
 textSize(20);
 text("FOUL: "+foul,170,393);
  
if (foul > 2 )
{
  fill("red");
 textSize(50);
 text("GAME OVER ",50,220);

 arrow.visible=false;
 striker.visible=false;
 canFire=true;
 striker.setSpeedAndDirection(striker.getSpeed() * 0);

}

if (foul > 2 )
{
  fill("red");
 textSize(50);
 text("WINNER",150,220);
}



}






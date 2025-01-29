//Raeid Usmanali - 709603
//Video Game First Release
//September 27th, 2022

//TO DO (Visuals): 
//TO DO (Game Functions): tutorial screen

//Screen variable (increases and decreases to display different screens)
let screen = 0

//Ninja star variables
var star = [0,1000,10,0,0]
var starL = [1000]
let capSpeed = 40
let incSpeed = 5
let ball2 = [700, 1300]

let img;
let imgPath = 'https://i.ibb.co/HVz19d9/kisspng-white-black-pattern-ninja-star-cliparts-5a887b0e188894-2448775215188938381005.png'

//Scoring Variables
let score = 0
let scoreH = 0
let scoreH2 = 0
let score2 = 0
let score3;
let scoreH3 = 0;

//Control Variables
let ctrlMoveX = 0;
let ctrlMoveY = 0;
let nSpeed = 10;

//Timer Variable
var timerValue = 0;

//Coordinates for the starting position of the character
let startX = 750
let startY = 990

//Character Positioning Variables - X axis
let x100 = 100 + startX 
let x75 = 75 + startX
let x135 = 135 + startX
let x195 = 195 + startX
let x150 = 150 + startX
let x250 = 250 + startX
let x125 = 125 + startX
let x275 = 275 + startX

//Character Positioning Variables - Y axis
let y100 = 100 + startY
let y125 = 125 + startY
let y150 = 150 + startY
let y175 = 175 + startY
let y200 = 200 + startY
let y225 = 225 + startY
let y250 = 250 + startY
let y275 = 275 + startY
let y350 = 350 + startY
let y375 = 375 + startY

//Background variables
let col1;
let col2;
let reX;
let reY;
let p;
var gC = [42,47,35]

//Dashing Variable
let dashV = 250
let dashM = 3
let dashCH = ["Charging.","Charging..","Dash Ready!"]
let dashX = 880
let dashY;

//Design image
let img2;
let imgPath2 = 'https://i.ibb.co/JrVF4KM/64-649422-school-expeditions-by-true-adventure-svg-royalty-free.png'

//Tutorial Images
let imgT1;
let imgPT1 = 'https://i.ibb.co/QNfMzvf/Tutorial-1.png'

let imgT2;
let imgPT2 = 'https://i.ibb.co/7GpVvFn/Tutorial-2.png'

let imgT3;
let imgPT3 = 'https://i.ibb.co/BNhxTXk/Tutorial-3.png'


//----------------------Game functions-------------------------------

//Pre-Load for images
function preload(){
  img = loadImage(imgPath)
  img2 = loadImage(imgPath2)
  
  imgT1 = loadImage(imgPT1)
  imgT2 = loadImage(imgPT2)
  imgT3 = loadImage(imgPT3)
}


//Canvas
function setup() {
  createCanvas(700, 550);
  noLoop(); 
  frameRate(60);
  
  let dashY = height/2
  
  //Timer interval
  setInterval(timeIt, 1000);
  
  //Sky variables
  var col1 = color(0, 0, 153);
  var col2 = color(204, 51, 0);
}

//Different screens
function draw(){
  
  textFont("serif")
  
  if(screen == 0){
    clear()
    startScreen()
  }else if(screen == 1){
    frameRate(45)
    gameScreen1()
    
//Held key movement
  if (keyIsDown(LEFT_ARROW)) {
    ctrlMoveX = ctrlMoveX - nSpeed
  }

  if (keyIsDown(RIGHT_ARROW)) {
    ctrlMoveX = ctrlMoveX + nSpeed
  }

//Speed cap
  if(ctrlMoveX< -nSpeed){
    ctrlMoveX += nSpeed
  }
  
  if(ctrlMoveX>nSpeed){
    ctrlMoveX += -nSpeed
  }

//Stops the character from going offscreen
  if(x75 <= 0){
    x100 = 100 + -65
    x75 = 75 + -65
    x135 = 135 + -65
    x195 = 195 + -65
    x150 = 150 + -65
    x250 = 250 + -65
    x125 = 125 + -65
    x275 = 275 + -65
  }  
    
  if((x100+200) >= 2000){
    x100 = 100 + 1690
    x75 = 75 + 1690
    x135 = 135 + 1690
    x195 = 195 + 1690
    x150 = 150 + 1690
    x250 = 250 + 1690
    x125 = 125 + 1690
    x275 = 275 + 1690
  }
 
//Draws a moon in the sky
    noStroke();
    fill(230,230,180);
    ellipse(150,150,200,200);  
  
    noFill();
    ellipse(200,150,220,220); 
    
    
  redraw();
  
//Hitbox line USED FOR TESTING
//   stroke(207,185,151)
//   line(x75, (y125-25), (x100+200), (y125-25))
    
  //Loops the ninja star moving down
  loop()
    
    //Score keeper
    textSize(50) 
    fill(210)
    textFont("cursive")
    text("Score = " + score, 20,1500,300)
    text("Normal Mode", 1100,1500,1300)
    textSize(10)
    textFont("serif")
    
  //Dashing Bar
  noStroke()
  fill(255)
  rect(1000, height/2 + 1220, 300,60,100,100)
  fill(79,121,66) 
  rect(1000, height/2 + 1220, (dashM*100), 60,100,100)
  
  if(dashM == 3){
  textSize(40)
  fill(255)
  text(dashCH[2], dashX, height/2 + 1265) 
  }else if(dashM == 0){
  textSize(40)
  fill(255)
  text(dashCH[0], dashX, height/2 + 1265)
  }else if(dashM == 1){
  textSize(40)
  fill(255)
  text(dashCH[0], dashX, height/2 + 1265)
  }else if(dashM == 2){
  textSize(40)
  fill(255)
  text(dashCH[1], dashX, height/2 + 1265)
  }
    
  //Ninja Star loop system
    for (var e = 0; e < starL.length; e++) {
    noFill()
    ellipse(starL[0], star[0], 50, 50);
    image(img, starL[0], star[0]-100, 100,100)
    star[0] += star[2];

      for(star[0]; star[0] >= 1660; star[0] = -10) {
        randomX()
        star[2] += incSpeed
        score += 1 
        
        dashM += 1
        if(dashM > 3){
          dashM -= 1
        }
      } 
  //Death sequence
      if(starL[0]>x75-65 && star[0]>1100 && starL[0]<(x100+260) && star[0] < 1400){
        screen = 2
        star[0] = 0
        starL[0] = 1000
      }  
}
    
    //Star speed cap
      if(star[2]>=capSpeed){
        star[2] = capSpeed-1;
      }
  
    }else if(screen == 2){
      endScreen1()
    }else if(screen == 3){
      selScreen()
    }else if(screen == 4){
      frameRate(45)
      gameScreen2()
      
   //Held key movement
  if (keyIsDown(LEFT_ARROW)) {
    ctrlMoveX = ctrlMoveX - nSpeed
  }

  if (keyIsDown(RIGHT_ARROW)) {
    ctrlMoveX = ctrlMoveX + nSpeed
  }

//Speed cap
  if(ctrlMoveX< -nSpeed){
    ctrlMoveX += nSpeed
  }
  
  if(ctrlMoveX> nSpeed){
    ctrlMoveX += -nSpeed
  }

//Stops the character from going offscreen
  if(x75 <= 0){
    x100 = 100 + -65
    x75 = 75 + -65
    x135 = 135 + -65
    x195 = 195 + -65
    x150 = 150 + -65
    x250 = 250 + -65
    x125 = 125 + -65
    x275 = 275 + -65
  }  
    
  if((x100+200) >= 2000){
    x100 = 100 + 1690
    x75 = 75 + 1690
    x135 = 135 + 1690
    x195 = 195 + 1690
    x150 = 150 + 1690
    x250 = 250 + 1690
    x125 = 125 + 1690
    x275 = 275 + 1690
  }
 
//Draws a moon in the sky
    noStroke();
    fill(230,230,180);
    ellipse(150,150,200,200);  
  
    noFill();
    ellipse(200,150,220,220); 
    
    
  redraw();
  
//Hitbox line USED FOR TESTING
//   stroke(207,185,151)
//   line(x75, (y125-25), (x100+200), (y125-25))
    
  //Loops the ninja star moving down
  loop()
    
    //Score keeper
    textSize(50) 
    fill(210)
    textFont("cursive")
    text("Triple Trouble", 1100, 1500,1300)
    text("Score = " + score2/3, 20,1500,300)
    textSize(10)
    textFont("serif")
      
 //Dashing Bar
  noStroke()
  fill(255)
  rect(1000, height/2 + 1220, 300,60,100,100)
  fill(79,121,66) 
  rect(1000, height/2 + 1220, (dashM*100), 60,100,100)
  
  if(dashM == 3){
  textSize(40)
  fill(255)
  text(dashCH[2], dashX, height/2 + 1265) 
  }else if(dashM == 0){
  textSize(40)
  fill(255)
  text(dashCH[0], dashX, height/2 + 1265)
  }else if(dashM == 1){
  textSize(40)
  fill(255)
  text(dashCH[0], dashX, height/2 + 1265)
  }else if(dashM == 2){
  textSize(40)
  fill(255)
  text(dashCH[1], dashX, height/2 + 1265)
  }
    
  //Ninja Star loop system
    for (var b1 = 0; b1< starL.length; b1++) {
    noFill()
    ellipse(starL[0], star[0], 50, 50);
    ellipse(ball2[0], star[3], 50, 50)
    ellipse(ball2[1], star[4], 50, 50)
      
    image(img, starL[0], star[0]-100, 100,100)
    image(img, ball2[0], star[3]-100, 100,100)
    image(img, ball2[1], star[4]-100, 100,100)  
      
    star[0] += star[2];
    star[3] += star[2];
    star[4] += star[2];

      for(star[0]; star[0] >= 1660; star[0] = -10) {
        randomX()
        star[2] += incSpeed
        score2 += 1 
        
        dashM += 1
        
        if(dashM > 3){
          dashM -= 1
        }
      } 
      for(star[3]; star[3] >= 1660; star[3] = -10) {
        score2 += 1 
      } 
      for(star[4]; star[4] >= 1660; star[4] = -10) {
        score2 += 1 
      } 
  //Death sequence
      if(starL[0]>x75-65 && star[0]>1100 && starL[0]<(x100+200) && star[0] < 1400){
        screen = 5
        star[0] = 0
        starL[0] = 1000
        ball2[0] = 700
        ball2[1] = 1300
      }  
      if(ball2[0]>x75-60 && star[0]>1100 && ball2[0]<(x100+200) && star[0] < 1400){
        screen = 5
        star[0] = 0
        starL[0] = 1000
        ball2[0] = 700
        ball2[1] = 1300
      }  
      if(ball2[1]>x75-60 && star[0]>1100 && ball2[1]<(x100+200) && star[0] < 1400){
        screen = 5
        star[0] = 0
        starL[0] = 1000
        ball2[0] = 700
        ball2[1] = 1300
      }  
}
    
    //Star speed cap
      if(star[2]>capSpeed){
        star[2] = capSpeed-1;
      }
    }else if(screen == 5){
      endScreen2()
    }else if(screen == 6){
      frameRate(45)
      gameScreen3()
      
      //Held key movement
  if (keyIsDown(LEFT_ARROW)) {
    ctrlMoveX = ctrlMoveX - nSpeed
  }

  if (keyIsDown(RIGHT_ARROW)) {
    ctrlMoveX = ctrlMoveX + nSpeed
  }

//Speed cap
  if(ctrlMoveX< -nSpeed){
    ctrlMoveX += nSpeed
  }
  
  if(ctrlMoveX> nSpeed){
    ctrlMoveX -= nSpeed
  }

//Stops the character from going offscreen
  if(x75 <= 0){
    x100 = 100 + -65
    x75 = 75 + -65
    x135 = 135 + -65
    x195 = 195 + -65
    x150 = 150 + -65
    x250 = 250 + -65
    x125 = 125 + -65
    x275 = 275 + -65
  }  
    
  if((x100+200) >= 2000){
    x100 = 100 + 1690
    x75 = 75 + 1690
    x135 = 135 + 1690
    x195 = 195 + 1690
    x150 = 150 + 1690
    x250 = 250 + 1690
    x125 = 125 + 1690
    x275 = 275 + 1690
  }
 
//Draws a moon in the sky
    noStroke();
    fill(230,230,180);
    ellipse(150,150,200,200);  
  
    noFill();
    ellipse(200,150,220,220); 
    
    
  redraw();
  
//Hitbox line USED FOR TESTING
//   stroke(207,185,151)
//   line(x75, (y125-25), (x100+200), (y125-25))
    
  //Loops the ninja star moving down
  loop()
    
    //Score keeper
    textSize(50) 
    fill(210)
    textFont("cursive")

        if (timerValue >= 10 && screen == 6) {
          text("0:" + timerValue, 380, 1535);
        }else if (timerValue < 10 && screen == 6) {
          text('0:0' + timerValue, 380, 1535);
        }else if (timervalue < 60 && screen == 6){
          text('1:0' + timerValue, 380, 1535)
        }

    text("Time Alive: ", 170, 1535)  
    text("Timed", 1750,1535)
    textSize(10)
    textFont("serif")
      
      
 //Dashing Bar
  noStroke()
  fill(255)
  rect(1000, height/2 + 1220, 300,60,100,100)
  fill(79,121,66) 
  rect(1000, height/2 + 1220, (dashM*100), 60,100,100)
  
  if(dashM == 3){
  textSize(40)
  fill(255)
  text(dashCH[2], dashX, height/2 + 1265) 
  }else if(dashM == 0){
  textSize(40)
  fill(255)
  text(dashCH[0], dashX, height/2 + 1265)
  }else if(dashM == 1){
  textSize(40)
  fill(255)
  text(dashCH[0], dashX, height/2 + 1265)
  }else if(dashM == 2){
  textSize(40)
  fill(255)
  text(dashCH[1], dashX, height/2 + 1265)
  }  
    
  //Ninja Star loop system
    for (var b3 = 0; b3 < starL.length; b3++) {
    noFill()
    ellipse(starL[0], star[0], 50, 50);
    image(img, starL[0], star[0]-100, 100,100)
    star[0] += star[2];

      for(star[0]; star[0] >= 1660; star[0] = -10) {
        randomX()
        star[2] += incSpeed
        score += 1 
        
        dashM += 1
        
        if(dashM > 3){
          dashM -= 1
        }
      } 
  //Death sequence
      if(starL[0]>x75-65 && star[0]>1100 && starL[0]<(x100+200) && star[0] < 1400){
        screen = 7
        star[0] = 0
        starL[0] = 1000
        
        //updates the score
        score3 = timerValue
      }  
}
    
    //Star speed cap
      if(star[2]>=capSpeed){
        star[2] = capSpeed-1;
      }
    }else if(screen == 7){
      endScreen3()
    }else if(screen == 8){
      tutorialScreen1()
    }
}

//Startscreen function
function startScreen(){
    clear();
    loop();
        score = 0;
        background(0)
		fill(255)
		textAlign(CENTER);
        textSize(50)
		text('Dodging Game', width / 2, height / 2 - 150)
        
  
        rectMode(CENTER)
        fill(112)
        rect(width/2,height/2+60,120,40)
        rectMode(CORNER)
        
        fill(255)
        textFont("serif")
        textSize(20)
		text('Start', width / 2, height / 2 + 65);
  
        text('Normal Mode High Score: ' + scoreH, width/2, height /2- 80)
        text('Triple Trouble Mode High Score: ' + scoreH2, width/2, height /2- 50)
        text('Timed Mode High Score (Seconds): ' + scoreH3 , width/2, height /2- 20)
  
  
        text('Made by: Raeid Usmanali (709603)', 150, 540)
}

function gameScreen1(){
  clear();
  noLoop();
  background(207,185,151);

  
  
  //Calls upon the gradient function for the background
  setGradient(0, 0, windowWidth, windowHeight, col1, col2, "Y");  
  image(img2,0,372,width)
  
  //Make the stars  
  var remX = random(windowWidth);
  var remY = random(windowHeight-200);  
  var str = 0 

    for (var p = 0; p < 50; p = p+1) {
     noStroke();
      fill(255, 255, 0);
      ellipse(remX, remY, 1.5, 1.5);
    }   
  
  //Make the trees
  treeCMD()
  
  //Grass base
  fill(gC);
  rect(0,512.5,5000,5000);

    //Make the grass
    grass()  
  
//Character Building
  noStroke();
  scale(0.35);
  
  //Moving Variables X
  x100 = x100 + ctrlMoveX
  x75 = x75 + ctrlMoveX
  x135 = x135 + ctrlMoveX
  x195 = x195 + ctrlMoveX
  x150 = x150 + ctrlMoveX
  x250 = x250 + ctrlMoveX
  x125 = x125 + ctrlMoveX
  x275 = x275 + ctrlMoveX
  
  //Moving Variables Y
  y100 = y100 + ctrlMoveY
  y125 = y125 + ctrlMoveY
  y150 = y150 + ctrlMoveY
  y175 = y175 + ctrlMoveY
  y200 = y200 + ctrlMoveY
  y225 = y225 + ctrlMoveY
  y250 = y250 + ctrlMoveY
  y275 = y275 + ctrlMoveY
  y350 = y350 + ctrlMoveY
  y375 = y375 + ctrlMoveY
  
    //layer 1 (Top of Head)
    fill(10,5,84)
    stroke(10,5,84)
    rect(x100,y100,175,25)

    //layer2 (Face)
    fill(10,5,84)
    stroke(10,5,84)
    rect(x75,y125,225,25)
    fill(0)
    stroke(0)
    rect(x100,y125,175,25)

    //layer 3 (Black Face area)
    fill(10,5,84)
    stroke(10,5,84)
    rect(x75,y150,225,25)
    fill(0)
    stroke(0)
    rect(x100,y150,175,25)

      ///layer 3 (Eyes)
      fill(255,255,255)
      stroke(255,255,255)
      square(x135,y150,25)
      square(x195,y150,25)

    //layer 4 (Hood))
    fill(10,5,84)
    stroke(10,5,84)
    rect(x75,y175,225,25)
    fill(0)
    stroke(0)
    rect(x100,y175,175,25)

    //layer 5 (Hood)
    fill(10,5,84)
    stroke(10,5,84)
    rect(x75,y200,225,25)
    fill(0)
    stroke(0)
    rect(x100,y200,175,25)

    //layer 6 (Hood and Scarf)
    fill(10,5,84)
    stroke(10,5,84)
    rect(x150,y225,150,25)
    fill(0)
    stroke(0)
    rect(x100,y225,175,25)
    fill(10,5,84)
    stroke(10,5,84)
    rect(x100,y225,25,25)
    rect(x250,y225,25,25)
    fill(211,24,24)
    stroke(211,24,24)
    rect(x275,y225,25,25)

    //layer 7 (Scarf)
    fill(211,24,24)
    stroke(211,24,24)
    rect(x125,y250,150,25)
    fill(211,24,24)
    stroke(211,24,24)
    rect(x125,y250,150,25)

    //layer 8,9,10 (Midsection)
    fill(0)
    stroke(0)
    rect(x150,y275,150,25)
    fill(211,24,24)
    stroke(211,24,24)
    rect(x275,y275,25,25)
    fill(4,16,101)
    stroke(4,16,101)
    rect(x125,y275,150,75)

    //layer 11 (Pants)
    fill(4,16,101)
    stroke(4,16,101)
    rect(x125,y350,150,25)
    rect(x125,y375,25,100)
    rect(x250,y375,25,100)
}

//Endscreen (NORMAL) function
function endScreen1(){
        scale(0.5);
        clear();
        loop();
  
     if(score > scoreH){
      noLoop();
      scoreH = score
    }    
  
        background(0);
        star[2] = 10
  
        fill(255);
		textAlign(CENTER);
  
          textSize(125)
          text('Y o u    D i e d !', 675, 450)

          textSize(50)
          textFont("cursive")
          text("High-Score = " + scoreH, 675, 500 + 60)
          text("Score = " + score, 675, 500 + 130)

  
          textSize(32.5)
          rectMode(CENTER)

          fill(112)
          rect(675 - 225, 730, 220, 100)
          fill(255)
          textFont("serif")
          text('Play Again', 675 - 225, 500 + 240)

          fill(112)
          rect(675 + 225, 730, 220, 100)
          fill(255)
          text('Title Screen', 675 + 225, 500 + 240) 
  
        rectMode(CORNER)
}

//Gamescreen (TRIPLE TROUBLE) function
function gameScreen2(){
  clear();
  noLoop();
  background(207,185,151);

  //Calls upon the gradient function for the background
  setGradient(0, 0, windowWidth, windowHeight, col1, col2, "Y");  
  image(img2,0,372,width)  
  
  //Make the stars  
  var remX = random(windowWidth);
  var remY = random(windowHeight-200);  
  var str = 0 

    for (var p = 0; p < 50; p = p+1) {
     noStroke();
      fill(255, 255, 0);
      ellipse(remX, remY, 1.5, 1.5);
    }   
  
  //Make the trees
  treeCMD()
  
  //Grass base
  fill(gC);
  rect(0,512.5,5000,5000);

    //Make the grass
    grass()  
  
//Character Building
  noStroke();
  scale(0.35);
  
  //Moving Variables X
  x100 = x100 + ctrlMoveX
  x75 = x75 + ctrlMoveX
  x135 = x135 + ctrlMoveX
  x195 = x195 + ctrlMoveX
  x150 = x150 + ctrlMoveX
  x250 = x250 + ctrlMoveX
  x125 = x125 + ctrlMoveX
  x275 = x275 + ctrlMoveX
  
  //Moving Variables Y
  y100 = y100 + ctrlMoveY
  y125 = y125 + ctrlMoveY
  y150 = y150 + ctrlMoveY
  y175 = y175 + ctrlMoveY
  y200 = y200 + ctrlMoveY
  y225 = y225 + ctrlMoveY
  y250 = y250 + ctrlMoveY
  y275 = y275 + ctrlMoveY
  y350 = y350 + ctrlMoveY
  y375 = y375 + ctrlMoveY
  
    //layer 1 (Top of Head)
    fill(10,5,84)
    stroke(10,5,84)
    rect(x100,y100,175,25)

    //layer2 (Face)
    fill(10,5,84)
    stroke(10,5,84)
    rect(x75,y125,225,25)
    fill(0)
    stroke(0)
    rect(x100,y125,175,25)

    //layer 3 (Black Face area)
    fill(10,5,84)
    stroke(10,5,84)
    rect(x75,y150,225,25)
    fill(0)
    stroke(0)
    rect(x100,y150,175,25)

      ///layer 3 (Eyes)
      fill(255,255,255)
      stroke(255,255,255)
      square(x135,y150,25)
      square(x195,y150,25)

    //layer 4 (Hood))
    fill(10,5,84)
    stroke(10,5,84)
    rect(x75,y175,225,25)
    fill(0)
    stroke(0)
    rect(x100,y175,175,25)

    //layer 5 (Hood)
    fill(10,5,84)
    stroke(10,5,84)
    rect(x75,y200,225,25)
    fill(0)
    stroke(0)
    rect(x100,y200,175,25)

    //layer 6 (Hood and Scarf)
    fill(10,5,84)
    stroke(10,5,84)
    rect(x150,y225,150,25)
    fill(0)
    stroke(0)
    rect(x100,y225,175,25)
    fill(10,5,84)
    stroke(10,5,84)
    rect(x100,y225,25,25)
    rect(x250,y225,25,25)
    fill(211,24,24)
    stroke(211,24,24)
    rect(x275,y225,25,25)

    //layer 7 (Scarf)
    fill(211,24,24)
    stroke(211,24,24)
    rect(x125,y250,150,25)
    fill(211,24,24)
    stroke(211,24,24)
    rect(x125,y250,150,25)

    //layer 8,9,10 (Midsection)
    fill(0)
    stroke(0)
    rect(x150,y275,150,25)
    fill(211,24,24)
    stroke(211,24,24)
    rect(x275,y275,25,25)
    fill(4,16,101)
    stroke(4,16,101)
    rect(x125,y275,150,75)

    //layer 11 (Pants)
    fill(4,16,101)
    stroke(4,16,101)
    rect(x125,y350,150,25)
    rect(x125,y375,25,100)
    rect(x250,y375,25,100)
}

//Endscreen (TRIPLE TROUBLE) function
function endScreen2(){
        scale(0.5);
        clear();
        loop();
  
  //console.log(mouseX, mouseY)
  
     if(score2/3 > scoreH2){
      noLoop();
      scoreH2 = score2/3
    }    
  
        background(0);
        star[2] = 10
  
        fill(255);
		textAlign(CENTER);
  
          textSize(125)
          text('Y o u    D i e d !', 675, 450)

          textSize(50)
          textFont("cursive")
          text("Triple Trouble High-Score = " + scoreH2, 675, 500 + 60)
          text("Score = " + score2/3, 675, 500 + 130)

  
          textSize(32.5)
          rectMode(CENTER)

          fill(112)
          rect(675 - 225, 730, 220, 100)
          fill(255)
          textFont("serif")
          text('Play Again', 675 - 225, 500 + 240)

          fill(112)
          rect(675 + 225, 730, 220, 100)
          fill(255)
          text('Title Screen', 675 + 225, 500 + 240) 
  
        rectMode(CORNER)
}

//Gamescreen (TIMED) function
function gameScreen3(){
  clear();
  noLoop();
  background(207,185,151);

  //Calls upon the gradient function for the background
  setGradient(0, 0, windowWidth, windowHeight, col1, col2, "Y");  
  image(img2,0,372,width)
  
  //Make the stars  
  var remX = random(windowWidth);
  var remY = random(windowHeight-200);  
  var str = 0 

    for (var p = 0; p < 50; p = p+1) {
     noStroke();
      fill(255, 255, 0);
      ellipse(remX, remY, 1.5, 1.5);
    }   
  
  //Make the trees
  treeCMD()
  
  //Grass base
  fill(gC);
  rect(0,512.5,5000,5000);

    //Make the grass
    grass()  
  
//Character Building
  noStroke();
  scale(0.35);
  
  //Moving Variables X
  x100 = x100 + ctrlMoveX
  x75 = x75 + ctrlMoveX
  x135 = x135 + ctrlMoveX
  x195 = x195 + ctrlMoveX
  x150 = x150 + ctrlMoveX
  x250 = x250 + ctrlMoveX
  x125 = x125 + ctrlMoveX
  x275 = x275 + ctrlMoveX
  
  //Moving Variables Y
  y100 = y100 + ctrlMoveY
  y125 = y125 + ctrlMoveY
  y150 = y150 + ctrlMoveY
  y175 = y175 + ctrlMoveY
  y200 = y200 + ctrlMoveY
  y225 = y225 + ctrlMoveY
  y250 = y250 + ctrlMoveY
  y275 = y275 + ctrlMoveY
  y350 = y350 + ctrlMoveY
  y375 = y375 + ctrlMoveY
  
    //layer 1 (Top of Head)
    fill(10,5,84)
    stroke(10,5,84)
    rect(x100,y100,175,25)

    //layer2 (Face)
    fill(10,5,84)
    stroke(10,5,84)
    rect(x75,y125,225,25)
    fill(0)
    stroke(0)
    rect(x100,y125,175,25)

    //layer 3 (Black Face area)
    fill(10,5,84)
    stroke(10,5,84)
    rect(x75,y150,225,25)
    fill(0)
    stroke(0)
    rect(x100,y150,175,25)

      ///layer 3 (Eyes)
      fill(255,255,255)
      stroke(255,255,255)
      square(x135,y150,25)
      square(x195,y150,25)

    //layer 4 (Hood))
    fill(10,5,84)
    stroke(10,5,84)
    rect(x75,y175,225,25)
    fill(0)
    stroke(0)
    rect(x100,y175,175,25)

    //layer 5 (Hood)
    fill(10,5,84)
    stroke(10,5,84)
    rect(x75,y200,225,25)
    fill(0)
    stroke(0)
    rect(x100,y200,175,25)

    //layer 6 (Hood and Scarf)
    fill(10,5,84)
    stroke(10,5,84)
    rect(x150,y225,150,25)
    fill(0)
    stroke(0)
    rect(x100,y225,175,25)
    fill(10,5,84)
    stroke(10,5,84)
    rect(x100,y225,25,25)
    rect(x250,y225,25,25)
    fill(211,24,24)
    stroke(211,24,24)
    rect(x275,y225,25,25)

    //layer 7 (Scarf)
    fill(211,24,24)
    stroke(211,24,24)
    rect(x125,y250,150,25)
    fill(211,24,24)
    stroke(211,24,24)
    rect(x125,y250,150,25)

    //layer 8,9,10 (Midsection)
    fill(0)
    stroke(0)
    rect(x150,y275,150,25)
    fill(211,24,24)
    stroke(211,24,24)
    rect(x275,y275,25,25)
    fill(4,16,101)
    stroke(4,16,101)
    rect(x125,y275,150,75)

    //layer 11 (Pants)
    fill(4,16,101)
    stroke(4,16,101)
    rect(x125,y350,150,25)
    rect(x125,y375,25,100)
    rect(x250,y375,25,100)
}

//Endscreen (TIMED) function
function endScreen3(){
        scale(0.5);
        clear();
        loop();
  
   //console.log(mouseX, mouseY)
  
     if(score3 > scoreH3){
      noLoop();
      scoreH3 = score3
    }    
  
        background(0);
        star[2] = 10
  
        fill(255);
		textAlign(CENTER);
  
          textSize(125)
          text('Y o u    D i e d !', 675, 450)

          textSize(50)
          textFont("cursive")
          text("Time Lived (sec):", 675 - 100, 500 + 120)
          text(""+ score3, 675 + 200, 500 + 120)
  
          text("Longest Run (sec):", 675 - 100, 500 + 50)
          text(""+ scoreH3, 675 + 200, 500 + 50)
  
          textSize(32.5)
          rectMode(CENTER)

          fill(112)
          rect(675 - 225, 730, 220, 100)
          fill(255)
          textFont("serif")
          text('Play Again', 675 - 225, 500 + 240)

          fill(112)
          rect(675 + 225, 730, 220, 100)
          fill(255)
          text('Title Screen', 675 + 225, 500 + 240) 
  
        rectMode(CORNER)
}


//Selection Screen function
function selScreen(){
    scale(0.5);
    clear();
    loop();
  
 //console.log(mouseX, mouseY)
  
    background(0);
  
        fill(255);
		textAlign(CENTER);
  
          textSize(125)
          textFont("serif")
          text('Select a Mode', 675, 230)


          textSize(32.5)
          rectMode(CENTER)
  
          //Mode 1 - Regular
          fill(255)
          rect(300,500,300,300)
  
          fill(110)
          ellipse(300,500,100,100)
          image(img,265,460,75,75)
  
          fill(112)
          rect(300, 730, 220, 100)
          fill(255)
          text('Normal',300, 500 + 240)
          
          //Mode 2 - Triple Ball
          fill(255)
          rect(700,500,300,300)
          
          fill(110)
          ellipse(695.5,485,220,220)
          image(img,660,475+25,75,75)
          image(img,660-50,395+25,75,75)
          image(img,660+50,395+25,75,75)

          fill(112)
          rect(700, 730, 220, 100)
          fill(255)
          text('Triple Trouble', 700, 500 + 240)
  
          //Mode 3 - Unlimited/Training/Timed
          fill(255)
          rect(1100,500,300,300)
  
          stroke(5)
          ellipse(1100,500,250,250)
          ellipse(1100,500,245,245)
          fill(0)
          
          textSize(25)
          text("12",1100,420)
          text("3",1200,510)
          text("9",1000,510)
          text("6",1100,600)
          line(1100,500,1100,430)
          line(1100,500,1150,560)
  
          noStroke()
          textSize(32.5)
  
          fill(0)
          ellipse(1100,500,11,11)
          fill(255,0,0)
          ellipse(1100,500,10,10)

          fill(112)
          rect(1100, 730, 220, 100)
          fill(255)
          text('Timed', 1100, 500 + 240)
  
  //Tutorial (How to Play Screen) Button
  rectMode(CORNER)
  rect(1270,30,100,100,100,100)
  fill(112)
  ellipse(1320,80,80,80)
  
  textSize(50)
  fill(255)
  text("i", 1320,95)
  
  rectMode(CENTER)
  
  //Speed difficulty
  textSize(32.5)
  text('Difficulty:', 650,925)
  
      if(capSpeed == 40){ 
        fill(255,0,0)
        rect(625,1000,50,50)
        
        fill(255,165,0)
        rect(700,1000,50,50)
        
        fill(255)
        rect(775,1000,60,60)
        fill(0,255,0)
        rect(775,1000,50,50)
        
        fill(0,255,0)
        text('Easy', 770,925)
      }else if(capSpeed == 60){
        fill(255,0,0)
        rect(625,1000,50,50) 
        
        fill(255)
        rect(700,1000,60,60)
        fill(255,165,0)
        rect(700,1000,50,50)
        
        fill(0,255,0)
        rect(775,1000,50,50)
        
        fill(255,165,0)
        text('Medium', 778,925)
      }else if(capSpeed == 80){
        fill(255)
        rect(625,1000,60,60)
        fill(255,0,0)
        rect(625,1000,50,50) 
        
        fill(255,165,0)
        rect(700,1000,50,50)
        
        fill(0,255,0)
        rect(775,1000,50,50)
        
        fill(255,0,0)
        text('Hard', 760,925)
      }
  
        //
        rectMode(CORNER)
}

function tutorialScreen1(){
  var ts = [imgT1, imgT2, imgT3]
  clear()
  loop()
  
  background(0)
  
  noStroke()
  fill(35)
  rectMode(CENTER)
  rect(width/2, height/2-50, 610,410)
  fill(120)
  rect(width/2-145, height/2+210, 300,100)
  fill(255)
  rect(width/2-145, height/2+210, 290,90)
  
  image(imgT1,width/2-300, height/2 -250,600,400)
  fill(0)
  textAlign(CENTER)
  text('Use the Left and Right arrow keys to avoid the ninja stars', width/2-145, height/2+210 )
  
  
  rectMode(CORNER)
}

//------------------------------------------Design Functions-------------------------------------


//Gets a random X position for the ninja star
function randomX(){
  starL[0] = random((x135+400), (x135-400));
  ball2[0] = random((x135+600), (x135-600));
  ball2[1] = random((x135+800), (x135-800));
}

//Ensures that the character does not keep moving when key release
function keyReleased(){
    ctrlMoveX = 0;
}

//Funtion to change screens
function mousePressed(){
  if(screen == 0 && mouseX > 290 && mouseX < 405 && mouseY > 315 && mouseY < 350){ //Begin Button
    noLoop();
    
    restartM();
    screen = 3;
    
    clear();
    redraw();
  }else if(screen == 2 && mouseX > 405 && mouseX < 515 && mouseY > 330 && mouseY < 380){ //Title Screen 1
    restartM();
    screen = 0;
    
    redraw();
  }else if(screen == 2 && mouseX > 155 && mouseX < 265 && mouseY > 330 && mouseY < 380){ //Play Again 1
    noLoop();
    restartM();
    
    score = 0;
    screen = 1;
    
    clear();
    redraw();
  }else if(screen == 3 && mouseX > 95 && mouseX < 205 && mouseY > 340 && mouseY < 390){ //Normal Mode
    screen = 1;
  }else if(screen == 3 && mouseX > 295 && mouseX < 405 && mouseY > 340 && mouseY < 390){ //Triple Trouble Mode
    screen = 4;
  }else if(screen == 3 && mouseX > 495 && mouseX < 605 && mouseY > 340 && mouseY < 390){ //Timed Mode
    timerValue = 0;
    screen = 6;
  }else if(screen == 5 && mouseX > 170 && mouseX < 280 && mouseY > 340 && mouseY < 390){ //Play Again 2
    restartM();
    star[0] = 0;
    star[3] = 0;
    star[4] = 0;
    score2 = 0;
    screen = 4;
  }else if(screen == 5 && mouseX > 395 && mouseX < 505 && mouseY > 340 && mouseY < 390){ //Title Screen 1
    restartM()
    screen = 0
  }else if(screen == 7 && mouseX > 170 && mouseX < 280 && mouseY > 340 && mouseY < 390){ //Death Screen replay (Timed)
    restartM();
    timerValue = 0;
    screen = 6;
  }else if(screen == 7 && mouseX > 395 && mouseX < 505 && mouseY > 340 && mouseY < 390){ //Death Screen quit (Timed)
    restartM(); 
    screen = 0;
  }else if(screen == 3 && mouseX > 300 && mouseX < 325 && mouseY > 490 && mouseY < 515){ //Difficulty Selector (Hard)
    capSpeed = 80
    incSpeed = 10
  }else if(screen == 3 && mouseX > 335 && mouseX < 360 && mouseY > 490 && mouseY < 515){ //Difficulty Selector (Medium)
    capSpeed = 60
    incSpeed = 8
  }else if(screen == 3 && mouseX > 375 && mouseX < 400 && mouseY > 490 && mouseY < 515){ //Difficulty Selector (Easy)
    capSpeed = 40
    incSpeed = 5
  }else if(screen == 3 && mouseX > 635 && mouseX < 685 && mouseY > 15 && mouseY < 65){ //Tutorial Screen Button
    screen = 8
  }
}

//Night sky gradient function
function setGradient(x, y, w, h, c1, c2, axis) {
  noLoop()
  var col1 = color(11,11,49);
  var col2 = color(204,51,0);
  noFill();
  
  if (axis == "Y") {  // Top to bottom gradient
    for (let i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(col1, col2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
}

//Grass blades function
function grass(){
  var grH = 570;
  for (let gr = 0; gr < 1100; gr += 7.5){
      fill(gC)
      ellipse(gr,grH,10,160)
      grH = random(570,580)
  }
}

//Trees function
function treeCMD(x, y){
  push();
  translate(25,375);

  fill(42,47,35)
  beginShape();
    vertex(0, -140);
    vertex(-40, -60);
    vertex(-20, -60);
    vertex(-80, 10);
    vertex(-40, 10);
    vertex(-110, 100);
    vertex(-20, 100);
    vertex(-20, 140);
    vertex(20, 140);
    vertex(20, 100);
    vertex(110, 100);
    vertex(40, 10);
    vertex(80, 10);
    vertex(20, -60);
    vertex(40, -60);
  endShape(CLOSE);

  fill(43,29,20)
  rectMode(CENTER)
  rect(0, 120, 40,50)
  
  pop();
  
  push();
  translate(125,375);

  fill(42,47,35)
  beginShape();
    vertex(0, -140);
    vertex(-40, -60);
    vertex(-20, -60);
    vertex(-80, 10);
    vertex(-40, 10);
    vertex(-110, 100);
    vertex(-20, 100);
    vertex(-20, 140);
    vertex(20, 140);
    vertex(20, 100);
    vertex(110, 100);
    vertex(40, 10);
    vertex(80, 10);
    vertex(20, -60);
    vertex(40, -60);
  endShape(CLOSE);
  
  fill(43,29,20)
  rect(-20, 100, 40,50)
  
  pop();
  
}

//Restart function
function restartM(){
  x100 = 100 + startX 
  x75 = 75 + startX
  x135 = 135 + startX
  x195 = 195 + startX
  x150 = 150 + startX
  x250 = 250 + startX
  x125 = 125 + startX
  x275 = 275 + startX

  y100 = 100 + startY
  y125 = 125 + startY
  y150 = 150 + startY
  y175 = 175 + startY
  y200 = 200 + startY
  y225 = 225 + startY
  y250 = 250 + startY
  y275 = 275 + startY
  y350 = 350 + startY
  y375 = 375 + startY

  score = 0
  score2 = 0
  score3 = 0
  ctrlMoveX = 0
  
  dashM = 3
  
  star[0] = 0
  star[3] = 0
  star[4] = 0
}

//Timer function
function timeIt() {
  if (timerValue > -1) {
    timerValue++;
  }
}

//Dashing function
function keyPressed() {
  if (keyCode === 68 && dashM == 3) {
    x100 = x100 + dashV
    x75 = x75 + dashV
    x135 = x135 + dashV
    x195 = x195 + dashV
    x150 = x150 + dashV
    x250 = x250 + dashV
    x125 = x125 + dashV
    x275 = x275 + dashV

    y100 = 100 + startY
    y125 = 125 + startY
    y150 = 150 + startY
    y175 = 175 + startY
    y200 = 200 + startY
    y225 = 225 + startY
    y250 = 250 + startY
    y275 = 275 + startY
    y350 = 350 + startY
    y375 = 375 + startY
    
    dashM = 0
  } else if (keyCode === 65 && dashM == 3) {
    x100 = x100 - dashV 
    x75 = x75 - dashV
    x135 = x135 - dashV
    x195 = x195 - dashV
    x150 = x150 - dashV
    x250 = x250 - dashV
    x125 = x125 - dashV
    x275 = x275 - dashV

    y100 = 100 + startY
    y125 = 125 + startY
    y150 = 150 + startY
    y175 = 175 + startY
    y200 = 200 + startY
    y225 = 225 + startY
    y250 = 250 + startY
    y275 = 275 + startY
    y350 = 350 + startY
    y375 = 375 + startY
    
    dashM = 0
  }
}
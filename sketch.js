

var player;
var borda;
var pratileira1,pratileira2,pratileira3;
var inventario1,inventario2,inventario3,inventario4,inventario5;
var chocolate;
var pegouchocolate = false;
var farinha
var pegoufarinha = false
var ovo 
var pegouovo = false
var leite 
var pegouleite = false
var manteiga  
var pegoumanteiga = false

function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  player = createSprite(850,280,50,50);
  player.shapeColor = "red";
  
  borda = createEdgeSprites()

pratileira1 = createSprite(580,130,400,120)
pratileira2 = createSprite(580,410,400,120)
pratileira3 = createSprite (180,270,120,400)

inventario1 = createSprite(width-100,80,100,100)
inventario1.shapeColor = "brown"
inventario2 = createSprite(width-100,200,100,100)
inventario2.shapeColor = "yellow"
inventario3 = createSprite(width-100,320,100,100)
inventario3.shapeColor = "gray"
inventario4 = createSprite(width-100,440,100,100)
inventario4.shapeColor = "pink"
inventario5 = createSprite(width-100,560,100,100)
inventario5.shapeColor = "purple"

chocolate = createSprite(50,50,20,20)
chocolate.shapeColor = "brown"

farinha = createSprite (400,500,20,20)
farinha.shapeColor = "gray"

ovo = createSprite(300,400,20,20)
ovo.shapeColor = "yellow"

leite = createSprite(800,600,20,20)
leite.shapeColor="pink"

manteiga = createSprite(700,30,20,20)
manteiga.shapeColor="purple"

}

function draw() {
  background(0); 
if (keyDown(LEFT_ARROW)){
  player.x -=10
}
if (keyDown(RIGHT_ARROW)){
  player.x +=10
}
if(keyDown(UP_ARROW)){
  player.y -=10
}
if(keyDown(DOWN_ARROW)){
  player.y +=10
}
 player.collide(borda)

player.collide(pratileira1)
player.collide(pratileira2)
player.collide(pratileira3)



if (player.isTouching(chocolate)&&keyDown("E")){
  pegouchocolate = true
}
if (pegouchocolate){
  chocolate.x = player.x; 
  chocolate.y = player.y + 30; 
}
if (pegouchocolate&&keyDown("R")){
  pegouchocolate = false
  }


  if (player.isTouching(farinha)&&keyDown("E")){
    pegoufarinha = true
  }
  if (pegoufarinha){
    farinha.x = player.x; 
    farinha.y = player.y + 30; 
  }
  if (pegoufarinha&&keyDown("R")){
    pegoufarinha = false
    }

    if (player.isTouching(ovo)&&keyDown("E")){
      pegouovo = true
    }
    if (pegouovo){
      ovo.x = player.x; 
      ovo.y = player.y + 30; 
    }
    if (pegouovo&&keyDown("R")){
      pegouovo = false
      }

      if (player.isTouching(manteiga)&&keyDown("E")){
        pegoumanteiga = true
      }
      if (pegoumanteiga){
       manteiga.x = player.x; 
        manteiga.y = player.y + 30; 
      }
      if (pegoumanteiga&&keyDown("R")){
        pegoumanteiga = false
        }


      if (player.isTouching(leite)&&keyDown("E")){
        pegouleite = true
      }
      if (pegouleite){
        leite.x = player.x; 
        leite.y = player.y + 30; 
      }
      if (pegouleite&&keyDown("R")){
        pegouleite = false
        }




      if (chocolate.isTouching(inventario1)){
         inventario1.shapeColor = "green"
         chocolate.destroy()
         pegouchocolate = false
         }


         if (ovo.isTouching(inventario2)){ 
        inventario2.shapeColor = "green"
         ovo.destroy()
         pegouovo = false
         }


      if (farinha.isTouching(inventario3)){
        inventario3.shapeColor ="green"
        farinha.destroy()
          pegoufarinha = false
       
      }
        if (leite.isTouching(inventario4)){
          inventario4.shapeColor =" green"
          leite.destroy ()
          pegouleite = false

        }

        if (manteiga.isTouching(inventario5)){
          inventario5.shapeColor = "green"
          manteiga.destroy()
          pegoumanteiga = false
        }


     obstaculo  ()
  drawSprites();
}
  
 function obstaculo(){
  if (frameCount % 80 ==0){
    var ob =createSprite (width/2,height/2,50,100)
    ob.lifetime=100
    ob.x = random (50,width-200 )
    
  }
 }
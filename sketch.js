var corredor, corredorIMG
var pistaDeCorrida, pistadeCorridaIMG
var obstaculo, obstaculoIMG
var estadorDeJogo = play
function preload(){
corredorIMG = loadImage("corredor.png")
pistaDeCorridaIMG = loadImage("pista de corrida.jpg")
obstaculoIMG = loadImage("obstáculo.jpg")
}

function setup() {
 createCanvar(400,400)

 corredor = createSprite(100,200) 
 corredor.addImage("corredor",corredor.png)
 
 
 
 pistaDeCorrida = createSprite(200,200)
 pistaDeCorrida = addImage("pista",pistadecorrida.jpg)
}

function draw() {
if (pistaDeCorrida.x<0){
 pistaDeCorrida.x = 20    
}
if (keyDown("LEFT_ARROW")) {
  corredor.positionX += 4    
}
if (keyDOwn("RIGHT_ARROW")) {
  corredor.positionX += 4  
}
drawSprites()
}
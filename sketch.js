var database;
var form;
var playerCount = 0;
var PlayersArr;
var game, player;
var gameState = 0;
var runner1, runner2, runner3;
var roadIMG;
var list;

// 39 items in total
var chocoCake, mcCain, iceCream, coldDrink, broccoli, candles;
var paperBag, potatoes, peas, lettuce, cheeseCubes, Carrots, leaks;
var cucumber, plant, book, candies, chocolates, pens, paints;
var pomegranate, romanLettuce, vinegar, lemon;
var candyFloss, marshmallows, macaron, freshCream;
var juice, grapes, apple, orange, melon, donought, burger, pasta, pizza;
var strawberries, biscuits;

var shop1, shop2, shop3, shop4, shop5, shop6, shop7, shop8;

function preload(){

  roadIMG = loadImage("road.jpg")

}

function setup(){
  createCanvas(displayWidth, displayHeight*7);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

  list = createSprite(displayWidth + 900, 130, 400, 400)
  list.shapeColor = "white"

}

function draw(){
    background(255)

    if(playerCount === 3){
      gameState = 1;
      game.update(1);
    }

    if(gameState === 1){
      game.play();
      background(roadIMG);

      textSize(20)
      text("YOUR ITEMS :", displayWidth/2 + 300, 100)

      text("1) 1 Chocolate Cake", displayWidth/2 + 300, 120)
      text("2) 5 Kesar-Pista Ice-Cream", displayWidth/2 + 300, 140)
      text("3) 5 Cold Drink Bottles", displayWidth/2 + 300, 160)
      text("4) 1 McCain Fries Packet", displayWidth/2 + 300, 180)
      text("5) 1 Broccoli, 1 Pomegranate, 1 Roman Lettuce, Vinegar, Lemon", displayWidth/2 + 300, 200)
      text("6) 10 Candles", displayWidth/2 + 300, 220)
      text("7) 5 Paper Bags", displayWidth/2 + 300, 240)
      text("8) Potatoes, Peas, Carrots, \n Lettuce, Leaks, \n 3 Chesse Cubes", displayWidth + 900, 260)
  


    }

}

var hypnoticBall, database;
var position;
var form,game,player;
var playerCount = 0
var gameState = 0
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  form = new Form()

  form.display();

}
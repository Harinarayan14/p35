var gamestate = 0;

function setup() {
  database = firebase.database();
  createCanvas(800,400);
  question = new Questions();           

}

function draw() {
  background(255,255,255);  
  question.update();
  question.display();
}
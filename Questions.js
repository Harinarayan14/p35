class Questions{
    constructor(){
        this.input = createInput("Type Yes or No");
        this.input1 = createInput("Email-id");
        this.button = createButton("Next");
        this.title = createElement("h2");
        this.question = createElement("h5");
        this.title1 = createElement("h2");
    }
    display(){
    this.title.html("Survey");
    this.title.position(400,50);
    this.button.position(450,250);
    this.question.position(350,150);
    this.button.mousePressed(function(){
        gamestate++;
    })
    }
    /*get(){
        var answerRef = database.ref('playerCount/1');
        answerRef.on("value",function (data){
          answer = data.val();
        })
      }*/
update(){
    this.input.position(350,200);
    this.input1.position(350,200);
    this.answer = this.input.value();
    this.answer1 = this.input1.value();
    if(gamestate===0){
        this.title.html("Survey");
        database.ref("/").update({
            votersEmail: this.answer1
            });  
    }
if(gamestate === 1){
    this.input1.hide();
     this.question.html("Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
    database.ref("votersAnswer").update({
    1: this.answer
    });}
if(gamestate === 2){
    this.input1.hide();
    this.question.html("Would you be willing to contribute a small amount every month for such a program?");
     database.ref("votersAnswer").update({
     2: this.answer
            });}
    if(gamestate === 3){
        this.input1.hide();
     this.question.html(" How much per month would you be willing to pay?");
     this.input.html("Amount");
     this.button.html("Finish");  
     database.ref("votersAnswer").update({
     3: this.answer
     });}
     
     if(gamestate === 4){
        this.input1.hide();
    this.question.hide();
    this.input.hide();
    this.button.hide();
    this.title.hide();
    this.title1.html("Thanks for completing the survey.");
    this.title1.position(400,200);
     }
      }
}
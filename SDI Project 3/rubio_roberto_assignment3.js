//  Roberto Rubio
//  SDI 1501
//  01/23/15
//  Project 3


//My Variables

var hungry = true;



//Procedure

function beingSelfish (wtd){
  if (wtd === true) {
    console.log("I know, I know. I'm just being a jerk.");
  } else{
    console.log("Yeah I would like to see my friends but I think my family will get upset.")
  }
};

//Function

function ask (){
    var question = confirm("Well I am hungry! Are you hungry?");
    return question;
};

//Boolean Function

function checkAnswer (are, hun){
    var badAnswer = false;
    while (!badAnswer || false) {
        var askAgain = confirm("Are you sure you aren't hungry?");
        if (askAgain === true) {
            console.log("I'm glad you said that!");
            badAnswer = true;
        }
    } 
};

//Number Function

function callFamily (fam){
    for (family.Blood; family.blood < family.Blood.length; family.Blood ++){
        console.log(family.Blood);
    }
    return family.Blood;
};


//*********************************************************
//Main Code

console.log("It's Sunday and that means family time.");

//Prompt

var whatToDo = confirm("Do you think I should hang out with my family today?");

//Procedure Call

beingSelfish(whatToDo);

//confirm Function Call

var areHungry = ask();

//Boolean Funciton Call

checkAnswer(areHungry, hungry);

var familyCalls = callFamily(family.Blood);

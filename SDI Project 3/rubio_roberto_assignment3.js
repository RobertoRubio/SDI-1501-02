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

function askFamily (){
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
/*

//Number Function

function upLoad (photos){
      for (photos; photos < 11; photos ++){
        console.log("Uploading " + photos + " photo.");
      }
      var totalPhoto = photos -1;
        return totalPhoto;
};


//Promtp for String Function

function nameFriends(){
    var askNames = prompt("Who are those 2 people in this photo?", "Robert & Benjamin");
    return askNames;
};


//String Function

function revelation(n){
    var reveal = alert("Oh yeah it is " + n + " in this photo!");
    return reveal;
};
*/

//*********************************************************
//Main Code

console.log("It's Sunday and that means family time.");

//Prompt

var whatToDo = confirm("Do you think I should hang out with my family today?");

//Procedure Call

beingSelfish(whatToDo);

//confirm Function Call

var areHungry = askFamily();

//Boolean Funciton Call

checkAnswer(areHungry, hungry);


/*



//Number Function Return

var finishedUpload = upLoad(maxPhotos);
alert("We have successfully uploaded " + finishedUpload + " photos to " + social + " !");

//Prompt For String Function Return

var names = nameFriends();

//String Function Return
var rev = revelation(names);


//Final Output
alert("I think we are all done here. Thanks so much for helping me post these " + finishedUpload + " photos, figuring out that " + names + " were both in my photo and for putting up with me. Bye!");*/
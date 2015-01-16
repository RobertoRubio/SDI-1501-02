//  Roberto Rubio
//  SDI 1412
//  12/05/14
//  Project 2


//My Variables
var social = "Google+";
var theBest = true;
var maxPhotos = 1;


//Procedure

function getHelp (mp) {
    if (mp === social) {
        alert("I know I love it too!");
    }  else {
        alert("Eh, it's ok but I use " + social + " more.");
    }
 };


//Confirm Function

function getAnswer (){
    var askIfReady = confirm("Are you ready to start posting these pics?");
    return askIfReady;
};


//Boolean Function

function checkAnswer (ready,best){
    while (!ready && best) {
        var askAgain = ifReady;
        return askAgain;
    } alert("OK Let's get posting.");
};
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
    reveal = alert("Oh yeah it is " + n + " in this photo!");
    return reveal;
};


//*********************************************************
//Main Code

alert("I have a bunch of pictures I want to post online and I'd like you to help me out.");

//Prompt
var myPrompt = prompt("Do you think " + social + " or Facebook would be better to use for this project?");

//Procedure call

getHelp(myPrompt);

//confirm Function Call

var ifReady = getAnswer();

//Boolean Function Call

checkAnswer(ifReady, theBest);

//Number Function Return

var finishedUpload = upLoad(maxPhotos);
alert("We have successfully uploaded " + finishedUpload + " photos to " + social + " !");

//Prompt For String Function Return

var names = nameFriends();

//String Function Return
var rev = revelation(names);


//Final Output
alert("I think we are all done here. Thanks so much for helping me post these " + finishedUpload + " photos, figuring out that " + names + " were both in my photo and for putting up with me. Bye!");
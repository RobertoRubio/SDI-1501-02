//  Roberto Rubio
//  SDI 1412
//  12/05/14
//  Project 2


//My Variables
var social = "Google+";
var theBest = true;
var maxPhotos = 1;


//Procedure

function getHelp (p) {
    if (p === social) {
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




//Number Function

function upLoad(mp){
      for (mp; mp < 11; mp ++){
        console.log("Uploading " + mp + " photo.");
      }
      var totalPhoto = mp -1;
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
/*
var otherFriends = function () {
    var otherFriendsNames = prompt ("Hey what were the other 2 people's names?", "name & name");
    everyone = "Oh yeah that's right their names are " + otherFriendsNames + ". I almost forgot.";
    return everyone;
};
*/

//*********************************************************
//Main Code

alert("I have a bunch of pictures I want to post online and I'd like you to help me out.");

//Prompt
var myPrompt = prompt("Do you think " + social + " or Facebook would be better to use for this project?");

//Procedure call

getHelp(myPrompt);

//confirm Function Call

var ready = getAnswer();
console.log(ready);

//Boolean Function Call
//Number Function Return

alert("lets start uploading!");
var finishedUpload = upLoad(maxPhotos);
alert("We have successfully uploaded " + finishedUpload + " photos to " + social + " !");

//Prompt For String Function Return

var names = nameFriends();

//String Function Return
var rev = revelation(names);


//Final Output
alert("I think we are all done here. Thanks so much for helping me post these " + finishedUpload + " photos, figuring out that " + names + " were both in my photo and for putting up with me. Bye!");
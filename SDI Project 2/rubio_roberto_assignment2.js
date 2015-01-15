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
        console.log("I know I love it too!");
    }  else {
        console.log("Eh, it's ok but I use " + social + " more.");
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
/*var numberOfPhotos = function () {
    var countPhotos = prompt ("How many photos are we uploading?");
    countPhotos = parseInt(countPhotos);
    return countPhotos;
};

function photoUpload(cp){
    for (cp; cp >= 0; cp --){
        console.log(cp + " photos are left to upload.");
    }
};
  88888888888888888888888888888888888888888888888 
   /*
        var totalPhotos = console.log"Alright we uploaded all " + cp + " of our photos!";
        return totalPhotos;
};


//String Function
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

var askIfReady = getAnswer();
console.log(askIfReady);

//Boolean Function Call
alert("lets start uploading!");
var totalPhoto = upLoad(maxPhotos);
alert("You have successfully uploaded " + totalPhoto + " photos to " + social + " !");
//Number Function Return
/*
var countPhotos = numberOfPhotos();
alert("Let's get started!");
photoUpload(countPhotos);
alert("you have successfully uploaded all " + countPhotos + " of your photos!");
88888888888888888888888888888888888888888888888888888888888888888888888888888
*/

//console.log(finalCount);

/*//String Function Return
var nameAll = otherFriends();
console.log(nameAll);

//Final Output
console.log("I think we are all done here. Thanks so much for helping me post and tag this picture to " + social + ". And for helping remember everyone's names.");
*/
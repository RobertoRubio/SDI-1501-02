//  Roberto Rubio
//  SDI 1412
//  12/05/14
//  Project 2


//My Variables
var social = "Google+";
var theBest = true;
var numFriends = 5;


//Procedure

function getHelp (p) {
    if (p === social) {
        console.log("I know I love it too!");
    }  else {
        console.log("Eh, it's ok but I use " + social + " more.");
    }
 };


//Boolean Function






/**********BAD CODE********* BAD CODE***********
    var returnBoolean = function (myConfirm, theBest) {
    var movingON;
    while (myConfirm != theBest) {
        if (myConfirm && theBest) {
            console.log("OK OK I think I've made my point.");
        } else {
            var askAgain = confirm ("Let's try this again. Is'nt " + social + " the best?");
 console.log("Just say it is already. Please!");
 }
 }
 movingON = "Let's move on then. Obviously " + social + " being the best is " + myConfirm + ".";
        return movingON;
};


//Number Function
var taggedFriends = function () {
    var countFriends = prompt ("How many friends are in the photo? That way I can tag them.", "1-5");
    countFriends = parseInt(countFriends);
    for (var countFriends; countFriends < numFriends; countFriends ++){
        var friendsLeft = numFriends - countFriends;
        console.log("I think I see " + friendsLeft + " more friends in this picture.");
    };
        totalFriends = "Alright we found and tagged all " + numFriends + " of our friends in the photo!";
        return totalFriends;
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

//Confirm

var askIfReady = confirm("Are you ready to start posting these pics?");


//Boolean Function Return



//console.log(getGoing);

/*//Number Function Return
var finalCount = taggedFriends();
console.log(finalCount);

//String Function Return
var nameAll = otherFriends();
console.log(nameAll);

//Final Output
console.log("I think we are all done here. Thanks so much for helping me post and tag this picture to " + social + ". And for helping remember everyone's names.");
*/
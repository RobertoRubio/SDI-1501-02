//Roberto Rubio
//SDI 1501
//Project 4
//Jan. 28 2015


//Global Variables
var phoneNumber = prompt("Please enter your full phone number.", "example: 123-456-7890");//ask for input
var phoneReturn;//return input from phone prompt
var string = prompt("Please enter your full name in lowercase letters.", "example: roberto manuel rubio");//ask for name
var stringReturn;

//Problem-Solving Functions

//Ph# String Function

var checkNumber = function(phoneNum) {
    var phLength = phoneNum.length;
    var areaCode = phoneNumber.substring(0,3);//isolating area code of ph#
    var firstThree = phoneNum.substring(4,7);//isolating 1st 3 of ph#
    var lastFour = phoneNumber.substring(8,12);//isolating last 4 of ph#
    var firstDash = phoneNum.substring(3,4);//isolating 1st dash of ph#
    var secondDash = phoneNum.substring(7,8);//isolating 2nd dash of ph#
    
    if ((isNaN(areaCode)) //checking to see if structure of input are numbers in the right spots and dashes in the right place
        || (firstDash != "-")
        || (isNaN(firstThree))
        || (secondDash != "-")
        || (isNaN(lastFour))) 
        {
        console.log(false); //final output from function checking number input.
    } else {
        console.log(true);  
    } 
};

//String Capitalizer

var stringCapitalizer = function (str) { //
    var split = str.split(" ");
    var newString = "";
    for (var i = 0, j = split.length; i < j; i++) { //piece of code that will check length input and split the 1st letter of each word and replace it with a capital letter
    var newSplitString = split[i].replace(split[i].charAt(0),(split[i].charAt(0)).toUpperCase());
    newString = newString.concat(newSplitString + " ");
    }
    return newString;
    
};





//Main Code
function ask (){ //funciton to run a prompt to gain input
    phoneNumber;
    return phoneNumber;
};

phoneReturn = checkNumber(phoneNumber); //calling of checkNumber function


function askSecondTime (){ //funciton to run a prompt to gain input
    string;
    return string;
};

stringReturn = stringCapitalizer(string); //calling of stringCapitalizer function
console.log(stringReturn); //final output of results from stringCapitalizer funciton

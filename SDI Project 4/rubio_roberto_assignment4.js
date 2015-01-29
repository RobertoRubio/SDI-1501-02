//Roberto Rubio
//SDI 1501
//Project 4
//Jan. 28 2015


//Global Variables
var phoneNumber = prompt("Please enter your full phone number", "example: 123-456-7890");
var phoneReturn;

//Problem-Solving Functions

//Ph# String Function
function ask (){
    phoneNumber;
    return phoneNumber;
};
var checkNumber = function(phoneNum) {
    var phLength = phoneNum.length;
    var areaCode = phoneNumber.substring(0,3);
    var firstThree = phoneNum.substring(4,7);
    var lastFour = phoneNumber.substring(8,12);
    var firstDash = phoneNum.substring(3,4);
    var secondDash = phoneNum.substring(7,8);
    
    if ((isNaN(areaCode))
        || (firstDash != "-")
        || (isNaN(firstThree))
        || (secondDash != "-")
        || (isNaN(lastFour)))
        {
        alert(false);
    } else {
        alert(true);  
    } 
};




//Main Code

phoneReturn = checkNumber(phoneNumber);

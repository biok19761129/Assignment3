//APP 1
//The Rock, Paper, Scissors Game
/*
    var  userChoice;
    userInput(); // function to call if user enters no data or wrong data.
    function userInput(){ 

        userChoice = prompt("Please enter Rock, Paper, or Scissors"); 
        if (userChoice.toLowerCase() == "rock" || userChoice.toLowerCase() == "paper" || userChoice.toLowerCase() == "Scissors")
            {
                return userChoice; 
            } else {
                userInput();
            }
    }
    // computer choice is converted to string "Rock "Paper  or Scissors.

    var computerChoice = Math.floor((Math.random() * 3)); 
        switch (computerChoice)
        {
            case 0:
                computerChoice = "rock";
                break;
            case 1:
                computerChoice = "paper";
                break;
            default:
                computerChoice = "scissors";
        }

    //Show user and computer choices in console
    window.console.log("User Choice is: " + userChoice + " And Computer Choice is: " + computerChoice);

    // if tie show message if not go to switch block statement.
    if (userChoice.toLowerCase() === computerChoice) { window.alert("You Chose: " + userChoice + " and the Computer Chose: " + computerChoice + ". This is a TIE" )} 
    else {

        switch (userChoice.toLowerCase())
            {
                case "rock":
                if (computerChoice == "paper") {window.alert("You Chose: " + userChoice + " and the Computer Chose: " + computerChoice +". \n Paper covers rock. YOU LOST!!")}
                if (computerChoice == "scissors") {window.alert("You Chose: " + userChoice + " and the Computer Chose: " + computerChoice +". \n Rock destroys scissors. YOU WIN!!")}
                break;

                case "paper":
                if (computerChoice == "rock") {window.alert("You Chose: " + userChoice + " and the Computer Chose: " + computerChoice +". \n Paper covers rock. YOU WIN!!")}
                if (computerChoice == "scissors") {window.alert("You Chose: " + userChoice + " and the Computer Chose: " + computerChoice +". \n Scissors cut paper. YOU LOST!!")}
                break;

                case "scissors":
                if (computerChoice == "rock") {window.alert("You Chose: " + userChoice + " and the Computer Chose: " + computerChoice +". \n Rock destroys scissors. YOU LOST!!")}
                if (computerChoice == "paper") {window.alert("You Chose: " + userChoice + " and the Computer Chose: " + computerChoice +". \n Scissors cut paper. YOU WIN!!")}
                break;    
            }


        }// end if

*/









//APP 2 Basic Calculator
/*
    // set app variables
    var userFirstNumer;
    var userSecondNumber;
    var userOperator;
    var result;

    // function to call if user enters no operator or wrong operator.
    userInput(); 

        function userInput(){ 
            // ask user for numbers and operator
            userFirstNumer= prompt("Please enter number");
            userSecondNumber = prompt ("Please enter a second number");
            userOperator = prompt("Please type and operator: +, - , * or /"); 

            //Validating the operator
            if (userOperator.toLowerCase() == "+" || userOperator.toLowerCase() == "-" || userOperator.toLowerCase() == "*" || userOperator.toLowerCase() == "/")
                {
                    //If user input is ok call calcultate function
                   result = calculate (Number(userFirstNumer), Number(userSecondNumber), userOperator);

                } else {
                    //If user input is NOT ok, alert and re-call funtion.
                    window.alert("Please type a valid operator");
                    userOperator ="";
                    userInput();
                }
        }


    function calculate(n1,n2,oper) {
            switch (oper)
            {
                case "+":
                    return n1 + n2;
                    break;
                case "-":
                    return n1-n2;
                    break;
                case "*":
                    return n1*n2;
                    break;
                case "/":
                   return n1/n2;
            }
        }
    //show resultl of operation.
    window.alert( userFirstNumer + " " + userOperator +" " +userSecondNumber + " = " + result)

*/






//Death by JavaScript
//APP 1 returns a passed string with letters alphabeticaly 
/*
    var returnedValue = alphaOrder("webmaster");

    function alphaOrder(str)
        {
            strLenth = str.length;
            var letters = [];
            var i;

            for (i=0; i< strLenth ; i++)
                {
                letters[i]=(str[i]);
                }
                return letters.sort().join("");
        }

    window.console.log(returnedValue);
*/

//APP 2
//converts the first letter of each word to to upper case 
/*
    var returnedValue = uperCase("the quick brown fox");

    function uperCase(str)
        {
            
            var myArray = str.split(" ");
            myArrayLenght = myArray.length;
            var i;
            
            for (i=0; i < myArrayLenght; i++)
                {
                    myArray[i] = myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1);
                }
            return myArray.join(" ");
        }
window.console.log(returnedValue);
*/

//APP 3
//counts the number of vowels 
/*
    var returnedValue = numVowels("the quick brown fox");

    function numVowels(str)
        {
            var numOfVowels = str.match(/[aeiou]/g);
            return numOfVowels.length;
        }
window.console.log(returnedValue);
*/








//APP 4 return a password ID String
/*
 var returnedValue = generateID();
 
 function generateID()
        {
        var randomNumber;
        var characterID;
        var arrayOfCharacters =[];
        var i=1;
           while (i<8)
                {
                    randomNumber = Math.floor(Math.random() * 122);
                    if(randomNumber >= 99 && randomNumber <= 122 || randomNumber >=65  &&  randomNumber <=90 )
                        {
                            characterID = String.fromCharCode(randomNumber);
                            i++;
                            arrayOfCharacters.push(characterID);
                        }
                    
               }
            
           return arrayOfCharacters.join("");
        }
 
window.console.log(returnedValue);

*/

//APP 5 Longest Country Name

var contries = ["Australia", "Germany", "United States of America", "Spain"];

var returnedValue = longestContryName(contries);

function longestContryName(mylist)
        {
            var mylistLenght = mylist.length;
            var i;
            var tmp; // holds the current longer contry on the array
            var maxValue = 0; // contains the contry with more letters in the name
            for (i=0; i < mylistLenght ;i++)
                {
                    if( mylist[i].length > maxValue)
                        {
                            maxValue = mylist[i].length;
                            console.log(maxValue);
                            tmp = mylist[i];
                        }
                }
                
            return tmp;
        }
 
window.console.log(returnedValue);

















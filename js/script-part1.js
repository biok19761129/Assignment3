//APP 1
/*
    //Show second movie on the list
    var movies = ["Harry Potter1", "Harry Potter 2", "Harry Potter 3", "Harry Potter 4", "Harry Poter 5"];

    window.console.log(movies[1]);
*/

//APP 2
// show first movie on the array
/*
    var movies = [];
    movies[0] = "Rocky II";
    movies[1] = "Shark";
    movies[2] = "The color Purple";
    movies[3] = "The pianist";
    movies[4] = " In to the Wild";

    window.console.log(movies[0]);
*/

//APP 3
// Add element and display lenth of array
/*
    var movies = [];
    movies[0] = "Rocky II";
    movies[1] = "Shark";
    movies[2] = "The color Purple";
    movies[3] = "The pianist";
    movies[4] = " In to the Wild";
    
    movies.splice(2, 0, "Harry Potter");
    window.console.log(movies);
    window.console.log( movies.length);
*/    

//APP 4
/* Remove first element of the array
    var movies = [];
    movies[0] = "Rocky II";
    movies[1] = "Shark";
    movies[2] = "The color Purple";
    movies[3] = "The pianist";
    movies[4] = "In to the Wild";

    movies.shift();
    window.console.log(movies);
*/

//APP 5
/* Use For loop to iterate throught the array
    var movies = [];
    movies[0] = "Rocky II";
    movies[1] = "Shark";
    movies[2] = "The color Purple";
    movies[3] = "The pianist";
    movies[4] = " In to the Wild";
    var i;
    for (i=0; i< movies.length; i++)
        { 
            window.console.log(movies[i]);
        }
*/

//APP 6
/* use for in to iterate throught the array
    var movies = [];
    movies[0] = "Rocky II";
    movies[1] = "Shark";
    movies[2] = "The color Purple";
    movies[3] = "The pianist";
    movies[4] = "In to the Wild";
    var x;
    for (x in movies) 
        {
            console.log("Title: "+ movies[x]);
        }
*/

//APP 7
/* sort array
    var movies = [];
    movies[0] = "Rocky II";
    movies[1] = "Shark";
    movies[2] = "The color Purple";
    movies[3] = "Harry Potter";
    movies[4] = "In to the Wild";
    movies.sort();
    var x;
    for (x in movies) 
        {
            console.log( "Title: "+ movies[x]);
        }
*/
//APP 8
    /* Sisplay members of the array formated as described
    var movies = [];
    movies[0] = "Rocky II";
    movies[1] = "Shark";
    movies[2] = "The color Purple";
    movies[3] = "Harry Potter";
    movies[4] = "In to the Wild";

    var leastFavMovies=["Lord of the Rings","Mean girls","Spartacus"];
    
    window.console.log("Movies I like: \n\n" + movies.join("\n").concat(" \n...\n\nMovies I regret watching \n\n")+ leastFavMovies.join("\n"));

    */

//APP 9
// concatenate the arrays and display in reverse sort order.
/*
    var movies = [];
    movies[0] = "Rocky II";
    movies[1] = "Shark";
    movies[2] = "The color Purple";
    movies[3] = "Harry Potter";
    movies[4] = "In to the Wild";

    var leastFavMovies=["Lord of the Rings","Mean girls","Spartacus"];
    movies = movies.concat(leastFavMovies);
    window.console.log(movies.reverse().sort());
*/

//APP 10
/* Return last item of the array
    var movies = [];
    movies[0] = "Rocky II";
    movies[1] = "Shark";
    movies[2] = "The color Purple";
    movies[3] = "Harry Potter";
    movies[4] = "In to the Wild";

    var leastFavMovies=["Lord of the Rings","Mean girls","Spartacus"];
    movies = movies.concat(leastFavMovies).reverse().sort();

    window.console.log(movies[movies.length -1]);
*/

//APP 11
/* Return first item of the array
    var movies = [];
    movies[0] = "Rocky II";
    movies[1] = "Shark";
    movies[2] = "The color Purple";
    movies[3] = "Harry Potter";
    movies[4] = "In to the Wild";

    var leastFavMovies=["Lord of the Rings","Mean girls","Spartacus"];
    movies = movies.concat(leastFavMovies).reverse().sort();

    window.console.log(movies[0]);
*/

//APP 12
/*
    var movies = [];
    movies[0] = "Rocky II";
    movies[1] = "Shark";
    movies[2] = "The color Purple";
    movies[3] = "Harry Potter";
    movies[4] = "In to the Wild";

    var leastFavMovies=["Lord of the Rings","Mean girls","Spartacus"];
    movies = movies.concat(leastFavMovies).reverse().sort();
    //window.console.log(movies);// INITIAL OUTPUT

    var donTLikeArray =[];// Stores index of movies I don't like

    donTLikeArray[0] = movies.indexOf("Lord of the Rings");
    donTLikeArray[1] = movies.indexOf("Mean girls");
    donTLikeArray[2] = movies.indexOf("Spartacus");
    
    movies[donTLikeArray[0]] = "Batman Begin";
    movies[donTLikeArray[1]] = "Spiderman";
    movies[donTLikeArray[2]] = "Hulk";

    window.console.log(movies);// FINAL OUTPUT
*/

//APP 13
/* associative arrays and display name of second employee
    var employee1 = [];
    employee1["Name"] = "Alberto";
    employee1["Title"] = "Gomez";
    employee1["Department"] = 5;
    employee1["CurrentEmpl"] = true;

    var employee2 = []; 
    employee2["Name"] = "Ruben";
    employee2["Title"] = "Rodiguez";
    employee2["Department"] = 3;
    employee2["CurrentEmpl"] = true;

    var employees = [employee1, employee2];
    window.console.log(employees[1]["Name"]);
*/

//APP 14
/* Display names using a for loop
    var employee1 = [];
    employee1["Name"] = "Alberto";
    employee1["Title"] = "Gomez";
    employee1["Department"] = 5;
    employee1["CurrentEmpl"] = true;

    var employee2 = []; 
    employee2["Name"] = "Ruben";
    employee2["Title"] = "Rodiguez";
    employee2["Department"] = 3;
    employee2["CurrentEmpl"] = true;

    var employees = [employee1, employee2];
    var i;
    for (i=0; i<employees.length; i++){
        window.console.log(employees[i]["Name"]);
    }
*/

//APP 15
// Add 3rd employee to tick me off
/*
    var employee1 = [];
    employee1["Name"] = "Alberto";
    employee1["Title"] = "Gomez";
    employee1["Department"] = 5;
    employee1["CurrentEmpl"] = true;

    var employee2 = []; 
    employee2["Name"] = "Ruben";
    employee2["Title"] = "Rodiguez";
    employee2["Department"] = 3;
    employee2["CurrentEmpl"] = true;

    var employee3 = []; 
    employee3["Name"] = "Rosa";
    employee3["Title"] = "Guzman";
    employee3["Department"] = 7;
    employee3["CurrentEmpl"] = false;

    var employees = [employee1, employee2, employee3];
    var i;
    for (i=0; i<employees.length; i++){
        if (employees[i]["CurrentEmpl"])
            {
                window.console.log(employees[i]["Name"]);
            }
    }

*/





//APP 16 
// filter movie name from 2 dimensional array.
/*
var heroMovies = [["Batman",1],["The Hulk",2],["Spiderman",3],["Superman",4],["Thor",5]];

function isString(item){
    var i;
    for (i=0;i< 2; i++)
    {
        if(typeof(item[i]) == "string") {console.log(item[i]);}
    }
}
var filter = heroMovies.filter(isString);

*/



//APP 1 FUNCTIONS
/*
var displayMessage = function(x){
    window.console.log(x);
}
displayMessage("Hello, World!");
*/

//APP 2 
/*
function calculate(x,y){
     return x%y;
}
window.console.log(calculate(3,2));
*/

//APP 3
/*
var  employees= ["Zak","Jessica", "Mark", "Fred", "Sally"];
var showEmployee = function(myArray){
    var i;
    window.console.log("Employees: \n\n");
    for (i=0 ; i< myArray.length; i++)
        {
            window.console.log(myArray[i].toUpperCase());
        }
    
}

showEmployee(employees);
*/





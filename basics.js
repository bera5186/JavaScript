// javascript can change the content of an html tag
document.getElementById("demo").innerHTML = "<h1>Rahul</h1>";
        
// it can also change css properties
document.getElementById("demo").style.color = 'red';

// js writting methods
document.write(9+10);
//window.alert(2+3);
console.log(2+3);

// statements
var x,y,z;
x = 2;
y = 3 ;
z = x+y;
console.log(z);

document.getElementById("demo2").innerHTML = '<h1>Javascript seems cool</h1>';
document.getElementById("demo2").style.color = 'darkslateblue';

/*
    naming conventions :
    pascal case (upper camel case) : FirstName, LastName;
    underscore : first_name, last_name;
    camel case : firstName, lastName;
*/

// js variables
var firstName = 'rahul', lastName = 'bera';
var pi = 3.14;

// js operators
/*
    add +
    sub -
    division /
    multiply *
    power ** (ES6)
    increment ++
    decrement --
    comparision value ==
    comparision value and type ===
    not equal to !=
    not equal by value and type !==
    typeof : returns type
    instanceof : Returns true if an object is an instance of an object type

*/
// adding number and string :)
console.log(firstName+5);

// power
var x = 2;
document.write(x**2);
var p = Math.pow(x, 3);
document.write(p);

// js data types
var age = 18; // number
var name = "Rahul"; // string
var obj = {name = "Rahul", age = 10}; // object




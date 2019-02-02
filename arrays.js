// Initialization
var names = ['rahul', 'ajay', 'rajat', 'ankit']; // more used
var age = new Array(2000, 1998, 1999, 1999);

console.log(names[0]);
console.log(age)

names[1] = 'ajay Kuamr'; // mutation
names[4] = 'ayushi';

// different data types
var rahul = ['rahul', 'bera', 18, 2000, 'single'];

rahul.push('chicken');
console.log(rahul);

console.log(rahul.indexOf('bera'));

// Objects and Properties
var details = {
    name: 'Rahul',
    course: 'B.Tech',
    Age: '19'
}

console.log(details.name);
console.log(details['Age']);
var x = 'course';
console.log(details[x]);

var details2 = new Object();

details2.name = 'Ajay';
details2.course = 'Btech';
console.log(details2)

// this and function expresion as a value

var ajay = {
    fullName: 'AjayKumarSingh',
    birthYear: 1998,
    calcAge: function (){
        this.age = 2019 - this.birthYear;
    }
}
console.log(ajay)
























function myfunc()
{
    var x = 2;
    return x;
}
document.write(myfunc());

function celToFer(celcius)
{
    return celcius*(9/5)+32;
}

var cel = prompt('Enter in celcius');
window.alert(celToFer(cel));

function calculateAge(year)
{
    return 2019-year;
}

console.log(calculateAge(1200));

// function expression
var occu = function(job, firstName) {
    switch(job) {
        case 'teacher' : return firstName + 'is a teacher';
        case 'driver' :  return firstName + 'drives cars';
        default : firstName + 'does something else !! ';
    }
};
console.log(occu('driver', 'Rahul'));

// method invocation pattern
var myObject = {
    value: 0,
    increment: function(inc){
        this.value += typeof inc === 'number' ? inc : 1;
    }
};
myObject.increment();
document.write(myObject.value);

myObject.increment(2);
document.write(myObject.value);

var add = function(a, b){
    return a+b;
}
// Function Invocation Pattern
myObject.double = function () {
    var that = this;
    var helper = function () {
        that.value = add(that.value, that.value);
    }
    helper();
};

myObject.double();
window.alert(myObject.value);

// Exceptions
var tryIt = function(){
    try {
        add("Seven");
    } catch (e) {
        console.log(e.name + ' : '+e.message);
    }
}
tryIt();

// function expression
var greet  = function(name, time) {
    if (time >= 12) {
        console.log('Good evening '+ name);        
    } else {
        console.log('Good morning '+ name);
    }
}
greet('rahul', 15);
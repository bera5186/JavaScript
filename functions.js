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
}
console.log(occu('driver', 'Rahul'));























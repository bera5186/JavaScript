var jhon = {
    fullName: 'Jhon Doe',
    mass : 50,
    height : 175,
    calcBmi : function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var mark = {
    fullName: 'Mark Branson',
    mass : 79.0,
    height : 1505,
    calcBmi : function () {
        this.bmi = this.mass / (this.height * this.height) ;
        return this.bmi;
    }
};
jhon.calcBmi();
mark.calcBmi();
console.log(jhon);
console.log(mark);
if(jhon.bmi > mark.bmi) {
    console.log(jhon.fullName+' has BMI : '+jhon.bmi);
} else  if (jhon.bmi < mark.bmi) {
    console.log(mark.fullName+' has BMI : '+mark.bmi);
} else if(jhon.bmi == mark.bmi) {
    console.log('Both have same');
}
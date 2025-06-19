//Declare Variable with - let, var, const

let college = "lpu";
college = "IIT";
console.log(college);


var name = "Aditya Verma";
console.log(name);


const RollNo = "05";
console.log(RollNo);


//Data Types
let family_details = {
    father: "Harish",
    mother: "Sarita",
};
console.log(typeof family_details);
console.log(typeof college);


let Subject;
console.log(typeof Subject);


console.log(1+1);

let sub = function(){
    return 1-2;
};

console.log(typeof sub);








let num1 = 12222222222454454444444444444444444444444444444444444444446666666666666;
let num2 = 22222222222222222233333333333333333332111111111111111111111188888888888888889999999999999;
console.log(num1 + num2);
console.log(typeof num1);






let s = Symbol();
console.log(typeof s);



let a = 1;
let b =  "3";
console.log(typeof(a+b));
console.log(a*b);


console.log(1+"dsf");
console.log("dsf".repeat(2));



let c = 4;
if(c%2==0){
    console.log("Even");
}
else{
    console.log("Odd");
}
console.log("0"===0);
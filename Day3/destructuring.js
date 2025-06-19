const person={
    name: "john",
    age: 30,

};

const{name, age}= person;
console.log(name, age);
console.log(person.name);




//Spread Operator
let num1 = [1,2,3,4];
let num2 = [5,6,7,8];

let res = [...num1,...num2];
console.log(res);


//Rest Operator

const[a,b,...rest] = num1;
console.log(rest);
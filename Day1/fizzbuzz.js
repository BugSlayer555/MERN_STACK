let user_input = 9
if(user_input%3===0 && user_input%5===0){
    console.log("fizzbuzz");
}
else if(user_input%3===0){
    console.log("fizz");
}
else if(user_input%5===0){
    console.log("buzz");
}
else{
    console.log("Invalid number");
}
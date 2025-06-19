function MyFunction(){
    console.log("Hello World!");
}
MyFunction();



//Arrow Function

const arrowsum = (a,b)=>{
    console.log(a+b);
}
arrowsum(3,4);


const nothing = ()=>{
    console.log("Hallo!!!");
}
nothing();


const vowels = (str)=>{
    const str1 = str.toLowerCase();
    let count = 0;
    for(const char of str1){
        if(char === "a"|| char === "e"|| char === "i" || char ==="o"||char === "u"){
            count++;
        }
    }
    console.log(count);
}

vowels("Aditya Verma");



//ForEach

let arr = [1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val);
});

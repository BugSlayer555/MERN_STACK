let jsObje = {
    name: "Suresh",
};

//JSON obejct to JSON String
let jsonString = JSON.stringify(jsObje);
console.log(jsonString);


//JSON String to JSON object
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
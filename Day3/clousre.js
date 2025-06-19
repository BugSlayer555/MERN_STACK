function Resturant(){
    let order = "A burger ";

    return function waiter(){
        console.log(order+"Delivered");
    }
}
let res = Resturant();
console.log(res);
res();
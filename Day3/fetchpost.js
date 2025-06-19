console.log("Start");

// let arr = [
//     { name : "Suresh"},
//     { name : "Aditya"},
//     { name : "Akash"},
//     { name : "john"},
// ];
// console.log(arr[2].name);
// async function fetchPosts(){
//     let post = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let data = await post.json();
//     console.log(data);
// }
// fetchPosts();


async function fetchPost() {
    let post = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await post.json();

    // data.map((post)=>{
    //     console.log(post.title);
    // })

    let titles = data.map((obj)=>{
        return obj.title;
    });

    let userinput = "sunt";
    const filterpost = titles.filter((title)=> title.includes(userinput));

    filterpost.sort().reverse().map((title)=>{
        console.log(title);
    });
    // titles.sort().reverse().map((title)=>{
    //     console.log(title);
    // });
    
}
fetchPost();
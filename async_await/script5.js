// async function hello(){
//     return "hello";
// }
// const result = hello();
// result.then((value) => {
//     console.log(value);
// });


// function getUser(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { 
//             resolve("User data");
//         }, 2000);
//     });
// }
// async function main(){
//     console.log("1");
//     const user = await getUser();
//     console.log(user);
//     console.log("2");
// }
// main();
// console.log("4");


// async function getUser(){
//     console.log("a");
//     await Promise.resolve();
//     console.log("b");
// }
// getUser();
// console.log("c");   

// function getUser(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { 
//             reject("server failed");
//         }, 2000);
//     }); 
// }
// async function main(){
//     try{
//         const user = await getUser();         // server failed error 
//         console.log("user fetched");
//         console.log(user);
//     }
//     catch(error){
//         console.log(error);
//         console.log("error occured");
//     }
// }
// main();


const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
.then((response) => console.log(response.json()));
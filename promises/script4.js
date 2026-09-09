// const p = new Promise(() => {
//     console.log('promise is created');
// });


//promise- resolve , reject

// resolve ka kaam h state ko fullfilled mei change krna
// reject ka kaam h state ko rejected mei change krna


// asynchronous - js doesnt wt for promise to be resolved or rejected, it moves on to the next line of code

// promise k andr ki lines synchronous hoti h

// IMP: EXECUTOR FUNCTION 

const p  = new Promise((resolve, reject) =>{
    console.log('preparing');      // executor function is synchronous

    // resolve('delivered');      // ashynchronous, callback queue mei chala jata h, isliye ye line last mei print hoti h
    reject("order cancelled");

})

p.then((value) => {        // triggers resolve and uske baad recolve ka data i.e delivered value mei store ho jata h
    console.log(value);
})

p.catch((error) => {
    console.log(error);
})                      // reject trigger hota h to console pr error bhi aata h with the value of error i.e order cancelled

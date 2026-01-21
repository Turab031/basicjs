// // // solution to callback hell
// // let p1 = new Promise((resolve, reject) => {
// //   console.log(" i am promise");
// //   // resolve(123)
// //   reject("some error");
// // });

// function getdata(dataid, getnextdata) {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{

//         console.log("data",dataid)
//         resolve("success")
//         if(getnextdata){
//             getnextdata();
//         }
//     },5000)

//   })
// }

const promise = () => {
  return new Promise((resolve, reject) => {
    console.log("i am promise");
    // resolve("success")
    reject("error");
  });
};

let p = promise();
p.then((res) => {
  console.log("full filleed");
});

p.catch((err) => {
  console.log("rejected",err);
});

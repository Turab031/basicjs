// // // // solution to callback hell
// // // let p1 = new Promise((resolve, reject) => {
// // //   console.log(" i am promise");
// // //   // resolve(123)
// // //   reject("some error");
// // // });

// // function getdata(dataid, getnextdata) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(()=>{

// //         console.log("data",dataid)
// //         resolve("success")
// //         if(getnextdata){
// //             getnextdata();
// //         }
// //     },5000)

// //   })
// // }

// const promise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("i am promise");
//     // resolve("success")
//     reject("error");
//   });
// };

// let p = promise();
// p.then((res) => {
//   console.log("full filleed");
// });

// p.catch((err) => {
//   console.log("rejected",err);
// });

function afunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data1");
      resolve("success");
    }, 4000);
  });
}
function afunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data2");
      resolve("success");
    }, 4000);
  });
}
console.log("fetching data");

let p1 = afunc1();
p1.then((res) => {
  console.log(res);
  console.log("fetching data");
  let p2 = afunc2();
  p2.then((res) => {
    console.log(res);
  });
});

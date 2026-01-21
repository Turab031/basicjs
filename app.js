// // const hello=()=>{
// //     console.log("hello world")
// // }

// // setTimeout(hello,3000)

// // callback hell
// //
// let age = 19;
// if (age >= 18) {
//   if (age >= 50) {
//     console.log("senior");
//   } else {
//     console.log("middle");
//   }
// } else {
//   console.log("child");
// }

// // callback helll 
// function getdata(dataid, getnextdata) {
//   setTimeout(() => {
//     console.log("data", dataid);
//     if (getnextdata) {
//       getnextdata();
//     }
//   }, 2000);
// }

// getdata(1, () => {
//   console.log("gettig data....");
//   getdata(2, () => {
//     console.log("gettig data....");
//     getdata(3, () => {
//       console.log("gettig data....");
//       getdata(4, () => {
//         console.log("gettig data....");
//         getdata(5);
//       });
//     });
//   });
// });


// to solve this->promises




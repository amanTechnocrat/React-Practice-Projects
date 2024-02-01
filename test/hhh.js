// var a = [8,9,8,8,9,9]


// const yy = (add) => {
//    if (a.length == 1) {
//       a.unshift(0)
//    }
//    if (a[a.length - 1].toString()[1] || a[a.length - 1] == 9) {
//       a.splice(a.length - 2, 1, a[a.length - 2] + (a[a.length - 1] + add).toString()[0] * 1)
//       a.splice(a.length - 1, 1, (a[a.length - 1] + add).toString()[1] * 1)
//       if (a[0] == 10) {
//          a.shift()
//          a.unshift(1, 0)
//       }
      
//       for (let i = 2; i < a.length; i++) {
//          if (a[a.length - i].toString()[1]) {
//             a.splice(a.length - (i + 1), 1, a[a.length - (i + 1)] + (a[a.length - i]).toString()[0] * 1)
//             a.splice(a.length - i, 1, (a[a.length - i]).toString()[1] * 1)
//          }
//          if (a[0] == 10) {
//             a.shift()
//             a.unshift(1, 0)
//          }
//       }
//       return a
//    } else {
//       let r = a[a.length - 1] + add
//       a.pop(a.length - 1)
//       a.push(r)
//       return a
//    }

// }
// console.log(yy(1));

// setInterval(() => {
//    console.log("hh");
//    setInterval(() => {
//       console.log("lll");
//    }, 2000);
//    console.log("last")
// }, 1000);

setTimeout(() => {
   console.log("hh");
   setTimeout(() => {
      console.log("callback");
   }, 2000);
   console.log("last")
}, 1000);
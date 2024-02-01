import fetch from 'node-fetch'
// const zz = new Promise ((resolve,reject)=>{
//     let a = 5
//     let b = 5
//     a+b === 11 ? resolve("success1") : reject("fails")
// })
// .then((message)=>{
//     console.log(message);
// }).catch((e)=>{
//     console.log(e);
// })

// const zx = new Promise ((resolve,reject)=>{
//     let y = 9
//     let z = 0
//     y+z === 9 ? resolve("success2") : reject("fails")
// })
// const zc = new Promise ((resolve,reject)=>{
//     let p = 9
//     let i = 9
//     p+i === 18 ? resolve("success3") : reject("fails")
// })

// Promise.race([zc,zx]).then((messages)=>{
//     console.log(messages);
// }).catch((e)=>{console.log(e)})

// const tp = new Promise((res,rj)=>{
//     setTimeout(() => {
//         rj("fails")
//     }, 2000);
// }).then((m)=>{console.log(m)}).catch((e)=>{console.log(e)})


const api = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    res = await res.json()
    console.log(res)
}

api()

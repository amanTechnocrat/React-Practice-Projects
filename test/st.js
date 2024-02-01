// regex = /[a-z]/g;
// console.log(typeof regex);
// const found = paragraph.match(regex);
// uniq = [...new Set(found)];
// console.log(found);

const fun = (string) => {
    let arr = []
    let str = ''
    for (let i = 0; i < string.length; i++) {
        let cc = string[i]
        if (arr[arr.length - 1] == cc) {
            arr.push(cc)
        } else {
            arr.length !== 0 ? str = str + arr[arr.length - 1] : null;
            arr.length !== 0 ? str = str + arr.length : null;
            arr = [string[i]]
        }
    }
    str = str + arr[arr.length - 1]
    str = str + arr.length
    return console.log(str);
}
fun("aabb")

// const cipher = () => {
//    let g = uniq.map((val)=>{
//         let f1 = `[${val}]`;cl
        // var re = new RegExp(f1, "g");
//         let occ = paragraph.match(re).length
//         return val + occ
//     })
//     let removecomma = /[,]/g
//     console.log(g.toString().replace(removecomma,""));
// }

// cipher()



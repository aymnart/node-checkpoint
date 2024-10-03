// const { argv } = require('node:process');

// // print process.argv
// argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });
console.log(process.argv)
const a = process.argv[2];
const b = process.argv[3];
console.log(`Sum ${Number(b) + Number(a)}`)
console.log(`Division ${Number(b) / Number(a)}`)
console.log(`Multiplication ${Number(b) * Number(a)}`)
console.log( `Difference  ${Number(a) - Number(b)}`);
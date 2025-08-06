const fs = require('fs');

// file read

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     console.log(err,data)
// })

// console.log("finished reading file...");

// file read Sync

// const a1 = fs.readFileSync('file.txt');
// console.log(a1.toString());

// console.log("finished reading file...");

// file write
// fs.writeFile('file2.txt','this is a file...',()=>{
//     console.log("Written to the file...")
// });

// console.log("finished writing file...");

// file write Sync

b = fs.writeFileSync('file2.txt','that is a Atmiya University...')
console.log(b)
console.log("finished writing file..."); 
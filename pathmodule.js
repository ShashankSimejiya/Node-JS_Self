const path = require('path'); 

const a1 = path.basename('C:\\temp\\myfile.html'); // Returns 'myfile.html'
const a2 = path.dirname('C:\\temp\\myfile.html'); // Returns 'C:\\temp'
const a3 = path.extname('C:\\temp\\myfile.html'); // Returns '.html'
console.log(a1); // Output: myfile.html
console.log(a2); // Output: C:\temp
console.log(a3); // Output: .html
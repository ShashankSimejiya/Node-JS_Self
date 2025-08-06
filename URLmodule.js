import url from 'url';

const myURL = new URL('http://example.org'); //Create a URL
myURL.pathname = '/a/b/c'; // That is a Pathname
myURL.search = '?d=e'; // GET Parameters d=e
myURL.hash = '#fgh';

console.log(myURL);
console.log(myURL.href); // Create a full URL
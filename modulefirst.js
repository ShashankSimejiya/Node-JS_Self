// Common JS Module System
// This is the first module file

const simple = require("./modulesecond");
simple()

// Output: Simple is a Complex...


// Es6 Module System

// import {simple} from "./modulesecond.mjs";
// simple()

// Output: Simple is a Complex...

// import {simple2 as simple} from "./modulesecond.mjs";
// simple()

// import simple2 from "./modulesecond.mjs";
// simple2()

// import simple23 from "./modulesecond.mjs";
// simple23()

// import {simple,simple23} from "./modulesecond.mjs";
// simple23()


// import {simple,simple2} from "./modulesecond.mjs";
// simple23()

// import * as a2 from "./modulesecond.mjs"
// console.log(a2)
// console.log(a2.simple())

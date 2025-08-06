const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
    console.log('Please turn off the motor!');
    setTimeout(() => {
        console.log('Please turn on the motor! Its a gentle reminder');
    },3000);
});

console.log("The Script is Running");
console.log("The Script is Still Running");
myEmitter.emit('WaterFull');
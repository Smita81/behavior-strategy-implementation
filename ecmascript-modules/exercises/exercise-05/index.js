debugger;

import { sayHi, sayBye } from './script.js';

const test1 = 'Hello, robin!' === sayHi('robin');
const test2 = 'Bye, robin!' === sayBye('robin');

console.assert(test1, 'Test 1');
console.assert(test2, 'Test 2');
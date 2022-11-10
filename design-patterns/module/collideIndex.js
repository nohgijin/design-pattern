import { add as addValues, multiply as multiplyValues, subtract, square } from "./math.js";

function add(...args) {
    return args.reduce((acc, cur) => cur + acc);
} /* Error: add has  already been declared */

function multiply(...args) {
    return args.reduce((acc, cur) => cur * acc);
}
/* Error: multiply has already been declared */

/* From math.js module */
addValues(7, 8);
multiplyValues(8, 9);
subtract(10, 3);
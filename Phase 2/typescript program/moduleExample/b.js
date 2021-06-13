"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.display = exports.dis2 = exports.b = void 0;
let b = 20;
exports.b = b;
let c = 30;
function dis2() {
    console.log("dis2 function part of b module");
}
exports.dis2 = dis2;
function display() {
    console.log("display function from b module");
}
exports.display = display;

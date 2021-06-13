let b=20;
let c=30;
function dis2() {
    console.log("dis2 function part of b module")
}
function display() {
    console.log("display function from b module")
}
export {b,dis2,display};
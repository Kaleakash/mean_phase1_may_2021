let num = new Array();
document.write("<br/> Size of array "+num.length)
num.push(100);      // add the element at the last. 
num.push(200);
num.push(300);
num.push(400);
document.write("<br/>Size of array "+num.length)
document.write("<br/>")
document.write(num)
document.write("<br/>")
num.pop();          // remove last element from array 
document.write(num)
document.write("<br/>")
num.unshift(1)      // add the element at the begining 
num.unshift(2)
document.write(num)
document.write("<br/>")
num.shift();            // remove the element from the begining 
document.write(num)
document.write("<br/>")


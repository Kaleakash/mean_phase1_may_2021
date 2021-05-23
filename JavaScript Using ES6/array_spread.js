let num1=[100,200,300,400]
let num2 =[500,600,700,800];
//let mergeArray = [num1[0],num1[2],num2];
let mergeArray = [...num1,...num2];
document.write("<br> Merge array<br/> ")
document.write(mergeArray.length)
document.write("<br/>")
document.write(mergeArray)
document.write("<br/>")
for(let n of mergeArray){
    document.write("<br/>"+n)
}

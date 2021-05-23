let num3 = new Array(100,200,300,400,500);
document.write(num3)
document.write("<br/> First index position value is "+num3[0])
document.write("<br/>Using classical for loop")
for(let i=0;i<num3.length;i++){
    document.write("<br/> value is "+num3[i])
}
//document.write("<br/>Value of i is "+i)
document.write("<br/> for in loop")
for(let i in num3){
    document.write("<br/> Index position "+i+" Value is "+num3[i])
}
document.write("<br/> of loop")
for(let n of num3){
    document.write("<br/> Value is "+n)
}
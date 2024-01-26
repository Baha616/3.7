alert ("Калькулятор по формуле Герона");

let q = +prompt("введите первое число");
let w = +prompt("введите второе число");
let e = +prompt("введите третье число");

zero (q,w,e);

function zero (a,b,c){
     p = (a+b+c) / (2);
    alert ("P =" + p);
    console.log (p);
     S = Math.sqrt((p)*(p-a)*(p-b)*(p-c));
    console.log (S);
    alert ("S =" + S);

}
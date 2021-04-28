//type conversion
let score ='100';
console.log(  score +1);
score = Number(score)
console.log(  score +1 );


let result= Number('hello')
console.log( typeof result);
console.log(result);
let result1 = String(50);
console.log( typeof result1);
console.log(result1);
let result2= Boolean(100);//if value is 0 print false value.
console.log( typeof result2);
console.log(result2);
let result3 = Boolean('0');
console.log( typeof result3);//' ' will print false as value.
console.log(result3);

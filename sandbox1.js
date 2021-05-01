console.log(1); 
console.log(2);

//Async code runs after the set time without blocking the other codes.
setTimeout(() => {
 console.log('callback function fried');   
}, 2000);

console.log(3);
console.log(4); 
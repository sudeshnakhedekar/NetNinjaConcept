//regular function

// const calArea = function(radius){
//     return 3.14*radius**2;
// }
// const area= calArea(5);
// console.log('area is :'area);


//arrow function
 //#1
// const calArea = (radius) =>{
//     return 3.14*radius**2;
// }
// const area= calArea(5);
// console.log('area is:', area);

//#2
// we can also write above arrow function as below only if the parametre is only one the return is small ie on one line
const calArea = radius => 3.14*radius**2;
    const area= calArea(5);
    console.log('area is:', area);
 

  
    
 // Practice arrow function:
//sum:1
//regular function.
//const greet= function(){
//return hello world;
//}
//  arrow function.
 const greet = () => 'hello world';
 const result = greet();
console.log(result);

//sum:2
//regular function

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// // console.log(bill([10, 15, 30],0.2)); //or
// const result1 =bill([10, 15, 30],0.2);
// console.log(result1); 

//arow function
const bill = (products, tax) =>{
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

// console.log(bill([10, 15, 30],0.2)); //or
const result1 =bill([10, 15, 30],0.2);
console.log(result1); 


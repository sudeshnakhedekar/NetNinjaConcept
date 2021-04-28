let ninjas =['shaun ' , 'ryu' , 'chun-li'];

// ninjas[1]='joh'
// console.log(ninjas[1]); //----1

let ages= [20,30,40,50];
// console.log(ages); //----2
let resAge = ages.splice(1,2)
console.log(resAge);//removes specific values
console.log(ages);

// let random = ['shaun', 'crystal' , 20 , 30];
// console.log(random); //----3

// console.log(ninjas.length); //----4

//ARRAY METHODS!!!

let result = ninjas.join(',');
console.log(result);

let result1 = ninjas.indexOf('ryu');
console.log(result1);

let result2 =ninjas.concat(['ken', 'crystal']);
console.log(result2);

let result3 =ninjas.push('ken');
console.log(result3);
console.log(ninjas);//alter the values in ninjas variable.

let result4 =ninjas.pop();
console.log(result4);
console.log(ninjas);//alter the values in ninjas variable.

let result5 =ninjas.splice(1,1);
console.log(result5);//remove specific elment from the list
console.log(ninjas);




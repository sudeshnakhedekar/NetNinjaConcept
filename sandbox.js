
//primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);

scoreOne=100;
console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);

//Reference values

const userOne ={name:'ryu', age:20};
const userTwo =userOne;
console.log(userOne, userTwo);
userOne.age =40;
console.log(userOne, userTwo);












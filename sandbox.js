//object literals

let user ={
    name: 'crystal',
    age: 20,
    email:'crystal@helloji.gmail.com',
    location: 'berlin',
    blogs:['why maac &  chese rules','10 things to make with marmite']
};

console.log(user);
console.log(user.name);


user.age =35;
console.log(user.age);

console.log(user['location']);
user['name'] ='chun-li';
console.log(user['name']);

console.log(typeof user);





//callbacks & foreach

const myFunc = (callbackFunc) =>{
//do something
let value =50;
callbackFunc(value);
};

myFunc(value =>{
    //do something
    console.log(value);
});


let people=['mario', 'lingi','ryu','shaun','chun-li']

const logPerson=(person,index) =>{
    console.log(`${index} ${person} - hello`);
    

};
people.forEach(logPerson);//1

// people.forEach((person,index) =>{

//     console.log(index,person);
// });//2
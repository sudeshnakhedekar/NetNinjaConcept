// variables & block scope
let age = 30;
//const is used when you want to keep the value fix
if(true){
    let age = 40;//local variable scope
    let name = 'shaun';
    console.log('inside 1st code block : ' , age ,name);

    if(true){
        let age = 50;
        console.log('inside 2st code block : ' , age );
        var test = 'hello'// var is global variable scope
    }

}
console.log('outside code block : ' , age ,name, test);















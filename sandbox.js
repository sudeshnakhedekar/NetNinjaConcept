//function declaration ----> hosting is possible here

greet();
greet();
greet();
function greet(){

    console.log('hello there');
}


//function expression ------>  hosting is not possible here

const speak = function(){
    console.log('good day!');
}

speak();
speak();
speak();















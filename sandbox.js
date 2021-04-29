
//LOGICAL OPERATOR : OR || and AND &&
console.log('LOGICAL OPERATOR : OR || and AND && :');
const password1 = 'password';
if(password1.length >=12 && password1.includes('@')){
    console.log('Your password is extermly strong!');

}
else if(password1.length >=8 || password1.includes('@' && password1.length>=5)){
    console.log('that password is strong enough!');
}
else{
    console.log('that password is not strong enough!');
}

//LOGICAL OPERATOR : NOT !
console.log('LOGICAL OPERATOR : NOT !');
console.log(!true);
console.log(!false);

const user =false;
if(!(user)){
    console.log('you must be logged in to continue.');
}




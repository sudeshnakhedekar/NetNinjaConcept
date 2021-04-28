//if statement
const age = 25;
if(age > 20){
    console.log('you are over 20 years old');

}

const ninjas = ['shaun','meg','chun-li','yoshi'];
if(ninjas.length > 3)//if more than 3 the value won't print
{
    console.log('that\'s a lot of ninjas');// this\'s is used here 
}
console.log('  ');// space


//if else staement
const password = 'p@ss';
if(password.length >=8){
    console.log('that password is long enough!');
}
else{
    console.log('that password is not long enough!');
}

// else if staement

const password1 = 'p@ssword123456789';
if(password1.length >=12){
    console.log('Your password is extermly strong!');

}
else if(password1.length >=8){
    console.log('that password is long enough!');
}
else{
    console.log('that password is not long enough!');
}
//get a reference to the 'ul'

const ul = document.querySelector('.people');

const people = ['mario','linigi','ryu','shaun','chum-li'];

let html =``;

people.forEach( person =>{
 //create html template
html += `<li style ="color: purple">${person}</li>`
});
console.log(html);
ul.innerHTML= html;

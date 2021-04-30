//####1####
// const para = document.querySelector('p');
// console.log(para);
// console.log(para.innerText);


//update the text:

//1---append the text ie. add new data with the old data
// para.innerText +=' ninjas are awsome!';

//2----overwrite the first value.
// para.innerText =' ninjas are awsome!';


//####2####
//forEach to update the value:

// const paras = document.querySelectorAll('p')

// paras.forEach(para =>{
//     console.log(para.innerText);
//     para.innerText += ' new text';
// })


//###3####
//To change HTML

const content = document.querySelector('.content');
// console.log(content.innerHTML);

//1----for append.
// content.innerHTML +='<h2>This is a new h2 </h2>';

//2---- To overwrite.
// content.innerHTML ='<h2>This is a new h2 </h2>';


//list of array.
const people =['shaun','luigi','yoshi'];

people.forEach(person =>{
    content.innerHTML += `<p>${person}</p>`
})

 
// const content = document.querySelector('p');

// console.log(content.classList);//whole list classes element

// //add and remove classes from elements  
// content.classList.add('error')
// content.classList.remove('error')

// content.classList.add('sucess')


const paras =document.querySelectorAll('p')

paras.forEach (para =>{
    //console.log(para.textContent);//you can use .innerText but textContent shows the hidden data too.
if(para.textContent.includes('error')){
para.classList.add('error')
}
if(para.textContent.includes('success')){
    para.classList.add('success')
    }
})

//how to toggel classes

const title =document.querySelector('.title')
title.classList.toggle('test');
title.classList.toggle('test');// it  removes togglr







 
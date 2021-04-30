const link=document.querySelector('a')
console.log(link.getAttribute('href'));
link.setAttribute('href','https://github.com/sudeshnakhedekar');
link.innerText ='Github website';
link.setAttribute('style','color: red');

const mssg = document.querySelector('p')
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class','success');
mssg.setAttribute('style','color: green');
mssg.innerText='heeloooo ji'; 
const title = document.querySelector('h1')
//title.setAttribute('style','margin: 50px;')//overwrite the style property

console.log(title.style);
console.log(title.style.color);

//does overide the property instead add  changes
title.style.margin='50px';
title.style.color ='purple';

//for double barrel property name then we use camel cse.
title.style.fontSize='60px';
title.style.margin='';// removes the margin


 
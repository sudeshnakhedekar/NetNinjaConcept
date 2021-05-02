
const getTodos = (resource,callback) =>{

return new Promise((resolve , reject) =>{

    //http request --> to get some external data via kind of api endpoint

// XMLHttpRequest -->this create us a request object .
const request = new XMLHttpRequest();

//track progress of request using 'event listener & specifiv event caalled ready state change.
request.addEventListener('readystatechange',() =>{
 
    if(request.readyState === 4 && request.status === 200){
        const data =JSON.parse(request.responseText)
      resolve(data);
      
    }else if(request.readyState ===4){
      reject('error geeting resource');
        
    }
});

request.open('GET' , resource);
request.send();


});

};

getTodos('todos/luigi.json').then((data) =>{
         console.log('Promised resolved:',data);
     }, (error) =>{
    console.log('Promised rejected:' ,error);
    
     });
    



 // example :Promises Concept

//  const getsomethig = ()=>{

//     return new Promise((resovle, reject) =>{
//         //fetech something
//      resovle('some data');
//     //reject('some error');
//     });

//  }

  
// //  getsomethig().then((data) =>{
// //      console.log(data);
// //  }, (error) =>{
// // console.log(error);

// //  });


// getsomethig().then(data =>{
// console.log(data);
// }).catch(error =>{
//     console.log(error);
// });
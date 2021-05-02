
const getTodos = (resource,callback) =>{


    //http request --> to get some external data via kind of api endpoint

// XMLHttpRequest -->this create us a request object .
const request = new XMLHttpRequest();

//track progress of request using 'event listener & specifiv event caalled ready state change.
request.addEventListener('readystatechange',() =>{
    //console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200){
        const data =JSON.parse(request.responseText)
      callback(undefined,data);
        //  console.log(request, request.responseText);
    }else if(request.readyState ===4){
      callback('could not fetch the data' ,undefined);  
        // console.log('could not fetch the data');
    }
});

request.open('GET' , resource);
request.send();
 

};
 getTodos('todos/luigi.json',(error, data) =>{
console.log('callback fired');
console.log(data);

getTodos('todos/mario.json',(error,data) =>{
    console.log(data);

    getTodos('todos/shaun.json',(error,data) =>{
        console.log(data);
    });

});

// if(error){
//     console.log(error);
// }else{
//     console.log(data);
// }
 });



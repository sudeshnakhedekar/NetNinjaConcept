
const getTodos = (callback) =>{


    //http request --> to get some external data via kind of api endpoint

// XMLHttpRequest -->this create us a request object .
const request = new XMLHttpRequest();

//track progress of request using 'event listener & specifiv event caalled ready state change.
request.addEventListener('readystatechange',() =>{
    //console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200){
      callback(undefined,request.responseText);
        //  console.log(request, request.responseText);
    }else if(request.readyState ===4){
      callback('could not fetch the data' ,undefined);  
        // console.log('could not fetch the data');
    }
});

request.open('GET' ,'https://jsonplaceholder.typicode.com/todos/');
request.send();
 
console.log(1);
console.log(2);

};
 getTodos((error, data) =>{
console.log('callback fired');
if(error){
    console.log(error);
}else{
    console.log(data);
}
 });

 console.log(3);
 console.log(4);
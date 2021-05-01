//http request --> to get some external data via kind of api endpoint

// XMLHttpRequest -->this create us a request object .
const request = new XMLHttpRequest();

//track progress of request using 'event listener & specifiv event caalled ready state change.
request.addEventListener('readystatechange',() =>{
    //console.log(request, request.readyState);
    if(request.readyState ===4 && request.status ===200){
        console.log(request.responseText);
    }else if(request.readyState ===4){
console.log('coild not fetch the data');
    }
});

request.open('GET' ,'https://jsonplaceholder.typicode.com/todos/');
request.send();
 

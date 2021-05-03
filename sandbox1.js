


///*2



//async & await

const getTodos = async () =>{
  const response = await fetch('todos/luigis.json');
 if(response.status !==200){
   throw new Error('cannot fetched the dara');
 }

     const data = await response.json();
     // console.log(data);
     
     return data;
 };
 
 
 getTodos()
 .then(data => console.log('resolved:',data))
 .catch(error => console.log('rejected',error.message));










//*/



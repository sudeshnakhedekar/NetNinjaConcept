//break and continue
const scores =[50,25,0,30,100,20,10]
for (let i = 0 ; i < scores.length; i++){
 
    if(scores[i] ===0){
        continue;//continue ignore the code block and continue the loop.
    }

    console.log('your score :' , scores[i]);

    if(scores[i] ===100){
        console.log('Congrats, you have got the top score!');
        break;//breaks out the loop ,no more iterations
    }
}










const createArray=()=>{
    let arrayRandom=[];
    for (let index = 0; index <10; index++) {
        arrayRandom.push(Math.round(Math.random()*15+5));
      
    }
    return arrayRandom;
}
const showNumbers=(array1)=>{
    array1.forEach(element => {
      console.log(element);  
    });
    
}
showNumbers(createArray());
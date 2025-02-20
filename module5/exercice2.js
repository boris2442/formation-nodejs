function simulateAsyncOperation(id, delay){
return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
     if(Math.random()>0.8){
        reject(`Entrer dans l'operation ${id}`);
        }else{
        resolve(`Operation ${id} réussie`);
     }

    }, delay);
})
}

const operations=[
    simulateAsyncOperation(1, 7000),
    simulateAsyncOperation(2, 5500),
    simulateAsyncOperation(3, 800)
  
];
Promise.all(operations)
.then(result=>{
    console.log(`tous les resultats sont:`,result);
})
.catch(error=>{
    console.error(`Une erreur est survenue: ${error}`);
});
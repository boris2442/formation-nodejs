const fileSystem=require('fs').promises;
async function readFiles (myFile){
try{
    const content=await fileSystem.readFile(myFile, 'utf8');
    console.log(`contenu de ${myFile}:\n${content}`);
}catch(error){
    console.log("erreur lors de la lecture de ");
}
}
readFiles('fs');

// async function fetchData(){
//     try{
//         const response=await fetch('https://api.blablagues.net/?rub=blagues')
//         const data=await response.json()
      
//         console.log(data)
//     }catch(error){
//         console.error('Erreur lors de la récupération des données : ', error);
//     }
// }
// fetchData();



fetch('https://api.blablagues.net/?rub=blagues')
.then(response => response.json())
.then(data => {
console.log(data);
})
.catch(error => {
console.error('Erreur lors de la récupération des données:', error);
});
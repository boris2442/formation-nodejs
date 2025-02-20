
const http = require('http');
const fs= require('fs').promises;
const server=http.createServer(async (req, res)=>{
    try{
        const data = await fs.readFile('./index.html', 'utf-8');
        // const data = await fs.readFile('./exemple.txt', 'utf-8');
        // res.writeHead(200, {'Content-Type':'text/txt'});
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
    }catch(error){
        // res.writeHead(500, {'Content-Type':'text/txt'})
        res.writeHead(500, {'Content-Type':'text/html'})
        res.end("Bienvenue sur ma page web")
        console.log("Erreur lors de la lecture du fichier:", error)
       
    }
})
server.listen(3400, ()=>{
    console.log("Serveur démarré sur le port 3400");
   
 
})

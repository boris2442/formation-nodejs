// const http=require('http');
import http from 'http'; //
const server=http.createServer((req, res)=>{
    res.writeHead(200, {'content-Type':'text-plain'});
    res.end("Bonjour, bienvenue sur mon serveur nodejs");
})
server.listen(3001, ()=>{
    console.log('Serveur démarré sur http://localhost:3001');
})
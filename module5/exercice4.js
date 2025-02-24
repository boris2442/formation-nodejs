//creation d'un serveur basique

const http=require('http');
const server=http.createServer((req, res)=>{
    console.log(`${req.url}, ${req.method}`);
    res.writeHead(200, {':content-Type':'text/plain; charset=utf-8' });
    res.end('Hello World!');
    res.end("Bienvenue sur mon serveur!");
})
server.listen(3000, ()=>{
    console.log('Serveur en cours sur http://localhost:3000');
 
})
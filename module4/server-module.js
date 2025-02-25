const http=require('http');
const server=http.createServer((res, res)=>{
    res.writehead(200, {'content-Type':'text-plain'});
    res.end("Bonjour, biwnvenu sur mon serveur nodejs");
})
server.listen(3000, ()=>{
    console.log('Serveur démarré sur http://localhost:3000');
})
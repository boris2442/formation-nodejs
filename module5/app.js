const http=require('http');
http.createServer((req, res)=>{
res.end('bonjour, bienvenue sur mon serveur')
}).listen(3000, ()=>{
    console.log('serveur en cours sur http://localhost:3000')
})


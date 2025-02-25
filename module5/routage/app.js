//ici, nous devons parcourir l'url du navigateurs

//ici, il s'agit du type module et la configuration se fait dans le terminal

// const http=require('http');
import http from "http"; //
import fileSystem from "fs"; //
import path from "path";
const server = http.createServer((req, res) => {
  console.log(`${req.url}, ${req.method}`);
  //gestion des rooutes bases sur l'url demande
  if (req.url === "/" || req.url === "/home") {
    res.writeHead(200, { "content-Type": "text/plain; charset=utf-8" });
    res.end("Page d accueil du site");
    // })
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-Type": "text/plain; charset=utf-8" });
    res.end("Bienvenue dans note section a propos");
  } else {
    res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
    res.end("<h1 style='color:red;'>Page non trouvée</h1>");
  }

  res.writeHead(200, { "content-Type": "text/plain" });
  res.end("Bonjour, bienvenue sur mon serveur nodejs");
});
server.listen(3003, () => {
  console.log("Serveur démarré sur http://localhost:3003");
});

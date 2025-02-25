const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {

  try {
   
    switch (req.url) {
      case "/":
        res.writeHead(200, { "Content-Type": "text/plain ; charset=utf-8 " });
        res.end("Bonjour, bienvenue sur mon serveur ok !");
        break;
      case "/about":
        res.writeHead(200, { "Content-Type": "text/plain ; charset=utf-8" });
        res.end('Ceci est la page à propos ç_à@àçé"éè.');
        break;
      default:
        res.writeHead(404, { "Content-Type": "text/plain ; charset=utf-8" });
        res.end("Page non trouvée.");
        break;
    }
  } catch (error) {
    console.error("Erreur lors de la gestion de la requête@%é :", error);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Une erreur est survenue sur le serveur.");
  }
});

server.listen(PORT, () => {
  console.log(`Serveur en cours sur http://localhost:${PORT}`);
});

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
});
let filePath = req.url === '/' ? '/index.html' : req.url;
filePath = path.join(__dirname, "public", "files", filePath);

const extname = path.extname(filePath);
let contentType = "text/html";
switch (extname) {
  case ".js":
    contentType = "application/javascript";
    break;
  case ".css":
    contentType = "text/css";
    break;
  case ".json":
    contentType = "application/json";
    break;
  default:
    contentType = "text/html";
   
}

fs.readFile(filePath, (err, content) => {
  if (err) {
    if (err.code === "ENOENT") {
      // Fichier non trouvé
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404</h1><p>Fichier non trouvé</p>");
    } else {
      // Autre erreur du serveur
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>500</h1><p>Erreur interne du serveur</p>");
    }
  } else {
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content, "utf-8");
  }
});

server.listen(3001, () => {
  console.log("Serveur démarré sur le port 3000");
});


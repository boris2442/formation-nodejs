// import http from "http";
// import fs from "fs";
// import path from "path";
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/home") {
    res.writeHead(200, { "content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Accueil</h1><p>Informations sur notre site!</p>");
  } else if (req.url === "/about") {
    res.end("<h1></h1><p>Informations sur notre site!</p>");
  } else if (req.url.startsWith("/static")) {
    const filePath = path.join(__dirname, req.url);
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404, { "content-Type": "text/html; charset=utf-8" });
        res.end("<h1>404 Not Found</h1>");
      } else {
        let contentType = "text/plain";
        if (req.url.endsWith(".html")) {
          contentType = "text/html";
        } else if (req.url.endsWith(".js")) {
          contentType = "application/javascript";
        } else if (req.url.endsWith(".css")) {
          contentType = "text/css";
        }
        res.writeHead(200, { "content-Type": contentType });
        res.end(content);
      }
    });
  }else{
    res.writeHead(404, { "Content-Type": "text/; charset=utf-8" });
    res.end("<h1 style='color:red'>404</h1><p>Page not found</p>");
  }
});
server.listen(3000, ()=>{
    console.log("Server is running on port 3000");  // Log the server is running on port 3000.  This will help you identify the server when it starts up.  The port number is chosen to be 3000 for simplicity, but you can choose any port number that you prefer.  Just make sure to replace 3000 in the server.listen function with your chosen port number.  The server will start listening for incoming connections and respond to them as specified in the routes.  The server.listen function returns a server object that can be used to close the server later.  This is why we store the server object in a variable and call the server.close function when we're done with the server.  This ensures that the server stops listening for incoming connections when we're done with it.  The server.close function takes a callback function as an argument, which is called when the server has stopped
})
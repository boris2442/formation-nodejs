import http from "http";
import fs from "fs";
import path from "path";
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
  }
});

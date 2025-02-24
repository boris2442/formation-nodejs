import http from 'http';
import fs from 'fs';
import path from 'path';
const http = require('http');
//const fs= require('fs');
//const path = require('path');

const server=http.createServer((req, res)=>{
if(req.url==='/' ||req.url==='/home'){
res.writeHead(200, {'content-Type': 'text/html; charset=utf-8'});
res.end('<h1>Accueil</h1><p>Informations sur notre site!</p>');
}

})
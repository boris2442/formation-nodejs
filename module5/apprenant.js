const http = require("http");
const fs = require("fs");
const path = require("path");

const server=http.createServer((req, res)=>{
    console.log(`${req.url}, ${req.method}`);

    //si la routine est  a la racine du projet, rediriger vers index.html

    let filepath=req.url==='/'?'/index.html':req.url;
    filepath=path.join(__dirname, 'public', filepath);
    //determoner le type de contenu en fonction de l'extension
    const extname=path.extname(filepath);
    let contentType='text/html';
    switch(extname){
    case '.js':
        contentType='application/javascript';
        break;
        case '.css':
            contentType='text/css';
            break;
        case '.json':
            contentType='application/json';
            break;
            case '.png':
                contentType='image/png';
                break;
                case '.jpg':
                    contentType='image/jpeg';
                    break;
                    default:
                        contentType='text/html';
                        break;

    }

    //lecture du fichier
    fs.readFile(filepath, (err, content)=>{
        if(err){
             if(err.code === 'ENOENT'){
                res.writeHead(404);
                res.end('Page not found');
             }else{
                res.writeHead(500);
                res.end('Internal Server Error');

             }
        }else{
            res.writeHead(200, {'Content-Type':contentType});
            res.end(content);
        };
    });
})
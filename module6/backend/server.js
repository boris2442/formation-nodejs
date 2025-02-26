import express from 'express';
const port=3001;
const app= express();

app.get('/post', (req, res)=>{
    res.end('Welcome to you');
})
app.listen(port, ()=>{
    console.log(`serveur creer sur le port ${port} avec succes`);
})

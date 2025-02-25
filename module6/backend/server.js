import express from 'express';
const port=3301;
const app=new express();
app.listen(port, ()=>{
    console.log(`serveur creer sur le port ${port} avec succes`);
})

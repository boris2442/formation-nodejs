import express from 'express';
//create a router variable 
import postRoute from './routes/post.routes.js';
//avec comonjs, const post=require('./routes/post.routes.js)
const port=3001;
const app= express();


//
app.use(express.json())
app.use('/', postRoute )
app.use('/post', postRoute )




// app.get('/', (req, res)=>{
//     res.json({
//         message:"page d'accueil",
//     })
// })

// app.get('/post', (req, res)=>{
//     // res.end('Welcome to you');
//     res.json({
//         id:1,
//         title:"Mon premier post",
//         content:"Contenu du premier post"
//     });
// })

app.listen(port, ()=>{
    console.log(`serveur creer sur le port ${port} avec succes`);
})

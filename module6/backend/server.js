// import express, { urlencoded } from 'express';
import express from 'express';
//create a router variable 
import connectDB from './config/database.js';
import postRoute from './routes/post.routes.js';
import dotenv from 'dotenv';
dotenv.config();
//avec comonjs, const post=require('./routes/post.routes.js)
const port=3001;
const app= express();


app.use(express.urlencoded({extended:false}))

app.use(express.json());
app.use('/', postRoute )
app.use('/post', postRoute )
app.use('/post/like-post/:id', postRoute)



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


connectDB();
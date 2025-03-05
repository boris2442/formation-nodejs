// const express=require('express');
import express from 'express'
const router=express.Router();
//permet de creer les differentes routes!

router.get('/', (req, res)=>{
    res.json({
        message:'home page'
    })
})
router.get('/post', (req, res)=>{
    res.json({
        id:1,
        title:'Mon premier post',
        content:'contenu du post'
    })
})                                                                                                                                                  


//dans le cas ou c'est common js module.exports=router
//export default router dans  le cas de ecmascript 
export default router
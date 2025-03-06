// const express=require('express');
import express from "express";
const router = express.Router();
//permet de creer les differentes routes!

router.get("/", (req, res) => {
  res.json({
    message: "home page",
  });
});
router.get("/post", (req, res) => {
  res.json({
    id: 1,
    title: "Mon premier post",
    content: "contenu du post de la date du 05 mars 2025",
  });
});
router.post("/", (req, res) => {
  res.json({
    message: req.body.message,
    auteur:req.body.auteur
  });
});


router.put("/:id", (req, res)=>{
res.json({
    // message:`id numero ${req.params.id} a ete modifier avec succes!`,
    message:req.params.message,
    auteur:req.params.auteur,
    status:'update width sucess',
})
})
router.delete("/:id", (req, res)=>{
res.json({
    // message:`id numero ${req.params.id} a ete modifier avec succes!`,
    message:`le post de numero ${req.params.id} a ete supprime avec success!`,
    // auteur:req.params.auteur,
    // status:'update width sucess',
})
})
router.patch('/post/like-post/:id', (req, res)=>{
    res.json({
        message:`le post ${req.params.id} a ete liker avec succees`
    })
})

//dans le cas ou c'est common js module.exports=router
//export default router dans  le cas de ecmascript
export default router;

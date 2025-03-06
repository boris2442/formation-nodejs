import model from "../controllers/post.controller";
import postModel from "../model/post.model";
export const setPosts= async (req, res) => {
  res.json({
    // message: req.body.message,
    // auteur: req.body.auteur,
    message:'home page 04 mars 2025'
  });
};



export const setGet=async(req,res)=>{
    res.json({
        id: 1,
        title: "Mon premier post",
        content: "contenu du post de la date du 04 mars 2025",
         auteur: "Aubin",
    });
}
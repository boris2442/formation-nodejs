import mongoose from "mongoose";
const connectDB = () => {
  // mongoose.set("strictQuery", false);
  mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("connexion a la base reussie");
  });
  // .catch((err)=>{
  //     console.log("connexion a la base de donnee echoue", err)
  // })
};

export default connectDB;

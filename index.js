import express from "express";
import dotenv from "dotenv";
// import { connectDB } from "./config/connetDB.js";

dotenv.config();
// connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/", (req, res)=>{
  req.send("message")
})

app.put("")

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

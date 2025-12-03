import express from "express";
import dotenv from "dotenv";
dotenv.config();
import session from "express-session"
const app = express();

app.use(session({
  secret: process.env.SECRET || null,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: process.env.MAXAGE }
}))


app.get("/", (req, res) => {
  res.send("Hello, World!");
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

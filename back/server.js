import express from "express";
import connectToDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
//db connection
connectToDB();
const port = process.env.PORT || 5000;
const HOST = "localhost";
app.listen(port, HOST, () => {
  console.log(`server in running on http://${HOST}:${port}`);
});

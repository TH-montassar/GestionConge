"use strict";
import express from "express";
import connectToDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import swaggerUi from "swagger-ui-express";
import { specs } from "./utils/swagger.js";
dotenv.config();
const app = express();

//db connection
connectToDB();
//middlewares
app.use(express.json());
const corsOptions = {
  origin: "http://localhost:5173", // Replace with your client's URL
  credentials: true, // Enable cookies and authentication headers if needed
};
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(compression()); //A middleware that compresses the response body.

//import routes
import userRoutes from "./routes/user.routes.js";

//api
app.use("/api", userRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
const port = process.env.PORT || 5000;
const HOST = "localhost";
app.listen(port, HOST, () => {
  console.log(`server in running on http://${HOST}:${port}`);
});

import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import userRoute from "./routes/userRoutes.js";
import publishRoute from "./routes/publishRoutes.js";
import eventRoute from "./routes/eventRoute.js"

import dotenv from "dotenv";
import ConnectionTodb from "./database/db.js";

const app = express();
app.use(cookieParser()); // Add cookie-parser middleware here
dotenv.config();
app.use(express.json());

const corsConfig = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsConfig));

app.use("/api/v1/user", userRoute);
app.use("/api/v2/publish", publishRoute);
app.use("/api/v3/event", eventRoute);

const PORT = 8000;

app.listen(PORT, () => {
  ConnectionTodb();
  console.log(`The server is listening at port ${PORT}`);
});

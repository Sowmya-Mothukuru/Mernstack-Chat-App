import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors" ;
import path from "path";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app,server} from "./lib/socket.js";


dotenv.config();

const PORT = process.env.PORT || 5001;
const __dirname=path.resolve();

// ✅ Middleware (correct order)
// app.use(express.json());
app.use(express.json({ limit: "10mb" })); // increase as needed
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(cookieParser());
app.use(
  cors({
    origin:"http://localhost:5173",
    credentials:true,
  })
);

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.json(__dirname,"../front/dist")));

  app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../front","dist","index.html"));
  })
}

// ✅ Start server
server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
  connectDB();
});

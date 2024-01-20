import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();

// Connect to MongoDB
const password = process.env.PASSWORD;
const encodedPassword = encodeURIComponent(password);
const mongoURI = `mongodb+srv://sushanthhebri336:${encodedPassword}@mern.ftbhaxu.mongodb.net/mern-auth?retryWrites=true&w=majority`;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

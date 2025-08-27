import cors from "cors";
import "dotenv/config";
import express from "express";
import { apiKey } from "./serverClient";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json({
    message: "AI writing assistant server is running",
    apikey: apiKey,
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port  http://localhost:${port}`);
});

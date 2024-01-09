import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";

dotenv.config();

const app = express();
app.use(morgan("dev"));

// Middlewares
app.use(express.json()); // for parsing JSON data in the req.body

// Enable CORS for all routes
app.use(cors());

app.use(express.urlencoded({ extended: true })); // for parsing JSON data in the req.body
app.use(cookieParser()); // To get the cookie from the request and set it in the response

const PORT = process.env.PORT || 5000;

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server started at https://localhost:${PORT}`);
});

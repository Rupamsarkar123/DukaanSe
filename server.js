import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

dotenv.config();

// database conn
connectDB();

// rest obj
const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://dukaanse-1.onrender.com",
  "https://dukaan-se.vercel.app" 
];


app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, origin); // ✅ this line is key!
      }
      return callback(new Error("Not allowed by CORS"), false);
    },
    credentials: true,
  })
);


app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// rest api
app.get("/", (req, res) => {
  res.send("<h1>welcome to DukaanSe ! </h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`.bgCyan.white);
});

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// adding middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); // handle json data
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // handle 'url' encoded data (form data only text value, no file), url in browser are encoded in special format
app.use(express.static("public")); // static asset

app.use(cookieParser()); // handling cookie

// routes import
import userRouter from "./routes/user.routes.js";

// routes
app.use("/api/v1/users", userRouter);

export { app };

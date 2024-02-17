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

//page not found
app.use("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

// catch all error, either thrown by ApiError or other error
app.use((error, req, res, next) => {
  console.log("///////////////Error: \n", error);  
  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Something went wrong",
  });
  next()
});

export { app };

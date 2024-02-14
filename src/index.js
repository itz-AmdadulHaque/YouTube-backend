// require('dotenv').config()  // this also valid code
import 'dotenv/config'

// facing problem this way, when adding config below
// import dotenv from "dotenv"; 

// when using ES module (not commonjs), and face loading problem
//to use ES module import add this in script "-r dotenv/config --experimental-json-modules"
// dotenv.config({
//   path: "./.env",
// });

import connectDB from "./db/db.js";
import { app } from "./app.js";

// after db  connect server start listening
connectDB()
  .then(() => {
    // sometime express app fail to connect db
    app.on("errror", (error) => {
        console.log("ERRR: ", error);
        throw error  // re-throws the error and catch handles it
    })

    // if everything ok then start server
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });

// how can we connect db from inside index file (not recommanded)
/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        
        // sometime express app fail to connect db
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/

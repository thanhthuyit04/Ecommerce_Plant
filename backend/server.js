const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./db/database.js");

//handling uncaught exception
process.on("uncaughtException", (err) =>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server for Handling uncaught exception`);
})

//config
dotenv.config({
    path:"backend/config/.env"
})

//connect database
connectDatabase();

// create server
const server = app.listen(process.env.PORT,() =>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})

//unhandled promise rejection
process.on("unhandledRejection", (err) =>{
    console.log(`Shutting down server for ${err.message}`);
    console.log(`Shutting down the server due to Unhandled promise rejection`);
    server.close(() =>{
        process.exit(1);
    });
});
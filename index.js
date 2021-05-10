require("dotenv").config();
const express = require("express");

const app = express();
const connectdb = require("./config/db")
const errorHandler = require("./middleware/error")

app.use(express.json());

//connect DB
connectdb();


const PORT = process.env.PORT || 5000;

app.use("/api/auth", require("./routes/auth"))
app.use("/api/private", require("./routes/private")) 

//Error Handler
app.use(errorHandler);

const server = app.listen(PORT, () => console.log(`The Server has started on port: ${PORT}`));


process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1))
})
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

//Middleware
app.use(cors())
app.use(express.json());

//ROUTES//

//Create 

app.post("/mileage_data", async(req, res) => {
    try {
        const { client_name } = req.body;
        const test = await pool.query("INSERT INTO mileage_data (client_name) VALUES($1)", [client_name])
        console.log(req.body);
    } catch (err) {
        console.error(err.message);
    }
})

//Get

//Update

//Delete

app.listen(5000, () => {
    console.log("Server has started on port 5000")
})
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
        const { client_name, locations, miles_traveled, travel_date, user_id } = req.body;
        const newTravel = await pool.query("INSERT INTO mileage_data (client_name, locations, miles_traveled, travel_date, user_id) VALUES($1, $2, $3, $4, $5) RETURNING *", [client_name, locations, miles_traveled, travel_date, user_id])
        res.json(newTravel.rows[0])
    } catch (err) {
        console.error(err.message);
    }
})

//Get all data

app.get("/mileage_data", async(req, res) => {
    try {
        const allData = await pool.query("SELECT * FROM mileage_data")
        res.json(allData.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//Get data by USER_ID

app.get("/mileage_data/:user", async(req, res) => {
    try {
        const { user } = req.params;
        const userData = await pool.query("SELECT * FROM mileage_data WHERE user_id = $1", [user]);
        res.json(userData.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//Update

app.put("/mileage_data/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { client_name, locations, miles_traveled, travel_date, user_id } = req.body;
        const updateData = await pool.query("UPDATE mileage_data SET client_name = $1, locations = $2, miles_traveled = $3, travel_date = $4, user_id = $5 WHERE id = $6", [client_name, locations, miles_traveled, travel_date, user_id, id])
        res.json("Data was updated")
    } catch (err) {
        console.error(err.message);
    }
})

//Delete

app.listen(5000, () => {
    console.log("Server has started on port 5000")
})
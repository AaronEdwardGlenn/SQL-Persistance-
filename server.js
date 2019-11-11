// Load Environment Variables from the .env file
require('dotenv').config();


// Application Dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');
// (add cors, pg, and morgan...)

// Database Client
// (create and connect using DATABASE_URL)
const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect();

// Application Setup
const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev')); // http logging
app.use(cors()); // enable CORS request
app.use(express.static('public'));git; 
// (add middleware utils: logging, cors, static files from public)
// app.use(...)
app.use(express.json());

// API Routes
app.get('/api/fish', async(req, res) => {

    try {
        const result = await client.query(`
            SELECT
                id,
                name,
                species,
                url,
                typicalWeightOz,
                saltWater, 
                freshWater, 
                zone

            FROM FISH;
        `);

        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({
            error: err.message || err
        });
    }

});



app.post('/api/fish', async(req, res) => {
    const fish = req.body;

    try {
        const result = await client.query(`
            INSERT INTO cats (name,
                species,
                url,
                typicalWeightOz,
                saltWater, 
                freshWater, 
                zone)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *;
        `,
        [fish.name, fish.typeId, fish.url, fish.species, fish.weight, fish.saltwater, fish.freshwater, fish.zone]
        );

        res.json(result.rows[0]);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message || err
        });
    }
});

// *** TYPES ***
app.get('/api/types', async(req, res) => {
    try {
        const result = await client.query(`
            SELECT *
            FROM types
            ORDER BY name;
        `);

        res.json(result.rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message || err
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});
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
const PORT = process.env.PORT || 3000;
app.use(morgan('dev')); // http logging
app.use(cors()); // enable CORS request
app.use(express.static('public'));
// (add middleware utils: logging, cors, static files from public)
// app.use(...)
app.use(express.json());

// API Routes
app.get('/api/fish', async (req, res) => {

    try {
        const result = await client.query(`
        SELECT
        f.*,
        s.name as species
    FROM fish f
    JOIN species s
    ON   f.species_id = s.id
    ORDER BY s.name;
    
`);

        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({
            error: err.message || err
        });
    }

});

app.get('/api/fish/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const result = await client.query(`
        SELECT
        f.*,
        s.name as species
    FROM fish f
    JOIN species s
    ON   f.species_id = s.id
        WHERE f.id = $1
    `,
        [id]);

        const fish = result.rows[0];
        if (!fish) {
            res.status(404).json({
                error: `Fish id ${id} does not exist`
            });
        }
        else {
            res.json(result.rows[0]);
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message || err
        });
    }
});



app.post('/api/fish', async (req, res) => {

    const fish = req.body;
    console.log(req.body,);


    try {
        const result = await client.query(`
            INSERT INTO fish (name,
                species_id,
                url,
                typicalWeightOz,
                saltWater, 
                freshWater, 
                zone)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *;
        `,
        [fish.name, fish.species, fish.url, fish.typical_weight_oz, fish.salt_water, fish.fresh_water, fish.zone]
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
app.get('/api/species', async (req, res) => {
    try {
        const result = await client.query(`
            SELECT *
            FROM species
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
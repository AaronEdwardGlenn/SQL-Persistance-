require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
// import seed data:
const fishes = require('./fish.js');

run();

async function run() {
    const client = new Client(process.env.DATABASE_URL);

    try {
        await client.connect();

        // "Promise all" does a parallel execution of async tasks
        await Promise.all(
            // map every item in the array data
            fishes.map(fish => {
                return client.query(`
                    INSERT INTO fish (name, species, url, typicalWeightOz, saltWater, freshWater, zone)
                    VALUES ($1, $2, $3, $4, $5, $6, $7);
`,
                // Use a "parameterized query" to insert the data,
                // Don't forget to "return" the client.query promise!
                [fish.name, fish.species, fish.url, fish.typical_weight_oz, fish.salt_water, fish.fresh_water, fish.zone]);
            })
        );

        console.log('seed data load complete');
    } catch (err) {
        console.log(err);
    } finally {
        client.end();
    }

}

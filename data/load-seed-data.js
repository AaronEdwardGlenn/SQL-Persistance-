require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
// import seed data:
const fishes = require('./fish.js');
const species = require('./species.js'); 


run();

async function run() {
    const client = new Client(process.env.DATABASE_URL);

    try {
        await client.connect();

        const savedSpecies = await Promise.all(
            species.map(async species => {
                const result = await client.query(`
                    INSERT INTO species (name)
                    VALUES ($1)
                    RETURNING *;
                `,
                [species]);

                return result.rows[0];
            })
        );

        [
            { name: 'Trout', id: 1 },
            { name: 'Salmon', id: 2 },
            { name: 'Bass', id: 3 },
        ];

        [
            {
                name: 'Coastal Rainbow Trout',
                species: 'Trout',
                url: 'assets/fish/rainbow_trout.jpg',
                typical_weight_oz: 192,
                salt_water: false,
                fresh_water: true,
                zone: 'Marine'
            },
            {
                name: 'Steelhead',
                species: 'Trout',
                url: 'assets/fish/steelhead_trout.jpg',
                typical_weight_oz: 432,
                salt_water: true,
                fresh_water: true,
                zone: 'Marine'
            },
        ];

        // "Promise all" does a parallel execution of async tasks
        await Promise.all(
            // map every item in the array data
            fishes.map(fish => {

                const species = savedSpecies.find(species => {
                    return species.name === fish.species;
                });

                return client.query(`
                    INSERT INTO fish (name, species, url, typicalWeightOz, saltWater, freshWater, zone)
                    VALUES ($1, $2, $3, $4, $5, $6, $7);
`,
                // Use a "parameterized query" to insert the data,
                // Don't forget to "return" the client.query promise!
                [fish.name, species.id, fish.url, fish.typical_weight_oz, fish.salt_water, fish.fresh_water, fish.zone]);
            })
        );

        console.log('seed data load complete');
    } catch (err) {
        console.log(err);
    } finally {
        client.end();
    }

}

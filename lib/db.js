const { Client } = require("pg");
require('dotenv').config();

const client = new Client({
    connectionString: process.env.DATABASE_URL, // store connection in .env
    ssl: {
        rejectUnauthorized: false, // required for Neon
    },
});

async function connectDB() {
    try {
        await client.connect();
        console.log("✅ Connected to Neon Postgres");
    } catch (err) {
        console.error("❌ Connection error:", err.stack);
    }
}

module.exports = { client, connectDB };

import pg from "pg";
import "dotenv/config"

const { Pool } = pg;

const pool = new Pool(
    {
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database,
        port: process.env.port
    }
);

export default pool
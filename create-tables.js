import pool from "./db.js"

await pool.query(`
    CREATE TABLE IF NOT EXISTS videos(
        id TEXT PRIMARY KEY,
        title TEXT,
        description TEXT,
        duration INTEGER)
    `);

console.log("Tabelas criadas com sucesso.")

await pool.end()
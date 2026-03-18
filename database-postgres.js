import { randomUUID } from "node:crypto";
import pool from "./db.js"

export class PostgresDatabase{

    async list(search = '')
    {
        if(search){
            return await pool.query(`SELECT * FROM videos WHERE title ILIKE $1`, [`%${search}%`]);
        }
        else
        {
            return await pool.query("SELECT * FROM videos");
        }
    }

    async create(video)
    {
        const id = randomUUID()
        const {title, description, duration} = video;

        await pool.query(`
            INSERT INTO videos (id, title, description, duration)
            VALUES ($1, $2, $3, $4)`,
            [id, title, description, duration]
        )
    }

    async delete(id)
    {
        await pool.query(`DELETE FROM videos WHERE id = $1`, [id])
    }

    async update(id, video)
    {
        const {title, description, duration} = video;

        await pool.query(`UPDATE videos SET title = $1, description = $2, duration = $3 WHERE id = $4`, [title, description, duration, id])
    }
}
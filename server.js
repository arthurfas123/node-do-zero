// import {createServer} from "node:http"

// const server = createServer((request, response) => {
//     response.write("Hello world!");

//     response.end();
// });

// server.listen(3333)


import {fastify} from "fastify"
import { MemoryDatabase} from "./in-memory-database.js";
import { PostgresDatabase } from "./database-postgres.js";

const servidor = fastify();
const memoryDatabase = new MemoryDatabase()
const postgresDatabase = new PostgresDatabase()

servidor.get('/videos', async (request) => {
    const search = request.query.search;

    return await postgresDatabase.list(search);
})

servidor.post('/videos', async (request, reply) => {
    const {title, description, duration} = request.body;

    await postgresDatabase.create({
        title: title,
        description: description,
        duration: duration
    });

    reply.status(201).send()
})

servidor.delete('/videos/:id', (request, reply) => {
    const videoId = request.params.id;

    postgresDatabase.delete(videoId)

    return reply.status(204).send()
})

servidor.put('/videos/:id', async (request, reply) => {
    const videoId = request.params.id;
    const {title, description, duration} = request.body;

    await postgresDatabase.update(
        videoId,
        {
            title,
            description,
            duration
        }
    );

    return reply.status(204).send();
})

servidor.listen({
    port: 3333
})
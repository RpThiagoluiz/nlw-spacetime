import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(memoriesRoutes) // fastify register routes

const port = 3333

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`Server run on http://localhost:${port} 🧐`)
  })

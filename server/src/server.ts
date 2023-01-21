import Fastify from 'fastify'
import {PrismaClient} from '@prisma/client'
import cors from '@fastify/cors'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get('/', async ()=>{

  const haits = await prisma.habit.findMany()

  return haits
})

app.listen({
  port: 3333,
}).then(()=>{
  console.log('HTTP server running')
})
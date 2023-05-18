import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
    return 'Hello world!';
})

app.listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 HTTP server running on port http://localhost:3333')
  })
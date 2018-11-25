const fastify = require('fastify')
const { hello } = require('./controllers/hello')

const app = fastify()

app.get('/', hello)

const start = async () => {
  try {
    await app.listen(3000)
    app.log.info(`server listening on ${app.server.address().port}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()

module.exports = { app, start }

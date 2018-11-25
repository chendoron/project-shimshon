const fastify = require('fastify')
const { app, start } = require('./app')

describe('app.js', () => {
  describe('app', () => {
    it('should initialize an app', () => {
      expect(fastify).toHaveBeenCalled()
    })

    it('should set the hello route', () => {
      expect(app.get).toHaveBeenCalled()
    })
  })

  describe('start', () => {
    it('should start the app', () => {
      const testInfoMessage = `server listening on ${app.server.address().port}`
      // app.listen.mockReturnValue(Promise.resolve(true))

      start()

      expect(app.listen).toHaveBeenCalledWith(3000)
      expect(app.server.address).toHaveBeenCalled()
      expect(app.log.info).toHaveBeenCalledWith(testInfoMessage)
    })

    // it('shouald start the app', () => {
    //   const testError = new Error('error')
    //   app.listen.mockReturnValue(Promise.reject(new Error('error')))

    //   start()

    //   expect(app.log.error).toHaveBeenCalledWith(testError)
    // })
  })
})

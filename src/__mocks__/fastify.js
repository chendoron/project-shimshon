const fastify = jest.fn(() => ({
  get: jest.fn(),
  listen: jest.fn(),
  log: {
    error: jest.fn(),
    info: jest.fn()
  },
  server: {
    address: jest.fn(() => ({ port: 'test port' }))
  }
}))

module.exports = fastify

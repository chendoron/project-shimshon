const { hello } = require('./hello')

describe('controllers/hello', () => {
  it('should return a promised object', async () => {
    const result = await hello()
    expect(result).toEqual({ hello: 'world' })
  })
})

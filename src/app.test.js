const { hello } = require('./app')

describe('this is a test suite', () => {
  it('should act as an example test that passes', () => {
    expect(hello()).toBe('hello')
  })
})

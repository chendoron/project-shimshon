const { hello, goodbye } = require('./app')

describe('this is a test suite', () => {
  it('should act as an example test that passes', () => {
    expect(hello()).toBe('hello')
  })

  it('should act as an example test that fails', () => {
    expect(goodbye()).toBe('goodbye')
  })
})

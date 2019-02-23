const test = require('ava')
const jacked = require('.')

test('main', t => {
  t.true(jacked.random().length > 0)
  t.true(Array.isArray(jacked.all))
  t.true(jacked.all[3].length > 0)
})

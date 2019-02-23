const all = require('./jacked')

const randElement = arr => arr[Math.floor(Math.random() * arr.length)]

const random = () => randElement(all)

module.exports = {
  all,
  random,
}

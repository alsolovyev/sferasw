const data = require('./src/data')


module.exports = {
  root: './src',
  data: {
    ...data,
    isDev: process.env.NODE_ENV === 'development'
  },
  filters: {
    isArray: data => Array.isArray(data)
  }
}

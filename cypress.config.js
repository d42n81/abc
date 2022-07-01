const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://abcdcomputech.dequecloud.com/'
  }
})
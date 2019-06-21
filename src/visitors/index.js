let globals = require('./globals')
let http = require('./http')
let statics = require('./static')
let tables = require('./tables')
let indexes = require('./indexes')
let events = require('./events')
let scheduled = require('./scheduled')

module.exports = {
  globals,
  http,
  static: statics,
  tables,
  indexes,
  events,
  scheduled,
}

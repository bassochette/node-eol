var assert = require('assert')
var eol = require('../index.js')

//assert.throws(eol([]), Error, "throw error if no string in agrs")

var txt = "toto\ttiti\r"
assert.equal(eol(txt), "\r", "Find \\r eol")
txt = "toto\ttiti\n"
assert.equal(eol(txt), "\n", "find \\n eol")
txt = "toto\ttiti\r\n"
assert.equal(eol(txt), "\r\n", "find \\r\\n eol")
txt = "toto\ttiti"
assert.equal(eol(txt), undefined, "no eol in text")

console.log('All tests passed!!!')

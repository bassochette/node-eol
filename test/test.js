var assert = require('assert')
var eol = require('../index.js')

//assert.throws(eol([]), Error, "throw error if no string in agrs")

var txt = "toto\ttiti\rtutu"
assert.equal(eol(txt), "\r", "Find \\r eol")
console.log("\\r char eol ok")
txt = "toto\ttiti\ntutu"
assert.equal(eol(txt), "\n", "find \\n eol")
console.log("\\n char eol ok")
txt = "toto\ttiti\r\ntutu"
assert.equal(eol(txt), "\r\n", "find \\r\\n eol")
console.log("\\r\\n char ok")
txt = "toto\ttiti\ttutu"
assert.equal(eol(txt), undefined, "no eol in text")

console.log('All tests passed!!!')

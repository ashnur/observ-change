var change = require('../index.js')

var test = require('tape')

var test = require("tape")

var Observable = require("../index")

test("Observable is a function", function (assert) {
    assert.equal(typeof Observable, "function")
    assert.end()
})

test("observable value", function (assert) {
    var v = Observable()
    var v2 = Observable("init")

    assert.equal(typeof v, "function")
    assert.equal(v(), null)
    assert.equal(v2(), "init")

    assert.end()
})

test("observable change", function (assert) {
    var v = Observable("init value")
    var values = []

    v(function onchange(newValue) {
        values.push(newValue)
    })

    v.set("foo")
    v.set("foo")
    v.set("bar")
    v.set("bar")
    v.set("foo")

    assert.deepEqual(values, ["foo", "bar", "foo"])

    assert.end()
})


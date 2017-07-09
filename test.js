var tape = require('tape')
var extract = require('./')

tape('extracts classes from html', function (assert) {
  var html = `
    <div class="foo bar">
      <p class="bin baz">hello planet</p>
    </div>
  `
  var expected = [ 'foo', 'bar', 'bin', 'baz' ]
  assert.deepEqual(extract(html), expected, 'array was same')
  assert.end()
})

tape('returns empty array if no matches', function (assert) {
  var html = `
    <div>
      <p>hello planet</p>
    </div>
  `
  var expected = []
  assert.deepEqual(extract(html), expected, 'array was same')
  assert.end()
})

tape('removes duplicates', function (assert) {
  var html = `
    <div class="foo bar">
      <p class="foo bar">hello planet</p>
    </div>
  `
  var expected = [ 'foo', 'bar' ]
  assert.deepEqual(extract(html), expected, 'array was same')
  assert.end()
})

tape('matches fancy classes', function (assert) {
  var html = `
    <body class=_7750a623>
      <h1>hello planet</h1>
    </body>
  `
  var expected = [ '_7750a623' ]
  assert.deepEqual(extract(html), expected, 'array was same')
  assert.end()
})

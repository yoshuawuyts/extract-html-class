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

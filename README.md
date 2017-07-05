# extract-html-class [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Extract all classes from html

## Usage
```js
var extract = require('extract-html-class')
var assert = require('assert')

var html = `
  <div class="foo bar">
    <p class="bin baz">hello planet</p>
  </div>
`
var expected = [ 'foo', 'bar', 'bin', 'baz' ]
assert.deepEqual(extract(html), expected, 'array was same')
```

## API
### `classes = extract(html)`
Get an array of classes for the given string. Uses a regex so safe to run on
non-html strings too. Returns an empty array if no matches are found.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/extract-html-class.svg?style=flat-square
[3]: https://npmjs.org/package/extract-html-class
[4]: https://img.shields.io/travis/yoshuawuyts/extract-html-class/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/extract-html-class
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/extract-html-class/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/extract-html-class
[8]: http://img.shields.io/npm/dm/extract-html-class.svg?style=flat-square
[9]: https://npmjs.org/package/extract-html-class
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard

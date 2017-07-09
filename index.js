var assert = require('assert')

var findHtml = /class=["']?([\d\w-_ ]+)+["']?/g
module.exports = extract

function extract (html) {
  assert.equal(typeof html, 'string', 'extract-html-class: html should be type string')

  var arr = []
  var res

  while (true) {
    res = findHtml.exec(html)
    if (!res) break
    arr = arr.concat(res[1].split(' '))
  }

  if (arr.length <= 1) return arr
  return arr.filter(function (value, index) {
    return arr.indexOf(value) === index
  })
}

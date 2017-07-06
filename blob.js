var nanocomponent = require('nanocomponent')

module.exports = Blob

function Blob () {
  nanocomponent.call(this)
}

Blob.prototype = Object.create(nanocomponent.prototype)

Blob.prototype._render = function () {
  var p = document.createElement('p')
  p.className = 'blob'
  p.appendChild(document.createTextNode('Blob: ' + this.props.string))
  return p
}

Blob.prototype._update = function (newProps) {
  return JSON.stringify(newProps) !== JSON.stringify(this.props)
}


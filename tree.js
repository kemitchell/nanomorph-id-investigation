var nanocomponent = require('nanocomponent')
var Blob = require('./blob')

module.exports = Tree

function Tree () {
  nanocomponent.call(this)
}

Tree.prototype = Object.create(nanocomponent.prototype)

Tree.prototype._render = function () {
  var div
  var children
  if (!this._element) {
    div = document.createElement('div')
    div.className = 'tree'
    // <p>I am a tree!</p>
    var p = document.createElement('p')
    p.appendChild(document.createTextNode('Tree'))
    div.appendChild(p)
    children = document.createElement('div')
    children.className = 'children'
    div.appendChild(children)
  } else {
    div = this._element
    children = div.childNodes[1]
  }
  // Children
  if (this.props.children) {
    this.props.children.forEach(function (child) {
      if (child.type === 'tree') {
        children.appendChild(new Tree().render(child))
      } else if (child.type === 'blob') {
        children.appendChild(new Blob().render(child))
      }
    })
  }
  return div
}

Tree.prototype._update = function (newProps) {
  var shouldUpdate = JSON.stringify(newProps) !== JSON.stringify(this.props)
  return shouldUpdate
}


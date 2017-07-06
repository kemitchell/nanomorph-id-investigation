var nanomorph = require('nanomorph')
var Tree = require('./tree')

var firstState = window.firstState = {
  type: 'tree',
  children: [
    {
      type: 'tree',
      children: [
        {
          type: 'tree',
          children: [{type: 'blob', string: 'A'}]
        }
      ]
    },
    {
      type: 'tree',
      children: [
        {type: 'blob', string: 'B'},
        {
          type: 'tree',
          children: [
            {type: 'blob', string: 'C'},
            {
              type: 'tree',
              children: [{type: 'blob', string: 'D'}]
            },
            {
              type: 'tree',
              children: [{type: 'blob', string: 'E'}]
            }
          ]
        }
      ]
    }
  ]
}

var root = window.root = new Tree()
var firstRendering = window.firstRendering = root.render(firstState)

document.body.appendChild(firstRendering)

setTimeout(
  function () {
    var secondState = window.secondState =
      JSON.parse(JSON.stringify(firstState))
    secondState.children[1].children[1].children.splice(
      2, 0,
      {
        type: 'tree',
        children: [{type: 'blob', string: 'F'}]
      }
    )
    var secondRendering = window.secondRendering =
      root.render(secondState)
    nanomorph(firstRendering, secondRendering)
  },
  3000
)

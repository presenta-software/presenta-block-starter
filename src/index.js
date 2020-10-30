import css from './style.css'

const block = function (el, config) {
  console.log(css)

  const child = document.createElement('div')
  child.classList.add(css.starter)

  const name = config.name || 'Unknown'

  child.innerHTML = `<p>Hello ${name}!</p>`

  el.appendChild(child)

  this.beforeDestroy = () => {
  }

  this.stepForward = step => {
  }

  this.destroy = () => {
  }
}

export default block

block.install = Presenta => {
  Presenta.addBlock('starter', block)
}

if (typeof window !== 'undefined' && window.Presenta) {
  window.Presenta.use(block)
}

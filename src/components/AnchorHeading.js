import { h } from 'vue'

/** Recursively get text from children nodes */
function getChildrenTextContent(children) {
  return children
    .map(node => {
      return typeof node.children === 'string'
        ? node.children
        : Array.isArray(node.children)
        ? getChildrenTextContent(node.children)
        : ''
    })
    .join('')
}

export default {
  name: 'anchoredHeading',
  
  props: {
    level: {
      type: Number,
      default: 1
    }
  },

  render() {
    // create kebab-case id from the text contents of the children
    const headingId = getChildrenTextContent(this.$slots.default())
      .toLowerCase()
      .replace(/\W+/g, '-') // replace non-word characters with dash
      .replace(/(^-|-$)/g, '') // remove leading and trailing dashes

    console.log('===== headingId ======', headingId)
    return h(
      `h${this.level}`,
      [
        h(
          'a',
          {
            name: headingId,
            href: `#${headingId}`
          },
          this.$slots.default()
        )
      ]
    )
  }
}
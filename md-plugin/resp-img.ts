import type { PluginSimple } from 'markdown-it'

const markdownItPlugin: PluginSimple = (md) => {
  md.renderer.rules.image = function (tokens, idx, options, env, self) {
    const token = tokens[idx]
    if (token.attrs) {
      token.attrs[token.attrIndex('src')][0] = 'data-src'
      token.attrs[token.attrIndex('alt')][1] = token.content
      token.attrSet('class', 'cld-responsive')
    }
    return self.renderToken(tokens, idx, options)
  }
}

export default markdownItPlugin

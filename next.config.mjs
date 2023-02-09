import nextra from 'nextra'
import { visit } from 'unist-util-visit'
import { hasProperty } from 'hast-util-has-property'

const getAndRemoveConfig = (str = '') => {
  const config = {};

  if (str) {
    str = str
      .replace(/^('|")/, '')
      .replace(/('|")$/, '')
      .replace(/(?:^|\s):([\w-]+:?)=?([\w-%]+)?/g, (m, key, value) => {
        if (key.indexOf(':') === -1) {
          config[key] = (value && value.replace(/&quot;/g, '')) || true;
          return '';
        }

        return m;
      })
      .trim();
  }

  return { str, config };
}

export const rehypeImageSize = () => (tree) => {
  visit(tree, 'element', (node) => {
    if (node.tagName === 'img' && hasProperty(node, 'title')) {
      const { config } = getAndRemoveConfig(node.properties.title);
      if (config.size) {
        delete node.properties.title;
        node.properties.width = config.size;
      }
    }
  });
};

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeImageSize],
  }
})

export default withNextra({
  basePath: '/docs',
})

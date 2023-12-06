import { visit } from 'unist-util-visit'
import { load } from 'js-yaml'

export default function remarkExtractFrontmatter () {
  return (tree, file) => {
    visit(tree, 'yaml', (node, index, parent) => {
      file.data.frontmatter = load(node.value)
    })
  }
}

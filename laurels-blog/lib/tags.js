import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { getFiles } from './mdx'
import kebabCase from './utils/kebabCase'

const root = process.cwd()

export async function getAllTags(type) {
    if (typeof type !== 'string') {
        throw new Error('The "type" parameter must be a string.');
      }
  try {
    const files = await getFiles(type)

    let tagCount = {};

    // Iterate through each post, putting all found tags into `tags`
    for (const file of files) {
      try {
        const source = fs.readFileSync(path.join(root, 'data', type, file), 'utf8')
        const { data } = matter(source)

        if (data.tags && data.draft !== true) {
          data.tags.forEach((tag) => {
            const formattedTag = kebabCase(tag);
            tagCount[formattedTag] = (tagCount[formattedTag] || 0) + 1;
          });
        }
      } catch (error) {
        console.error(`Error reading file ${file}:`, error);
      }
    }

    return tagCount;
  } catch (error) {
    console.error('Error fetching files:', error);
    return {}; // Return an empty object or handle the error as appropriate
  }
}

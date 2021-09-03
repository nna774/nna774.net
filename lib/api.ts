import fs from 'fs';
import glob from 'glob';
import { join } from 'path';
import matter from 'gray-matter';

const postDirPrefix = '_posts/';
const postsDirectory = join(process.cwd(), postDirPrefix);

export type Slug = string[];
export type Items = {
  [key: string]: string;
};
export const getPostBySlug = (
  slug: Slug,
  fields: string[] = ['date', 'title', 'content']
): Items => {
  const matchedSlug = slug.join('/');
  const realSlug = matchedSlug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const items: Items = {};

  fields.forEach((field) => {
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
};

// '_posts/**/*.md`のすべてのファイルを取得して配列にして返す
// '_posts/foo.md`と'src/_posts/bar/baz.md'がある場合[["foo"], ["bar", "baz"]]を返す
export const getAllPosts = (): Slug[] => {
  const entries = glob.sync(`${postDirPrefix}/**/*.md`);
  return entries
    .sort((a, b) => (a < b ? 1 : -1))
    .map((file) => file.split(postDirPrefix).pop())
    .map((slug) => (slug as string).replace(/\.md$/, '').split('/'));
};

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "blogposts");

export function getSortedPostsDate() {
  const filenames = fs.readdirSync(postsDirectory);
  const allPostsDate = filenames.map((filename) => {
    const id = filename.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    };

    return blogPost;
  });

  return allPostsDate.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostDate(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);

  const processContent = await remark().use(html).process(matterResult.content);

  const contentHtml = processContent.toString();

  const blogPostWithHTML: BlogPost & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml,
  };

  return blogPostWithHTML;
}

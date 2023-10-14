import { getSortedPostsDate } from "@/lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPostsDate();

  return (
    <section>
      <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
      <ul className="w-full">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}

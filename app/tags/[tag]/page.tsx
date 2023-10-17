import { getPostsMeta } from "@/lib/posts";
import ListItem from "@/app/components/ListItem";
import Link from "next/link";

export const revalidate = 86400;

type Props = {
  params: {
    tag: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta();

  if (!posts) return [];

  const tags = new Set(posts.map((post) => post.tags).flat());

  return Array.from(tags).map((tag) => ({ tag }));
}

export function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Post about ${tag}`,
  };
}

export default async function TagPostList({ params: { tag } }: Props) {
  const posts = await getPostsMeta();

  if (!posts)
    return <p className="mt-10 text-center">Sorry, no post available.</p>;

  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className="text-center">
        <p className="mt-10">Sorry, no posts available for that keyword.</p>
        <Link href="/" className="text-3xl underline underline-offset-4">
          &larr; Back to home
        </Link>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-3xl mt-4 p-0">Results for: #{tag}</h2>
      <section className="mt-6 mx-auto max-w-2xl">
        <ul className="w-full list-none p-0">
          {tagPosts.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
}

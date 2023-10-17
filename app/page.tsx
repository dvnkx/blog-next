import Posts from "./components/Posts";
import ProfilePic from "./components/ProfilePic";

export const revalidate = 86400;

export default function Home() {
  return (
    <div className="mx-auto">
      <ProfilePic />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Bogdan</span>
        </span>
      </p>
      <Posts />
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-10 flex flex-col items-center gap-7">
      <h1 className="text-3xl text-red-800 ">
        The requested post does not exist.
      </h1>
      <p className="text-white">
        <Link href="/" className="text-3xl underline underline-offset-4">
          &larr; Back to home
        </Link>
      </p>
    </div>
  );
}

import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="md:mx-6 prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold  grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            Bogdan Lisniak
          </Link>
        </h1>
        <div className="flex justify-center text-white text-4xl lg:text-5xl">
          <Link
            href="https://github.com/dvnkx"
            className="text-white/90 hover:text-white"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </nav>
  );
}

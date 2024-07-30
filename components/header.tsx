import Link from "next/link";
import { Computer } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between h-16 px-4 border-b shrink-0 md:px-6">
      <nav className="flex items-center gap-4 text-lg font-medium">
        <Link
          className="flex items-center gap-2 text-lg font-semibold"
          href="/">
          <Computer className="w-6 h-6" />
          <span className="sr-only">Compulab</span>
        </Link>
        <Link className="font-bold" href="/">
          Compulab
        </Link>
        <Link className="font-bold" href="/articles/article-1">
          Article 1
        </Link>
        <Link className="font-bold" href="/articles/article-2">
          Article 2
        </Link>
      </nav>
    </header>
  );
}

import Link from "next/link";
import { Logo } from "./logo";
export function Navbar() {
  return (
    <div className="flex flex-col items-center">
      <Logo />
      <div className="flex mt-4" role="group" style={{ gap: '1rem' }}>
        <Link legacyBehavior href="/Latest">
          <a className="text-white hover:text-gray-300">Latest</a>
        </Link>
        <Link legacyBehavior href="/Trending">
          <a className="text-purple-700 hover:text-gray-300">Trending</a>
        </Link>
        <Link legacyBehavior href="/Dashboard">
          <a className="text-white hover:text-gray-300">Dashboard</a>
        </Link>
        <Link legacyBehavior href="/api/auth/signin">
          <a className="text-purple-700 hover:text-gray-300">Signin</a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

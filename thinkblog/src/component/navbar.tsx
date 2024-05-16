import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex flex-col items-center p-24">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-8 text-purple-700">
          <Link legacyBehavior href="/">
            <a className="text-purple-700">Think<span className="text-white text-6xl">Blog</span></a>
          </Link>
        </h1>
        <div className="space-x-4">
          <Link legacyBehavior href="/Latest">
            <a className="text-white hover:text-gray-300">Latest</a>
          </Link>
          <Link legacyBehavior href="/Tranding">
            <a className="text-purple-700 hover:text-gray-300">Tranding</a>
          </Link>
          <Link legacyBehavior href="/Dashboard">
            <a className="text-white hover:text-gray-300">Dashboard</a>
          </Link>
          <Link legacyBehavior href="/api/auth/signin">
            <a className="text-purple-700 hover:text-gray-300">Signin</a>
          </Link>
        </div>
      </div>
      {/* Your additional content here */}
    </div>
  );
}

export default Navbar;

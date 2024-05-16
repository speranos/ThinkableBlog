import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex flex-col items-center p-24">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-8">
          <Link legacyBehavior href="/">
            <a className="text-purple-700">Think</a>
          </Link>
          <Link legacyBehavior href="/">
            <a className="text-white">Blog</a>
          </Link>
        </h1>
        <div className="space-x-4">
          <Link legacyBehavior href="/Latest">
            <a className="text-white hover:text-gray-300">Latest</a>
          </Link>
          <Link legacyBehavior href="/Tranding">
            <a className="text-purple-700 hover:text-gray-300">Tranding</a>
          </Link>
          <Link legacyBehavior href="/api/dashboard/56313785-70cb-49f0-8bb7-21eb92cf6e66">
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

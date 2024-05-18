"use client";
import Link from "next/link";
import { Logo } from "./logo";
import withAuth from '@/app/withAuth';
import { useSession, signOut } from "next-auth/react";

function Navbar() {

  const { data: session, status } = useSession()
  // console.log(session);
  return (
    <div className="flex flex-col items-center">
      <Logo/>
      <div className="flex mt-4" role="group" style={{ gap: '1rem' }}>
        <Link legacyBehavior href="/latest">
          <a className="text-white hover:text-gray-300">Latest</a>
        </Link>
        <Link legacyBehavior href="/Trending">
          <a className="text-purple-700 hover:text-gray-300">Trending</a>
        </Link>
        <Link legacyBehavior href="/Dashboard">
          <a className="text-white hover:text-gray-300">Dashboard</a>
        </Link>
        {status === 'authenticated' ? (
            <button onClick={() => signOut()} className="text-purple-700 hover:text-gray-300"> Sign Out</button>
        ) : (
          <Link legacyBehavior href="/api/auth/signin">
            <a className="text-purple-700 hover:text-gray-300">Sign In</a>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;

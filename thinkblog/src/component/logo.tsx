import Link from "../../node_modules/next/link";
export function Logo(){
    return(
    <div className="flex flex-col items-center p-24">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold">
            <Link legacyBehavior href="/">
              <a className="text-purple-700">Think</a>
            </Link>
            <Link legacyBehavior href="/">
              <a className="text-white">Blog</a>
            </Link>
          </h1>
        </div>
    </div>
    // <h1 className="text-5xl font-bold text-purple-700">ThinkBlog</h1>
    );
}
import Link from "../../node_modules/next/link";
export function Logo(){
    return(
    <div className="flex flex-col text-center items-center p-24">
        <div className="text-center font-extrabold">
          <div className="text-4xl font-extrabold ">
            <Link legacyBehavior href="/">
              <a className="text-purple-700">Think</a>
            </Link>
            <Link legacyBehavior href="/">
              <a className="text-white">Blog</a>
            </Link>
          </div>
          <div className="text-center items-center font-extrabold">
          <span className="text-white"> Keep </span>
          <span className="text-purple-700"> it </span>
          <span className="text-purple-700"> simple. </span>
        </div>
        </div>
    </div>
    // <h1 className="text-5xl font-bold text-purple-700">ThinkBlog</h1>
    );
}
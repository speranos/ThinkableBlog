// import Image from "next/image";
// import Link from 'next/link';

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <h1 className="text-4xl font-bold mb-8">
//         <Link legacyBehavior href="/">
//           <a className="text-blue-600 hover:underline">ThinkBlog</a>
//         </Link>
//       </h1>
//       {/* Your additional content here */}
//     </main>
//   );
// }

import Image from "next/image";
import Link from 'next/link';
import Navbar from "@/component/navbar";


const posts = [
  { id: 1, title: "Post 1", content: "Content of post 1" },
  { id: 2, title: "Post 2", content: "Content of post 2" },
  { id: 3, title: "Post 3", content: "Content of post 3" },
  { id: 4, title: "Post 4", content: "Content of post 4" },
  { id: 5, title: "Post 5", content: "Content of post 5" },
  { id: 5, title: "Post 5", content: "Content of post 5" },
  { id: 5, title: "Post 5", content: "Content of post 5" },
  { id: 5, title: "Post 5", content: "Content of post 5" },
  
];

export default function Home() {
    return (
    <div>
      <main className="container mx-auto mt-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-lg p-4 shadow-md">
              <h2 className="text-xl text-purple-700 font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.content}</p>
              <Link legacyBehavior href={`/posts/${post.id}`}>
                <a className="text-purple-700 hover:underline mt-2 block">Read more</a>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );

    {/* // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <h1 className="text-5xl font-extrabold mb-8 text-purple-700">
    //     <Link legacyBehavior href="/">
    //       <a className="hover:underline">Think<span className="text-black-600"style={{ color: 'white' }}>Blog</span></a>
    //     </Link>
    //   </h1>
    //   {/* Your additional content here */}
  {/* ); */}

}

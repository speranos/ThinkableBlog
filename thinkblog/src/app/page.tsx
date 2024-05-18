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
"use client";
import Image from "next/image";
import Link from 'next/link';
import Navbar from "@/component/navbar";
import { useState, useEffect } from 'react';




const truncateContent = (content, maxLength) => {
  if (content.length <= maxLength) {
    return content;
  }
  return content.slice(0, maxLength) + '...';
};

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getposts");
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData();
  }, []);

  const maxLength = 100;


    return (
    <div>
      <main className="container mx-auto mt-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map(post => (
            <div key={post.id} className="dark:bg-gray-900 rounded-lg p-4 shadow-md">
              <h2 className="text-xl text-purple-700 font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{truncateContent(post.content, maxLength)}</p>
              <Link legacyBehavior href={`/post/${post.id}`}>
                <a className="text-purple-700 hover:underline mt-2 block">Read more</a>
              </Link>
            </div> 
          ))}
        </div>
      </main>
    </div>
  );
}

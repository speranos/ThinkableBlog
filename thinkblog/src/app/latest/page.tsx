"use client"
import { useState, useEffect } from 'react';
import Link from "next/link";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getlatest");
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

  const truncateContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "...";
    }
    return content;
  };

  return (
    <div>
      <main className="container mx-auto mt-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map(post => (
            <div key={post.id} className="dark:bg-gray-900 rounded-lg p-4 shadow-md">
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
}

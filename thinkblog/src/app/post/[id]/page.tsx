'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function PostPage({ params }) {
  const { id } = params;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== 'authenticated') return;

    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/singlepost/`, {
          method: 'GET',
          headers: {
            'postid': id,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }

        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, session, status]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="container mx-auto mt-5 py-8">
      <h1 className="text-3xl font-bold mb-8">{post.title}</h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">By {post.author.name}</p>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <p>{post.content}</p>
      </div>
    </div>
  );
}

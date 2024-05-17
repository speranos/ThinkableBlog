'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function PostManagement() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      if (session) {
        try {
          const userEmail = session.user.email;
          const response = await fetch('/api/dashboard', {
            method: 'GET',
            headers: {
              'email': userEmail,
            },
          });
          if (!response.ok) {
            throw new Error('Failed to fetch posts');
          }
          const data = await response.json();
          setPosts(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPosts();
  }, [session]);

  const handleDeletePost = async (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
    const userEmail = session.user.email;
    const response = await fetch('/api/dashboard', {
      method: 'DELETE',
      headers: {
        'postid': postId,
        'email': userEmail,
      },
    });
  };

  const handleEditClick = (postId) => {
    sessionStorage.setItem('editPostId', postId);
    router.push('/edit');
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <h1>You need to sign in first</h1>;
  }

  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto mt-5 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome, {session.user.name}!</h1>
        <Link legacyBehavior href="/create">
          <a className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800">
            Create New Post
          </a>
        </Link>
      </div>
      <img src={session.user.image} alt="User Avatar" className="w-24 h-24 rounded-full mb-8" />
      <h2 className="text-4xl font-bold mb-4">Your Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet. Create your first post!</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md mb-4">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600">{post.content}</p>
            <div className="flex space-x-4 mt-2">
              <button
                className="text-purple-700 hover:underline"
                onClick={() => handleEditClick(post.id)}
              >
                Edit
              </button>
              <button
                className="text-red-600 hover:underline"
                onClick={() => handleDeletePost(post.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

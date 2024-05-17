
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function EditPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    const postId = sessionStorage.getItem('editPostId');
    if (!postId || !session) return;

    const fetchPost = async () => {
      try {
        const response = await fetch('/api/edit-post', {
          method: 'GET',
          headers: {
            'email': session.user.email,
            'postid': postId,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const postData = await response.json();
        setTitle(postData.title);
        setContent(postData.content);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [session]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postId = sessionStorage.getItem('editPostId');
    if (!postId) return;

    try {
      const response = await fetch(`/api/edit-post`, {
        method: 'PUT',
        headers: {
            'postid': postId,
            'title': title,
            'content': content,
          },
      });

      if (response.ok) {
        router.push(`/Dashboard`);
      } else {
        console.error('Failed to update post:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto mt-5 py-8">
      <h1 className="text-3xl font-bold mb-8">Edit Post</h1>
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            placeholder="Enter post title"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            placeholder="Enter post content"
            rows="5"
            required
          />
        </div>
        <button type="submit" className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800">
          Save Changes
        </button>
      </form>
    </div>
  );
}

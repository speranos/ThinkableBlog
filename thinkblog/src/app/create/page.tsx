"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    const newPost = {
      title,
      content,
    };
    console.log(newPost);
    if(session){
      try {
        const userEmail = session.user.email;
        const response = await fetch('/api/dashboard', {
          method: 'POST',
          headers: {
            'content': encodeURIComponent(newPost.content),
            'tittle': newPost.title,
            'email': userEmail,
          },
        });

        if (response.ok) {
          router.push('/Dashboard');
        } else {
          console.error('Failed to create post:', response.statusText);
        }
      } catch (error) {
        console.error('Error creating post:', error);
      }
    }
  }


  return (
    <div className="container mx-auto mt-5 py-8">
      <h1 className="text-3xl font-bold mb-8">Create New Post</h1>
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
          Create Post
        </button>
      </form>
    </div>
  );
}


// pages/posts/[postId].js
"use client";
import { useRouter } from 'next/navigation';
// import { PrismaClient } from '@prisma/client';
import { prisma } from '@/lib/prismaclt';
import Link from 'next/link';

// const prisma = new PrismaClient();

function Posts({ post, comments }) {
  const router = useRouter();
  const { postId } = router.query;
    console.log("HOOOOOPa")
  if (!post) return <div>Loading...</div>;
  console.log("ha9999 mcha")

  return (
    <div>
      <h1>{post.title}</h1>
      <p>Author: {post.author.name}</p>
      <p>Created at: {new Date(post.createdAt).toLocaleString()}</p>
      <p>{post.content}</p>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <p>Author: {comment.author.name}</p>
            <p>Comment: {comment.content}</p>
            <p>Created at: {new Date(comment.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
      <Link href="/posts">
        <a>Back to Posts</a>
      </Link>
    </div>
  );
}

export  {Posts as GET}

export async function getServerSideProps(context) {
  const { postId } = context.query;

  // Fetch post and its comments
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(postId),
    },
    include: {
      author: true,
    },
  });

  const comments = await prisma.comment.findMany({
    where: {
      postId: parseInt(postId),
    },
    include: {
      author: true,
    },
  });

  return {
    props: {
      post,
      comments,
    },
  };
}

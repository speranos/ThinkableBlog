import { getSession } from 'next-auth/react';
import { prisma } from '@/lib/prismaclt';
import { NextResponse } from 'next/server';


export async function GET(req: Request) {

    try {
    //   const id = req.headers.get('postid');
      const post = await prisma.post.findMany({
        select: {
            content: true,
            title: true,
        }
    });

      if (!post) {
        return NextResponse.json({ message: 'Post not found' }, {status: 404});
      }

    return NextResponse.json(post);
    } catch (error) {
        NextResponse.json({ error: 'Failed to fetch post' }, {status: 500});
    }
}
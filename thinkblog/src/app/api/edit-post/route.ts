// import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prismaclt';
import { NextResponse } from 'next/server';


export async function GET(req: Request) {
  console.log("ANA============================");
    try {
      const postid = req.headers.get('postid');
      if (!postid) {
        return NextResponse.json({ error: 'post header is missing' }, { status: 400 });
      }
    const post = await prisma.post.findUnique({
      where: {id: postid},
      select: {
        title: true,
        content: true,
      }
    });

    if (!post)
        return NextResponse.json({ error: 'User not found' }, { status: 404});

    return NextResponse.json(post);
    } catch (error) {
      console.error('Error handling GET request:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }

export async function PUT(req: Request) {
  // if (req.method === 'PUT') {
    // const { id } = req.query;
    // const { title, content } = req.body;
    console.log("KOKOKOOKOK");
    const id:string = req.headers.get('postid');
    const title:string = req.headers.get('title');
    const content:string = req.headers.get('content');


    try {
      const updatedPost = await prisma.post.update({
        where: { id: id },
        data: {
          title,
          content,
        },
      });
     return NextResponse.json(updatedPost);
    } catch (error) {
      console.error('Error updating post:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, {status: 500});
    }
}

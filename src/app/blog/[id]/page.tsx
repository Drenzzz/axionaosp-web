import { posts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Image from 'next/image';

async function getPostData(id: string) {
  return posts.find((p) => p.id === id);
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPostData(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-28 pb-16 min-h-screen">
      <article className="container mx-auto px-4 max-w-3xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-green-300">{post.title}</h1>
          <p className="text-neutral-400">Written on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} oleh {post.author.name}</p>
        </header>
        {post.banner && (
          <div className="relative w-full h-64 md:h-96 mb-12 rounded-2xl overflow-hidden">
            <Image src={post.banner} alt={post.title} layout="fill" objectFit="cover"/>
          </div>
        )}
        <div
        className="post-body prose prose-invert max-w-none prose-sm text-neutral-300 prose-axion"
        dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({ id: post.id }));
}

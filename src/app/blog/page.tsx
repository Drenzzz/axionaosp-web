import Link from 'next/link';
import { posts } from '@/lib/posts';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import Image from 'next/image';

export default function BlogIndexPage() {
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  if (sortedPosts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-28 text-center">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="mt-4 text-neutral-400">No posts yet.</p>
      </div>
    );
  }

  const [latestPost, ...olderPosts] = sortedPosts;

  return (
    <section className="pt-28 pb-16 min-h-screen">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Blog AxionOS</h1>
          <p className="text-lg text-neutral-400 mt-4">Changelogs and news from the AxionOS team.</p>
        </div>

        <div className="mb-16 max-w-5xl mx-auto">
          <Link href={`/blog/${latestPost.id}`} className="block group">
            <Card className="bg-neutral-800/50 border-neutral-700/80 rounded-2xl overflow-hidden md:grid md:grid-cols-5 transition-all duration-300 group-hover:border-green-400/80 p-0">
              {latestPost.banner && (
                <div className="relative h-64 md:h-auto md:col-span-3">
                  <Image
                    src={latestPost.banner}
                    alt={latestPost.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-8 flex flex-col justify-center md:col-span-2">
                <p className="text-sm text-neutral-400 mb-2">{new Date(latestPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <h2 className="text-2xl font-bold text-green-300 mb-4">{latestPost.title}</h2>
                <p className="text-neutral-300 text-sm mb-4">{latestPost.summary}</p>
                 <div className="flex items-center text-sm text-neutral-400 mt-4">
                  <Image src={latestPost.author.icon} alt={latestPost.author.name} width={24} height={24} className="rounded-full mr-2" />
                  <span>{latestPost.author.name} ({latestPost.author.username})</span>
                </div>
                <p className="text-green-400 font-semibold mt-6 self-start">Read More →</p>
              </div>
            </Card>
          </Link>
        </div>

        {olderPosts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {olderPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="block group">
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

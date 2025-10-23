import Link from 'next/link';
import { getAllPosts } from '@/lib/markdown';

export default function NewsPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Последни новини
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Останете в течение с последните новини, обявления и събития от ПКВТ.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('bg-BG')}</time>
                    {post.author && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{post.author}</span>
                      </>
                    )}
                  </div>
                  
                  <h2 className="text-xl font-semibold mb-3">
                    <Link href={`/news/${post.slug}/`} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <Link 
                    href={`/news/${post.slug}/`} 
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Прочетете повече →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Все още няма новини.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

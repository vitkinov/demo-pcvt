import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllDocumentSlugs, getDocumentBySlug } from '@/lib/markdown';

interface DocumentPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllDocumentSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function DocumentPage({ params }: DocumentPageProps) {
  const { slug } = await params;
  const document = await getDocumentBySlug(slug);

  if (!document) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
              <span>Последно обновен: {new Date(document.date).toLocaleDateString('bg-BG')}</span>
              {document.category && (
                <>
                  <span className="mx-2">•</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {document.category}
                  </span>
                </>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {document.title}
            </h1>
            
            <div className="flex justify-center">
              <Link 
                href="/documents" 
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                ← Обратно към документите
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div 
              className="prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-blue-600 prose-pre:bg-gray-100"
              dangerouslySetInnerHTML={{ __html: document.content }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

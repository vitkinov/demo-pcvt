import Link from 'next/link';
import { getAllDocuments } from '@/lib/markdown';

export default function DocumentsPage() {
  const documents = getAllDocuments();

  // Group documents by category
  const groupedDocuments = documents.reduce((acc, doc) => {
    const category = doc.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(doc);
    return acc;
  }, {} as Record<string, typeof documents>);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Важни документи
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Достъп до важни документи на клуба, политики и насоки.
            </p>
          </div>
        </div>
      </section>

      {/* Documents by Category */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(groupedDocuments).map(([category, docs]) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                {category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {docs.map((doc) => (
                  <div key={doc.slug} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">
                          <Link href={`/documents/${doc.slug}/`} className="hover:text-blue-600 transition-colors">
                            {doc.title}
                          </Link>
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">
                          Последно обновен: {new Date(doc.date).toLocaleDateString('bg-BG')}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{doc.description}</p>
                    
                    <Link 
                      href={`/documents/${doc.slug}/`} 
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Прочетете документа →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {documents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Все още няма документи.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

'use client'
import Header from './Header'
import Footer from './Footer'
import QuoteForm from './QuoteForm'

interface FAQ {
  question: string
  answer: string
}

interface RelatedPage {
  href: string
  label: string
}

interface ArticleLayoutProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  faqs: FAQ[]
  relatedPages: RelatedPage[]
  breadcrumb: string
  schemaData?: object
}

export default function ArticleLayout({
  title, subtitle, children, faqs, relatedPages, breadcrumb, schemaData
}: ArticleLayoutProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer }
    }))
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Sunshine State Insured',
    description: 'Florida home insurance guidance and lead referral service',
    url: 'https://www.sunshinestateinsured.com',
    areaServed: { '@type': 'State', name: 'Florida' },
  }

  return (
    <>
      {schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Header />

      <main className="pb-24 md:pb-0">
        {/* Hero */}
        <div className="bg-gradient-to-br from-teal-800 to-teal-900 text-white py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb */}
            <nav className="text-teal-300 text-xs mb-4 flex items-center gap-1.5">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>›</span>
              <span className="text-teal-200">{breadcrumb}</span>
            </nav>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-teal-200 text-lg max-w-2xl">{subtitle}</p>
            )}
            {/* Mobile CTA above fold */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 md:hidden">

              <a
                href="/get-a-quote"
                className="flex items-center justify-center bg-coral-500 text-white font-bold py-3 px-6 rounded-lg text-sm"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>

        {/* Content + Sidebar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2">
              <article className="prose max-w-none">
                {children}
              </article>

              {/* FAQ Section */}
              <div className="mt-12">
                <h2 className="font-serif text-2xl text-teal-800 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-gray-800 hover:bg-teal-50 transition-colors list-none">
                        {faq.question}
                        <svg className="w-5 h-5 text-teal-600 group-open:rotate-180 transition-transform flex-shrink-0 ml-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"/>
                        </svg>
                      </summary>
                      <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Related pages */}
              <div className="mt-10 bg-teal-50 rounded-2xl p-6">
                <h3 className="font-serif text-lg text-teal-800 mb-4">Related Florida Insurance Guides</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {relatedPages.map(page => (
                    <a
                      key={page.href}
                      href={page.href}
                      className="flex items-center gap-2 text-teal-700 hover:text-teal-900 text-sm font-medium py-1.5 hover:underline"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                      {page.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block">
              <QuoteForm variant="sidebar" />
              <div className="mt-6 bg-teal-800 text-white rounded-2xl p-5">
                <p className="font-serif text-lg mb-2">Ready to get covered?</p>
                <p className="text-teal-200 text-sm mb-4">Get matched with a licensed Florida insurance specialist — no obligation.</p>
                <a
                  href="/get-a-quote"
                  className="flex items-center justify-center gap-2 bg-coral-500 hover:bg-coral-600 text-white font-bold py-3 rounded-lg text-sm w-full transition-colors"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

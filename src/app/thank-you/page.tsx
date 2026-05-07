import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You | Instant COI Florida',
  description: 'Your request for a Certificate of Insurance has been received. A licensed Florida insurance specialist will contact you shortly.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            You're All Set!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Your request has been received. A licensed Florida insurance specialist will reach out to you shortly — typically within one business hour during our operating times.
          </p>
          
          <div className="space-y-4">
            <a
              href="/"
              className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-sm"
            >
              Back to Home
            </a>
            
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Need immediate assistance? Call us at<br />
                <a href="tel:+14356121009" className="font-bold text-gray-900 hover:text-yellow-600 transition-colors">
                  (435) 612-1009
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

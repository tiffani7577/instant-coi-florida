import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Instant COI Florida | Same-Day COI for Contractors',
  description: 'Need a COI today? Florida contractors get same-day Certificates of Insurance for general liability, workers comp, and commercial auto. Get connected with a licensed provider — specialists available Mon–Fri 9am–9pm EST.',
  alternates: { canonical: 'https://www.instantcoiflorida.com' },
}

const THIMBLE_LINK = 'https://link.thimble.com/broker/PKXHUYA2ZC'

const contractorTypes = [
  { icon: '🏠', label: 'Roofing Contractors', desc: 'GAF, Owens Corning, and independent roofers' },
  { icon: '❄️', label: 'HVAC Contractors', desc: 'Residential and commercial HVAC systems' },
  { icon: '⚡', label: 'Electrical Contractors', desc: 'Licensed Florida electrical contractors' },
  { icon: '🔧', label: 'Plumbing Contractors', desc: 'Plumbers and pipefitters statewide' },
  { icon: '🏗️', label: 'General Contractors', desc: 'GCs managing subcontractors and job sites' },
  { icon: '🌿', label: 'Landscaping', desc: 'Lawn care, tree trimming, irrigation' },
  { icon: '🎨', label: 'Painting Contractors', desc: 'Interior and exterior painting crews' },
  { icon: '🪟', label: 'Window & Door', desc: 'Impact window and door installers' },
]

const howItWorks = [
  { step: '1', title: 'Tell us what you need', desc: 'Your contractor type, coverage amount required, and who needs to be listed as additional insured.' },
  { step: '2', title: 'Get matched with a provider', desc: 'We connect you with a licensed insurance provider that can issue your certificate.' },
  { step: '3', title: 'Get your COI same day', desc: 'Your Certificate of Insurance is issued and emailed directly to you and your general contractor.' },
]

const coverageTypes = [
  {
    title: 'General Liability',
    desc: 'The most commonly required COI in Florida. Covers bodily injury and property damage caused by your work. Required by most GCs and property managers.',
    required: 'Usually $1M per occurrence / $2M aggregate',
  },
  {
    title: "Workers' Compensation",
    desc: "Required by Florida law for most contractors with employees. Protects workers injured on the job. Many GCs won't let you on site without it.",
    required: 'Statutory limits required by Florida law',
  },
  {
    title: 'Commercial Auto',
    desc: 'Covers vehicles used for business purposes. If you drive to job sites in a work truck or van, your personal auto policy likely does not cover you.',
    required: 'Typically $1M combined single limit',
  },
  {
    title: 'Umbrella / Excess Liability',
    desc: 'Provides additional coverage above your GL and auto limits. Required on larger commercial projects and government contracts.',
    required: 'Varies — $1M to $5M common',
  },
]

const counties = [
  'Miami-Dade', 'Broward', 'Palm Beach', 'Orange', 'Hillsborough',
  'Pinellas', 'Duval', 'Sarasota', 'Lee', 'Volusia', 'Brevard',
  'Polk', 'Manatee', 'Collier', 'Seminole',
]

const faqs = [
  {
    q: 'What is a Certificate of Insurance (COI)?',
    a: 'A COI is a one-page document that proves your insurance coverage is active. It lists your insurer, policy number, coverage types, limits, and effective dates. General contractors and property managers require it before allowing you to start work.',
  },
  {
    q: 'How fast can I get a COI in Florida?',
    a: 'If you already have an active policy, your COI can typically be issued the same day — sometimes within hours. If you need to purchase a new policy first, same-day binding is available for most standard contractor policies.',
  },
  {
    q: 'What does "additional insured" mean on a COI?',
    a: 'When a general contractor or property owner asks to be listed as "additional insured," it means they are added to your policy as a protected party. This is standard practice in Florida construction and is required on most commercial projects.',
  },
  {
    q: 'Does Florida require contractors to carry insurance?',
    a: 'Yes. Florida DBPR (Department of Business and Professional Regulation) requires licensed contractors to maintain active general liability insurance as a condition of their license. Roofing contractors in Florida must carry a minimum of $300,000 in general liability coverage. Workers\' compensation is required for contractors with employees.',
  },
  {
    q: 'Can I get a COI on a Saturday?',
    a: 'Yes — our partner providers handle requests throughout the week and weekend. Submit your information anytime, and you\'ll be connected with a licensed provider.',
  },
  {
    q: 'What information do I need to get a COI?',
    a: 'Your business name, address, contractor license number (if applicable), the coverage amounts required, and the name and address of the certificate holder (the GC or property manager who needs to be listed).',
  },
]

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section
        className="relative min-h-[85vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663413300520/2umk95hqGnFWYdBaBP8ZQA/coi-hero-UKAPTsejixz5MV6Yv6Dizw.webp')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/40 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-yellow-300 text-sm font-semibold">Same-Day COI Available</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4">
              Florida Contractors:<br />
              <span className="text-yellow-400">Get Your COI Today</span>
            </h1>
            <p className="text-gray-200 text-lg sm:text-xl leading-relaxed mb-8">
              Need a Certificate of Insurance before you can start the job? Most contractors, event vendors, and small businesses can get proof of insurance issued the same day — often in under 10 minutes.
            </p>
            <a
              href={THIMBLE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-0.5"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              Continue to Get My COI
            </a>
            <p className="text-gray-400 text-sm mt-3">You'll be taken to a secure provider to complete your coverage and receive your certificate.</p>
            <div className="flex flex-wrap gap-4 mt-6">
              {['No obligation', 'Same-day issuance', 'All contractor types', 'All Florida counties'].map(item => (
                <div key={item} className="flex items-center gap-1.5 text-gray-300 text-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Urgency bar */}
      <section className="bg-yellow-500 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-900 font-semibold text-sm sm:text-base text-center sm:text-left">
              🚨 <strong>Job on hold because you don&apos;t have a COI?</strong> Don&apos;t lose the contract — get connected now.
            </p>
            <a
              href={THIMBLE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-gray-900 hover:bg-gray-800 text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-colors"
            >
              Get Your COI
            </a>
          </div>
        </div>
      </section>

      {/* Who needs a COI */}
      <section id="who-needs-coi" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-yellow-600 text-sm font-semibold uppercase tracking-wider mb-2">Who Needs a COI?</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">Every Florida Contractor Working for a GC or Property Manager</h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">If you&apos;re a subcontractor in Florida, you almost certainly need to provide a COI before starting any job.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {contractorTypes.map((ct) => (
            <div key={ct.label} className="bg-white border border-gray-100 rounded-xl p-5 hover:border-yellow-300 hover:shadow-md transition-all">
              <div className="text-2xl mb-2">{ct.icon}</div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{ct.label}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{ct.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-yellow-400 text-sm font-semibold uppercase tracking-wider mb-2">How It Works</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">3 Steps to Your COI</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-2xl text-gray-900 font-bold">{step.step}</span>
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={THIMBLE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-xl text-lg transition-all"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              Continue to Get My COI
            </a>
            <p className="text-gray-500 text-sm mt-3">No spam. No obligation. Pay only if you choose coverage.</p>
          </div>
        </div>
      </section>

      {/* Coverage types */}
      <section id="coverage-types" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-yellow-600 text-sm font-semibold uppercase tracking-wider mb-2">Coverage Types</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">What Your COI Can Cover</h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">Florida contractors typically need one or more of these coverage types. Your specialist will confirm exactly what&apos;s required for your specific job.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coverageTypes.map((ct) => (
            <div key={ct.title} className="bg-white border border-gray-100 rounded-xl p-6 hover:border-yellow-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{ct.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{ct.desc}</p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Typical Requirement</p>
                <p className="text-gray-900 font-semibold">{ct.required}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Counties */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-yellow-600 text-sm font-semibold uppercase tracking-wider mb-2">Service Area</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">We Serve All Florida Counties</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">Whether you&apos;re in Miami or the Panhandle, we can connect you with a licensed provider in your area.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {counties.map((county) => (
              <div key={county} className="bg-white border border-gray-100 rounded-lg p-4 text-center hover:border-yellow-300 hover:shadow-sm transition-all">
                <p className="text-gray-900 font-semibold text-sm">{county}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">Get Your Certificate of Insurance in Minutes</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            We'll connect you with a licensed provider that can generate your certificate instantly based on your situation.
          </p>
          <a
            href={THIMBLE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-4 px-10 rounded-xl text-lg transition-all shadow-lg hover:shadow-yellow-500/30"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            Continue to Get My COI
          </a>
          <p className="text-gray-400 text-sm mt-4">You'll be taken to a secure provider to complete your coverage and receive your certificate.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-yellow-600 text-sm font-semibold uppercase tracking-wider mb-2">FAQ</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">Common Questions</h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-white border border-gray-100 rounded-xl p-6 hover:border-yellow-300 transition-colors cursor-pointer group">
              <summary className="font-semibold text-gray-900 text-lg flex items-center justify-between">
                {faq.q}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-open:rotate-180 transition-transform">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </summary>
              <p className="text-gray-600 mt-4">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Disclosure */}
      <section className="bg-gray-50 py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-gray-600 text-sm text-center">
            We may connect you with a licensed insurance provider to complete your coverage and receive your certificate. No spam. No obligation. Pay only if you choose coverage.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}

const PHONE = '(435) 612-1009'
const PHONE_HREF = 'tel:+14356121009'

const contractorTypes = [
  { label: 'Roofing Contractors' },
  { label: 'HVAC Contractors' },
  { label: 'Electrical Contractors' },
  { label: 'Plumbing Contractors' },
  { label: 'General Contractors' },
  { label: 'Landscaping Contractors' },
  { label: 'Painting Contractors' },
  { label: 'Flooring Contractors' },
]

const counties = [
  'Miami-Dade County', 'Broward County', 'Palm Beach County',
  'Orange County', 'Hillsborough County', 'Pinellas County',
  'Duval County', 'Sarasota County',
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div>
                <span className="font-serif text-base text-white leading-none block">Instant COI</span>
                <span className="text-xs font-semibold text-yellow-400 tracking-widest uppercase leading-none">Florida</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Same-day Certificate of Insurance information for Florida contractors. Call to get connected with a specialist now.
            </p>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg text-sm transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {PHONE}
            </a>
          </div>

          {/* Contractor Types */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contractor Types</h4>
            <ul className="space-y-2">
              {contractorTypes.map(item => (
                <li key={item.label} className="text-gray-400 text-sm">{item.label}</li>
              ))}
            </ul>
          </div>

          {/* Florida Counties */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Florida Counties Served</h4>
            <ul className="space-y-2">
              {counties.map(county => (
                <li key={county} className="text-gray-400 text-sm">{county}</li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Hours of Operation</h4>
            <div className="space-y-2 text-sm text-gray-400 mb-6">
              <div className="flex justify-between"><span>Monday – Friday</span><span className="text-white">9am – 9pm EST</span></div>
              <div className="flex justify-between"><span>Saturday</span><span className="text-white">12pm – 5pm EST</span></div>
              <div className="flex justify-between"><span>Sunday</span><span className="text-gray-600">Closed</span></div>
            </div>
            <p className="text-gray-500 text-xs">
              Florida DBPR licensed contractors must maintain active general liability insurance. A COI (Certificate of Insurance) is required by most general contractors and property managers before work begins.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Instant COI Florida. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs max-w-xl">
            <strong className="text-gray-500">Disclaimer:</strong> This site provides information about contractor insurance and connects Florida contractors with licensed insurance professionals. We are not a licensed insurance agency and do not issue policies directly. Always verify coverage with your licensed agent.
          </p>
        </div>
      </div>
    </footer>
  )
}

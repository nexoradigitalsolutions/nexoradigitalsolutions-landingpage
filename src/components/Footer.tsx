import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blog', href: '#blogs' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' }
  ]

  const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'Performance Optimization',
    'Security & Compliance',
    'Analytics & Growth',
    'Shopify Development',
    'WordPress Development',
    'Product & Market Research',
    'DApp Development',
    'Smart Contract Development',
    'Smart Contract Security Audit'
  ]

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/icon_without_bg.png" alt="Nexora Logo" className="w-24 h-24" />
              <span className="text-white font-bold text-lg">Nexora</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming ideas into digital solutions that drive growth and innovation.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://linkedin.com/company/nexora"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com/nexora"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://github.com/nexora"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:hello@nexorasolutions.website"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Part 1 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Part 2 */}
          <div>
            <h4 className="text-white font-semibold mb-4">More Services</h4>
            <ul className="space-y-2 text-sm">
              {services.slice(6).map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Leadership Team
                </a>
              </li>
              <li>
                <a href="https://careers.com/nexoradigitalsolutions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Nexora Digital Solutions. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

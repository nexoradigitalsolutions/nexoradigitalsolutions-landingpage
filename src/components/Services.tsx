import { Smartphone, Code, Palette, Zap, Shield, BarChart3, ShoppingCart, Globe, TrendingUp, Box, Lock } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const services = [
  {
    id: 'shopify-development',
    icon: ShoppingCart,
    title: 'Shopify Development',
    description: 'E-commerce solutions with custom Shopify stores, apps, and integrations.',
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 'wordpress-development',
    icon: Globe,
    title: 'WordPress Development',
    description: 'Professional WordPress sites, plugins, and custom themes tailored to your needs.',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    id: 'product-market-research',
    icon: TrendingUp,
    title: 'Product & Market Research',
    description: 'In-depth market analysis and product research to guide your business strategy.',
    color: 'from-rose-500 to-pink-500',
  },
  {
    id: 'dapp-development',
    icon: Box,
    title: 'DApp Development',
    description: 'Build decentralized applications on blockchain networks with secure and scalable solutions.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'smart-contract-development',
    icon: Code,
    title: 'Smart Contract Development',
    description: 'Create secure and efficient smart contracts for Ethereum, Solidity, and other blockchain platforms.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 'smart-contract-audit',
    icon: Lock,
    title: 'Smart Contract Security Audit',
    description: 'Comprehensive security audits and vulnerability assessments for your smart contracts.',
    color: 'from-red-500 to-rose-500',
  },
  {
    id: 'web-development',
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'mobile-apps',
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'ui-ux-design',
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that delight your users.',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'performance-optimization',
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast applications optimized for speed and efficiency.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'security-compliance',
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security with full compliance and data protection.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'analytics-growth',
    icon: BarChart3,
    title: 'Analytics & Growth',
    description: 'Data-driven insights to measure success and drive growth.',
    color: 'from-indigo-500 to-purple-500',
  },
]

export default function Services({ onLearnMore }: { onLearnMore?: (serviceName: string) => void }) {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = containerRef.current?.querySelectorAll('[data-index]')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions to elevate your digital presence and drive business growth
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            const isVisible = visibleCards.includes(index)

            return (
              <div
                key={index}
                data-index={index}
                className={`group relative bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-500 cursor-pointer overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6">
                    {service.description}
                  </p>

                  <button 
                    onClick={() => onLearnMore?.(service.id)}
                    className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                  >
                    Learn More →
                  </button>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/50 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

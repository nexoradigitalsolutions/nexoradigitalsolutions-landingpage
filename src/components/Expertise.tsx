import { useEffect, useRef, useState } from 'react'

const expertiseCategories = [
  {
    title: 'Frontend Technologies',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js', 'Vite'],
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST API'],
  },
  {
    title: 'Blockchain Platforms',
    skills: ['Ethereum', 'Polygon', 'Solana', 'BNB Chain', 'Arbitrum', 'Base'],
  },
  {
    title: 'Smart Contract Development',
    skills: ['Solidity', 'Web3.js', 'Hardhat', 'OpenZeppelin', 'Truffle', 'Foundry'],
  },
  {
    title: 'Mobile Development',
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo'],
  },
  {
    title: 'E-commerce & CMS',
    skills: ['Shopify', 'WordPress', 'WooCommerce', 'Liquid', 'PHP', 'ACF'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'CloudFlare'],
  },
  {
    title: 'Tools & Frameworks',
    skills: ['Git', 'Figma', 'IPFS', 'Redis', 'GraphQL', 'Jest'],
  },
]

export default function Expertise() {
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
    <section id="expertise" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Tech & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cutting-edge technologies and tools that power our solutions
          </p>
        </div>

        {/* Expertise Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {expertiseCategories.map((category, index) => {
            const isVisible = visibleCards.includes(index)

            return (
              <div
                key={index}
                data-index={index}
                className={`group relative bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-6 border border-slate-600 hover:border-cyan-500 transition-all duration-500 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-6">
                    {category.title}
                  </h3>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-2 bg-slate-800 text-cyan-300 text-xs rounded-full border border-cyan-500/30 hover:border-cyan-500 transition-all hover:bg-cyan-500/10 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/50 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-slate-700 to-slate-900 rounded-2xl p-8 border border-slate-600">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-cyan-400 mb-2">8+</h4>
              <p className="text-gray-300">Technology Categories</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-cyan-400 mb-2">50+</h4>
              <p className="text-gray-300">Tools & Technologies</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-cyan-400 mb-2">100%</h4>
              <p className="text-gray-300">Dedicated Expertise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

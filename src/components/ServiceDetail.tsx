import { ArrowLeft, Code, Smartphone, Palette, Zap, Shield, BarChart3, ShoppingCart, Globe, TrendingUp, CheckCircle, Box, Lock } from 'lucide-react'

interface ServicePageProps {
  onBack: () => void
}

const serviceDetails: { [key: string]: any } = {
  'web-development': {
    icon: Code,
    title: 'Web Development',
    color: 'from-blue-500 to-cyan-500',
    description: 'Custom web applications built with modern technologies and best practices.',
    longDescription: 'We create stunning, high-performance web applications that drive results. Our team specializes in building scalable solutions using the latest web technologies.',
    features: [
      'Responsive Design',
      'Progressive Web Apps',
      'Full Stack Development',
      'API Integration',
      'Database Design',
      'Performance Optimization',
      'SEO Optimization',
      'Security Best Practices'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Next.js', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Docker'],
  },
  'mobile-apps': {
    icon: Smartphone,
    title: 'Mobile Apps',
    color: 'from-purple-500 to-pink-500',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    longDescription: 'We develop powerful mobile applications that deliver exceptional user experiences across all devices.',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-Platform Solutions',
      'Push Notifications',
      'Offline Support',
      'Performance Optimization',
      'App Store Optimization',
      'Analytics Integration'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux', 'Native Modules', 'WebSocket'],
  },
  'ui-ux-design': {
    icon: Palette,
    title: 'UI/UX Design',
    color: 'from-orange-500 to-red-500',
    description: 'Beautiful and intuitive user interfaces that delight your users.',
    longDescription: 'We design user experiences that are not just beautiful, but also highly functional and conversion-focused.',
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Visual Design',
      'Interaction Design',
      'Usability Testing',
      'Design Systems',
      'Mobile Design'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Protopie', 'UserTesting', 'Hotjar', 'Maze', 'Miro'],
  },
  'performance-optimization': {
    icon: Zap,
    title: 'Performance Optimization',
    color: 'from-yellow-500 to-orange-500',
    description: 'Lightning-fast applications optimized for speed and efficiency.',
    longDescription: 'We optimize your applications to deliver lightning-fast performance and exceptional user experiences.',
    features: [
      'Code Splitting',
      'Lazy Loading',
      'Caching Strategies',
      'Image Optimization',
      'Database Optimization',
      'CDN Integration',
      'Monitoring & Analytics',
      'Load Testing'
    ],
    technologies: ['Webpack', 'Vite', 'Redis', 'CloudFlare', 'New Relic', 'DataDog', 'Lighthouse', 'WebPageTest'],
  },
  'security-compliance': {
    icon: Shield,
    title: 'Security & Compliance',
    color: 'from-green-500 to-emerald-500',
    description: 'Enterprise-grade security with full compliance and data protection.',
    longDescription: 'We implement industry-leading security measures to protect your data and ensure regulatory compliance.',
    features: [
      'GDPR Compliance',
      'Data Encryption',
      'Authentication & Authorization',
      'Security Audits',
      'Penetration Testing',
      'HIPAA Compliance',
      'PCI DSS Compliance',
      'Incident Response'
    ],
    technologies: ['OAuth 2.0', 'JWT', 'SSL/TLS', 'OWASP', 'Vault', 'Auth0', 'Snyk', 'OpenSCAP'],
  },
  'analytics-growth': {
    icon: BarChart3,
    title: 'Analytics & Growth',
    color: 'from-indigo-500 to-purple-500',
    description: 'Data-driven insights to measure success and drive growth.',
    longDescription: 'We provide comprehensive analytics and insights to help you understand user behavior and optimize for growth.',
    features: [
      'Event Tracking',
      'Conversion Optimization',
      'A/B Testing',
      'Funnel Analysis',
      'Custom Dashboards',
      'Data Visualization',
      'Predictive Analytics',
      'Growth Strategies'
    ],
    technologies: ['Google Analytics', 'Mixpanel', 'Amplitude', 'Segment', 'Tableau', 'Metabase', 'Looker', 'DBT'],
  },
  'shopify-development': {
    icon: ShoppingCart,
    title: 'Shopify Development',
    color: 'from-green-500 to-teal-500',
    description: 'E-commerce solutions with custom Shopify stores, apps, and integrations.',
    longDescription: 'We build powerful Shopify stores that maximize conversions and provide seamless shopping experiences.',
    features: [
      'Store Setup & Design',
      'Theme Development',
      'App Development',
      'Custom Integrations',
      'Payment Gateway Setup',
      'Inventory Management',
      'SEO Optimization',
      'Performance Optimization'
    ],
    technologies: ['Liquid', 'React', 'Node.js', 'Shopify API', 'GraphQL', 'Hydrogen', 'Remix', 'Polaris'],
  },
  'wordpress-development': {
    icon: Globe,
    title: 'WordPress Development',
    color: 'from-blue-600 to-cyan-500',
    description: 'Professional WordPress sites, plugins, and custom themes tailored to your needs.',
    longDescription: 'We create professional WordPress solutions that are powerful, flexible, and easy to manage.',
    features: [
      'Theme Development',
      'Plugin Development',
      'Custom Post Types',
      'WooCommerce Setup',
      'Performance Optimization',
      'Security Hardening',
      'SEO Optimization',
      'Migration Services'
    ],
    technologies: ['PHP', 'WordPress', 'ACF', 'WooCommerce', 'REST API', 'Gutenberg', 'Elementor', 'WP-CLI'],
  },
  'product-market-research': {
    icon: TrendingUp,
    title: 'Product & Market Research',
    color: 'from-rose-500 to-pink-500',
    description: 'In-depth market analysis and product research to guide your business strategy.',
    longDescription: 'We conduct comprehensive market research and product analysis to inform your business strategy and drive informed decisions.',
    features: [
      'Market Analysis',
      'Competitor Research',
      'User Interviews',
      'Survey Design',
      'Trend Analysis',
      'Product Roadmapping',
      'Pricing Strategy',
      'Go-to-Market Strategy'
    ],
    technologies: ['Quantcast', 'SimilarWeb', 'SEMrush', 'Ahrefs', 'Qualtrics', 'SurveyMonkey', 'UserTesting', 'Crunchbase'],
  },
  'dapp-development': {
    icon: Box,
    title: 'DApp Development',
    color: 'from-amber-500 to-orange-500',
    description: 'Build decentralized applications on blockchain networks with secure and scalable solutions.',
    longDescription: 'We develop innovative decentralized applications that leverage blockchain technology to create transparent, secure, and user-centric solutions.',
    features: [
      'Blockchain Architecture',
      'Web3 Integration',
      'Wallet Integration',
      'Token Economics',
      'Gas Optimization',
      'User Authentication',
      'Smart Contract Interaction',
      'DeFi Integration'
    ],
    technologies: ['Solidity', 'Web3.js', 'Ethers.js', 'Hardhat', 'Truffle', 'MetaMask', 'Blockchain', 'React'],
  },
  'smart-contract-development': {
    icon: Code,
    title: 'Smart Contract Development',
    color: 'from-violet-500 to-purple-500',
    description: 'Create secure and efficient smart contracts for Ethereum, Solidity, and other blockchain platforms.',
    longDescription: 'We write production-ready smart contracts with best practices, security audits, and comprehensive testing.',
    features: [
      'Solidity Programming',
      'Contract Architecture',
      'Gas Optimization',
      'Security Best Practices',
      'Testing & Debugging',
      'Mainnet Deployment',
      'Multi-chain Support',
      'Protocol Integration'
    ],
    technologies: ['Solidity', 'Vyper', 'Hardhat', 'Foundry', 'OpenZeppelin', 'IPFS', 'Ethereum', 'Polygon'],
  },
  'smart-contract-audit': {
    icon: Lock,
    title: 'Smart Contract Security Audit',
    color: 'from-red-500 to-rose-500',
    description: 'Comprehensive security audits and vulnerability assessments for your smart contracts.',
    longDescription: 'We provide thorough security audits to identify vulnerabilities, optimize gas usage, and ensure your contracts meet industry standards.',
    features: [
      'Code Review',
      'Vulnerability Assessment',
      'Static Analysis',
      'Dynamic Testing',
      'Gas Optimization',
      'Compliance Checking',
      'Detailed Reports',
      'Remediation Support'
    ],
    technologies: ['Slither', 'MythX', 'Echidna', 'Hardhat', 'OpenZeppelin', 'Certora', 'Manticore', 'Securify'],
  },
}

export default function ServiceDetail({ serviceName, onBack }: { serviceName: string } & ServicePageProps) {
  const service = serviceDetails[serviceName]

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <button
            onClick={onBack}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Back to Services
          </button>
        </div>
      </div>
    )
  }

  const Icon = service.icon

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      {/* Header */}
      <div className={`bg-gradient-to-r ${service.color} py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
              <Icon className="text-white" size={40} />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">{service.title}</h1>
              <p className="text-white/90 text-lg">{service.longDescription}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Features */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
            <div className="space-y-4">
              {service.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="text-cyan-500 mt-1 flex-shrink-0" size={24} />
                  <span className="text-gray-300 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Technologies</h2>
            <div className="grid grid-cols-2 gap-4">
              {service.technologies.map((tech: string, index: number) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${service.color} p-4 rounded-lg text-white font-semibold text-center hover:shadow-lg transition-all`}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-12 text-center border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how {service.title} can help transform your business and achieve your goals.
          </p>
          <button className={`bg-gradient-to-r ${service.color} text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all hover:scale-105`}>
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  )
}

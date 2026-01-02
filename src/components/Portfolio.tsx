import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration and inventory management',
    image: '🛒',
    category: 'web',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for managing multiple social media accounts in one place',
    image: '📊',
    category: 'web',
    tags: ['React', 'TypeScript', 'Firebase', 'Chart.js'],
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Real Estate App',
    description: 'Mobile app for browsing and managing real estate properties with AR preview',
    image: '🏠',
    category: 'mobile',
    tags: ['React Native', 'Firebase', 'AR', 'Maps API'],
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Fitness Tracking App',
    description: 'Cross-platform fitness app with workout tracking and community features',
    image: '💪',
    category: 'mobile',
    tags: ['Flutter', 'Firebase', 'Health Kit', 'Social'],
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Learning Management System',
    description: 'Comprehensive platform for online education with video streaming and assignments',
    image: '📚',
    category: 'web',
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Video.js'],
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'AI Content Generator',
    description: 'SaaS platform leveraging AI to generate marketing content and copy',
    image: '🤖',
    category: 'saas',
    tags: ['React', 'OpenAI API', 'Tailwind', 'PostgreSQL'],
    link: '#',
    github: '#',
  },
]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const categories = ['all', 'web', 'mobile', 'saas']

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Showcase of our latest and greatest projects
          </p>

          {/* Category Filter */}
          <div className="flex justify-center gap-3 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600 border border-slate-600'
                }`}
              >
                {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl overflow-hidden border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:scale-105"
            >
              {/* Project Image Area */}
              <div className="relative w-full h-48 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center overflow-hidden">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-800 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 active:scale-95">
                    <ExternalLink size={18} />
                    <span className="hidden sm:inline">View Project</span>
                    <span className="sm:hidden">View</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 bg-slate-700 text-gray-300 py-3 rounded-lg font-semibold hover:bg-slate-600 hover:border-cyan-500 border border-slate-600 transition-all duration-300 hover:scale-105 active:scale-95">
                    <Github size={18} />
                    <span className="hidden sm:inline">Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 text-lg mb-6">
            Interested in working together?
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 active:scale-95">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  )
}

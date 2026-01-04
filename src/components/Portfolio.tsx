import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'BetterKananga Portal',
    description: 'BetterKananga.org is a community-driven platform that makes Kananga government information and public services more accessible, transparent, and easy to navigate.',
    image: '/portfolio/images/betterkananga.png',
    category: 'web',
    tags: ['Vue', 'TypeScript', 'HTML', 'Tailwind CSS'],
    link: 'https://betterkananga.vercel.app/',
    github: 'https://github.com/nexoradigitalsolutions/betterkananga',
  },
  {
    id: 2,
    title: 'CV Hero',
    description: 'A modern, feature-rich CV/Resume builder application built with Next.js and TypeScript. Create, customize, and export professional resumes with AI-powered enhancements and a seamless user experience.',
    image: '/portfolio/images/cvhero.png',
    category: ['web', 'mobile' ,'saas'],
    tags: ['Nextjs', 'TypeScript', 'HTML', 'Tailwind CSS'],
    link: 'https://freecvhero.vercel.app',
    github: 'https://github.com/nexoradigitalsolutions/cvhero',
  },
]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

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
              className="group relative bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl overflow-hidden border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:scale-105"
            >
              {/* Project Image Area */}
              <div className="relative w-full h-48 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
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
                  <button 
                    onClick={() => window.open(project.link, '_blank')}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 active:scale-95">
                    <ExternalLink size={18} />
                    <span className="hidden sm:inline">View Project</span>
                    <span className="sm:hidden">View</span>
                  </button>
                  <button 
                    onClick={() => window.open(project.github, '_blank')}
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-700 text-gray-300 py-3 rounded-lg font-semibold hover:bg-slate-600 hover:border-cyan-500 border border-slate-600 transition-all duration-300 hover:scale-105 active:scale-95">
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
          <button 
           onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 active:scale-95">
              
              Start Your Project
          </button>
        </div>
      </div>
    </section>
  )
}

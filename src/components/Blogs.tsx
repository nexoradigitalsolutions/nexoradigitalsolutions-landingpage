import { ArrowRight, Calendar, User, ExternalLink } from 'lucide-react'

interface MediumBlog {
  url: string
  title: string
  author: string
  date: string
  category: string
  readTime: string
  image: string
}

interface BlogsProps {
  isFullPage?: boolean
}

export default function Blogs({ isFullPage = false }: BlogsProps) {
  // Add your Medium blog links here
  const blogs: MediumBlog[] = [
    {
      url: 'https://medium.com/@ardata.tech/supporting-platform-validation-for-wodan-ai-59f231bdba70?source=rss-a0e6ef659019------2',
      title: 'Supporting Platform Validation for Wodan AI',
      author: 'ArData Team',
      date: 'Jan 15, 2024',
      category: 'AI & Machine Learning',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1677442d019cecf76d2563a55b49d146ce70e999?w=600&h=400&fit=crop'
    },
    {
      url: 'https://medium.com/@ardata.tech/why-the-future-of-work-will-be-built-on-ai-and-decentralization-b3b7e8760142?source=rss-a0e6ef659019------2',
      title: 'Why the Future of Work Will Be Built on AI and Decentralization',
      author: 'ArData Team',
      date: 'Jan 10, 2024',
      category: 'Technology Trends',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1639762681033-cb5dcd67ec0b?w=600&h=400&fit=crop'
    }
  ]

  const displayBlogs = isFullPage ? blogs : blogs.slice(0, 3)

  return (
    <section id="blogs" className={isFullPage ? 'py-20 px-4 sm:px-6 lg:px-8' : 'py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50'}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blog Posts</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and industry trends from our team of experts on Medium.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className={isFullPage ? 'grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12' : 'grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'}>
          {displayBlogs.map((blog, index) => (
            <a
              key={index}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-cyan-500/10 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col h-full cursor-pointer"
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-cyan-500/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {blog.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-3">
                  {blog.title}
                </h3>

                <div className="flex-grow"></div>

                {/* Meta Info */}
                <div className="space-y-3 pt-4 border-t border-slate-700">
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <User size={14} />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-400 text-xs">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{blog.date}</span>
                    </div>
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Read on Medium Button */}
                <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold mt-4 group/btn">
                  Read on Medium
                  <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button - only on home page */}
        {!isFullPage && (
          <div className="text-center">
            <a
              href="https://medium.com/@nexora"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-semibold"
            >
              View All Articles on Medium
              <ArrowRight size={20} />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

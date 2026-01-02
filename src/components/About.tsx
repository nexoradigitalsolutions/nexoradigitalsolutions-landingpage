import { Zap, Target, Users, Award, ArrowRight } from 'lucide-react'

const CAREERS_URL = 'https://careers.com/nexoradigitalsolutions' // Update with your careers page URL

export default function About() {
  const highlights = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Cutting-Edge Technology',
      description: 'We leverage the latest technologies and frameworks to build scalable, modern solutions that drive innovation.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Focused on Results',
      description: 'Our approach is results-driven, ensuring every project delivers measurable business value and exceptional ROI.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Team',
      description: 'Our leadership team brings decades of combined experience in web development, mobile apps, and blockchain solutions.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Assured',
      description: 'We maintain the highest standards of code quality, security, and performance across all our deliverables.'
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Nexora</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a team of passionate digital innovators dedicated to transforming businesses through technology.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-cyan-500/10">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded"></div>
              Our Mission
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To empower businesses of all sizes with innovative digital solutions that drive growth, enhance efficiency, and create lasting competitive advantages in the digital landscape.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 p-8 rounded-xl border border-blue-500/10">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-cyan-500 rounded"></div>
              Our Vision
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To become the most trusted partner for digital transformation, recognized for delivering exceptional solutions that exceed expectations and set new industry standards.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Why Choose Nexora?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-cyan-500/10 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <p className="text-gray-300 font-medium">Projects Delivered</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                30+
              </div>
              <p className="text-gray-300 font-medium">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                10+
              </div>
              <p className="text-gray-300 font-medium">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                8+
              </div>
              <p className="text-gray-300 font-medium">Tech Categories</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-cyan-400 mb-3">Innovation</h4>
              <p className="text-gray-300">We constantly push boundaries and explore new technologies to deliver solutions that are ahead of the curve.</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-blue-400 mb-3">Integrity</h4>
              <p className="text-gray-300">We operate with transparency, honesty, and accountability in all our dealings with clients and partners.</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-cyan-400 mb-3">Excellence</h4>
              <p className="text-gray-300">We strive for excellence in every aspect of our work, from code quality to customer service.</p>
            </div>
          </div>
        </div>

        {/* Join Us CTA */}
        <div className="mt-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Join Our Team?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            We're always looking for talented individuals who are passionate about technology and innovation. Explore our open positions and join us on our mission to transform businesses.
          </p>
          <a
            href={CAREERS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-semibold"
          >
            View Open Positions
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

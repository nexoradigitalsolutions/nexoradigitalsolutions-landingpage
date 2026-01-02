import { Linkedin, Mail, Github } from 'lucide-react'

const team = [
  {
    id: 1,
    name: 'Allan Brando Catayoc',
    role: 'Head of Technology',
    expertise: ['Full Stack Development', 'System Architecture', 'Cloud Solutions', 'Tech Leadership', 'Blockchain Development'],
    image: '👨‍💻',
    email: 'allan@nexora.com',
    linkedin: 'https://www.linkedin.com/in/allanbrandocatayoc/',
    github: '#',
  },
  {
    id: 2,
    name: 'Bryan Mejares',
    role: 'Head of Product Research',
    expertise: ['Product Strategy', 'Market Analysis', 'User Research', 'Data Analytics', 'Competitive Intelligence'],
    image: '👨‍💼',
    email: 'bryan@nexora.com',
    linkedin: 'https://www.linkedin.com/in/bryan-mejares-904187244/',
    github: '#',
  },
  {
    id: 3,
    name: 'Ryan Panuncia',
    role: 'Head of Marketing',
    expertise: ['Digital Marketing', 'Brand Strategy', 'Growth Marketing', 'Campaign Management', 'Content Creation'],
    image: '👨‍🎓',
    email: 'ryan@nexora.com',
    linkedin: 'https://www.linkedin.com/in/ryan-panuncia-8253b6260/',
    github: '#',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Visionary leaders driving innovation and excellence across technology, product, and marketing
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:scale-105"
            >
              {/* Member Image Area */}
              <div className="relative w-full h-56 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center overflow-hidden">
                <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {member.image}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-cyan-400 font-semibold mb-4 text-sm">
                  {member.role}
                </p>

                {/* Expertise Tags */}
                <div className="mb-6">
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-3 font-semibold">
                    Expertise
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-700 text-cyan-300 text-xs rounded-full border border-cyan-500/30 hover:border-cyan-500 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 pt-4 border-t border-slate-700">
                  <a href={`mailto:${member.email}`} className="flex-1 flex items-center justify-center gap-2 bg-slate-700 text-gray-300 hover:bg-cyan-600 hover:text-white py-2 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95">
                    <Mail size={18} />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-slate-700 text-gray-300 hover:bg-cyan-600 hover:text-white py-2 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95">
                    <Linkedin size={18} />
                  </a>
                  <a href={member.github} className="flex-1 flex items-center justify-center gap-2 bg-slate-700 text-gray-300 hover:bg-cyan-600 hover:text-white py-2 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95">
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 text-lg mb-6">
            Want to join our amazing team?
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 active:scale-95">
            Join Us
          </button>
        </div>
      </div>
    </section>
  )
}

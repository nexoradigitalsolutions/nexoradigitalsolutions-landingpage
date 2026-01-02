import { ArrowRight, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 flex items-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -top-40 -left-40 animate-blob"></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -bottom-40 -right-40 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-slate-800 rounded-full border border-cyan-500/30">
              <Zap size={16} className="text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Next Generation Digital Solutions</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Digital Innovation
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              We create cutting-edge web and mobile applications, blockchain solutions, and smart contracts that drive growth and engagement. From concept to launch, we deliver excellence across all digital platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2">
                Start Your Project
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-slate-700">
              <div>
                <div className="text-3xl font-bold text-cyan-400">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">30+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">10+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div
            className={`hidden md:flex items-center justify-center transition-all duration-1000 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
              <div className="absolute inset-0 border-2 border-cyan-500/50 rounded-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl transform rotate-45 opacity-20"></div>
              </div>
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                  ✨
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

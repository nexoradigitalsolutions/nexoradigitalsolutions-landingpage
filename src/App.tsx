import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Expertise from './components/Expertise'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ServiceDetail from './components/ServiceDetail'
import Blogs from './components/Blogs'

export default function App() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const handleLearnMore = (serviceName: string) => {
    setSelectedService(serviceName)
    window.scrollTo(0, 0)
  }

  const handleBackToHome = () => {
    setSelectedService(null)
  }

  // Service Detail Page
  if (selectedService) {
    return (
      <div className="bg-slate-900 min-h-screen">
        <Navigation />
        <ServiceDetail serviceName={selectedService} onBack={handleBackToHome} />
        <Footer />
      </div>
    )
  }

  // Main Home Page
  return (
     <div className="bg-slate-900 min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services onLearnMore={handleLearnMore} />
      <Portfolio />
      <Expertise />
      <Team />
      {/*<Blogs /> */}
      <Contact />
      <Footer />
    </div> 
  )
}
import { useState, useEffect } from 'react'
import { TopInfoBar } from './components/TopInfoBar'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ServicesSection } from './components/ServicesSection'
import { ProjectsSection } from './components/ProjectsSection'
import { AboutSection } from './components/AboutSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export function App() {
  const [showTopInfoBar, setShowTopInfoBar] = useState(true)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY
          const heroSectionHeight = window.innerHeight * 0.8 // Approximate hero section height
          
          // Hide TopInfoBar when scrolled past hero section
          const shouldShowTopInfoBar = scrollPosition < heroSectionHeight
          
          // Only update state if it actually changed to prevent unnecessary re-renders
          setShowTopInfoBar(prev => {
            if (prev !== shouldShowTopInfoBar) {
              return shouldShowTopInfoBar
            }
            return prev
          })
          
          ticking = false
        })
        ticking = true
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopInfoBar isVisible={showTopInfoBar} />
      <Header hasTopInfoBar={showTopInfoBar} />
      <main className="flex-grow">
        <HeroSection hasTopInfoBar={showTopInfoBar} />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

// Support both named and default exports
export default App
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loading from './components/Loading'
import SkillsAndExperience from './components/SkillsAndExperience'
import Achievements from './components/Achievements'
import styles from './style'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-primary text-white font-poppins">
      {/* Navbar visible at all times (sticky) */}
      <Navbar />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading key="loading" />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="pt-[100px]"
          >
            <Hero />
            <SkillsAndExperience />
            <Education />
            <Achievements />
            <Projects />
            <Contact />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

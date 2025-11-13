'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="layout">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div 
            className="text-2xl font-heading font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-red-400">Amdadul</span> Haque
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-red-400 transition-colors duration-300 relative group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              className="flex items-center gap-2 bg-gradient-to-r from-red-400 to-red-600 text-white px-6 py-2 rounded-lg hover:from-red-500 hover:to-red-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="text-sm" />
              Download CV
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
          initial={false}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-white hover:text-red-400 transition-colors duration-300 py-2"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              className="flex items-center gap-2 bg-gradient-to-r from-red-400 to-red-600 text-white px-6 py-2 rounded-lg hover:from-red-500 hover:to-red-700 transition-all duration-300 mt-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: navItems.length * 0.1 }}
            >
              <FaDownload className="text-sm" />
              Download CV
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

export { Header }
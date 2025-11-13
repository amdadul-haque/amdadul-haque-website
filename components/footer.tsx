'use client'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp, FaHeart } from 'react-icons/fa'
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss } from 'react-icons/si'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { 
      icon: FaLinkedin, 
      url: 'https://linkedin.com/in/amdadul-haque', 
      label: 'LinkedIn',
      color: 'hover:text-blue-500' 
    },
    { 
      icon: FaGithub, 
      url: 'https://github.com/amdadul-haque', 
      label: 'GitHub',
      color: 'hover:text-gray-400' 
    },
    { 
      icon: FaTwitter, 
      url: 'https://twitter.com/amdadul_haque', 
      label: 'Twitter',
      color: 'hover:text-blue-400' 
    },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
  ]

  const contactInfo = [
    { icon: FaEnvelope, text: 'amdadul.haque@gmail.com', href: 'mailto:amdadul.haque@gmail.com' },
    { icon: FaPhone, text: '+880 1234 567890', href: 'tel:+8801234567890' },
    { icon: FaMapMarkerAlt, text: 'Dhaka, Bangladesh', href: 'https://maps.google.com' },
  ]

  const techStack = [
    { icon: SiNextdotjs, name: 'Next.js' },
    { icon: SiReact, name: 'React' },
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: SiTailwindcss, name: 'TailwindCSS' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="layout py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-heading font-bold text-white mb-4">
                <span className="text-red-400">Amdadul</span> Haque
              </h3>
              <p className="text-gray-300 max-w-md leading-relaxed">
                Full Stack Engineer passionate about creating innovative web solutions. 
                Let's build something amazing together.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:scale-110`}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    aria-label={social.label}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                />
                <motion.button
                  className="bg-red-400 hover:bg-red-500 text-white px-6 py-3 rounded-r-lg transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: quickLinks.length * 0.1 }}
                viewport={{ once: true }}
              >
                <a
                  href="/cv.pdf"
                  download
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  Download CV
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={contact.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-red-400 transition-colors duration-300 group"
                  >
                    <contact.icon className="text-red-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">{contact.text}</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Built With */}
            <div className="mt-8">
              <h5 className="text-white font-medium mb-4 text-sm">Built with</h5>
              <div className="flex space-x-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="w-8 h-8 bg-gray-800 rounded-md flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    title={tech.name}
                  >
                    <tech.icon className="text-sm" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="layout py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className="text-gray-400 text-sm flex items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              © {currentYear} Amdadul Haque. Made with{' '}
              <motion.span
                className="text-red-400 mx-1"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <FaHeart />
              </motion.span>
              in Bangladesh
            </motion.p>
            
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-6 text-gray-400 text-sm">
                <a href="/privacy" className="hover:text-red-400 transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-red-400 transition-colors">Terms of Service</a>
              </div>
              
              <motion.button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gray-800 hover:bg-red-400 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll to top"
              >
                <FaArrowUp />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
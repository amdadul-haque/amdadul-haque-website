'use client'
import { projects } from '@/constant/project'
import { FaExternalLinkAlt, FaEye, FaCode, FaFilter } from "react-icons/fa";
import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {}

const Projects = (props: Props) => {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  // Get unique industries for filter
  const allIndustries = useMemo(() => {
    const industries = new Set(['All'])
    projects.forEach(project => {
      project.industries.forEach(industry => {
        if (industry.trim()) industries.add(industry)
      })
    })
    return Array.from(industries)
  }, [])

  // Filter projects based on selected filter
  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'All') return projects
    return projects.filter(project => 
      project.industries.includes(selectedFilter)
    )
  }, [selectedFilter])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section id='projects' className='py-20 bg-black relative overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-40 right-10 w-40 h-40 bg-gradient-to-br from-red-400/10 to-red-600/10 rounded-full blur-3xl"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className='layout relative z-10'>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='heading mb-6'>Featured Projects</h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            A showcase of my recent work across various industries and technologies. 
            Each project represents a unique challenge and creative solution.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FaFilter className="text-red-400 text-xl mr-2 mt-2" />
          {allIndustries.map((industry) => (
            <motion.button
              key={industry}
              onClick={() => setSelectedFilter(industry)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedFilter === industry
                  ? 'bg-red-400 text-white shadow-lg shadow-red-400/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {industry}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFilter}
            className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {filteredProjects.map((item, index) => (
              <motion.div
                key={`${item.sl}-${selectedFilter}`}
                variants={cardVariants}
                className='group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-red-400/50 transition-all duration-500'
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -10 }}
              >
                {/* Project Preview */}
                <div className="relative h-64 overflow-hidden bg-gray-800">
                  <iframe
                    src={item.liveUrl}
                    title={`${item.title} preview`}
                    className="w-full h-full pointer-events-none scale-75 origin-top-left transform transition-transform duration-500 group-hover:scale-90"
                    style={{
                      border: "none",
                      width: "133.33%",
                      height: "133.33%",
                    }}
                    scrolling="no"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-300 ${
                    hoveredProject === index ? 'opacity-90' : 'opacity-60'
                  }`}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex gap-3">
                        <motion.a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-white transition-all duration-300 shadow-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaEye />
                          <span>View Live</span>
                        </motion.a>
                        
                        <motion.button
                          className="flex items-center gap-2 bg-red-400/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium hover:bg-red-400 transition-all duration-300 shadow-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaCode />
                          <span>Code</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Project Number */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-400 text-white px-2 py-1 rounded-full text-xs font-bold">
                      #{item.sl.toString().padStart(2, '0')}
                    </span>
                  </div>

                  {/* External Link Icon */}
                  <motion.div
                    className="absolute top-4 right-4"
                    whileHover={{ scale: 1.2, rotate: 45 }}
                  >
                    <FaExternalLinkAlt className="text-white/70 hover:text-white transition-colors" />
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className='p-6'>
                  <motion.h3 
                    className='text-xl font-heading text-white mb-2 group-hover:text-red-400 transition-colors duration-300'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.title}
                  </motion.h3>
                  
                  <motion.p 
                    className='text-gray-400 text-sm mb-4 leading-relaxed'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                  >
                    {item.description || "A comprehensive web solution built with modern technologies and best practices."}
                  </motion.p>
                  
                  {/* Industries/Tags */}
                  <motion.div 
                    className='flex flex-wrap gap-2'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {item.industries.map((industry, tagIndex) => (
                      <span
                        key={tagIndex}
                        className='bg-gray-800/80 text-gray-300 px-2 py-1 rounded-md text-xs border border-gray-700 hover:border-red-400/50 transition-colors'
                      >
                        {industry}
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-400/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Projects CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-8 text-lg">
            Want to see more of my work or discuss a project?
          </p>
          <motion.button
            className="bg-gradient-to-r from-red-400 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-500 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export { Projects }


'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaPlay, FaArrowDown } from 'react-icons/fa'

type Props = {}

const Hero = (props: Props) => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id='home' className='relative min-h-screen flex items-center border-b border-gray-800 overflow-hidden'>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-red-400/20 to-red-600/20 rounded-full blur-xl"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-xl"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-full blur-xl"
          animate={{
            y: [-15, 15, -15],
            x: [-5, 5, -5],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/90 to-black" />
      </div>

      <div className='layout py-20 relative z-10'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-16 lg:gap-y-0'>
          {/* Left Content */}
          <motion.div 
            className='w-full lg:w-1/2 text-center lg:text-left'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <span className="inline-block bg-gradient-to-r from-red-400 to-red-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1 
              className='text-4xl md:text-6xl xl:text-7xl leading-[1.1] font-heading text-white mb-6'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Hi, I am{' '}
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                Amdadul Haque
              </span>
            </motion.h1>

            <motion.p 
              className='text-lg xl:text-xl text-gray-300 max-w-[600px] mb-8 leading-relaxed mx-auto lg:mx-0'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Dhaka, Bangladesh based{' '}
              <span className="text-red-400 font-medium">full stack engineer</span>, 
              passionate about building high-end software solutions that make a difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.button
                className="bg-gradient-to-r from-red-400 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-500 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-red-500/25 flex items-center justify-center gap-3 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#projects')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <FaPlay className="group-hover:translate-x-1 transition-transform" />
                View My Work
              </motion.button>
              
              <motion.button
                className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="group-hover:translate-y-1 transition-transform" />
                Download CV
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className='grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-800'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              {[
                { label: 'Projects', value: '120+' },
                { label: 'Experience', value: '7+ Years' },
                { label: 'Satisfaction', value: '95%' }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className='text-center lg:text-left'
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className='text-2xl lg:text-3xl font-bold text-red-400 mb-1'>
                    {stat.value}
                  </div>
                  <div className='text-gray-400 text-sm'>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className='w-full lg:w-1/2 max-w-[500px] flex justify-center lg:justify-end relative'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="relative group">
              {/* Animated Border */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={"/images/hero.png"}
                  alt='Amdadul Haque'
                  width={600}
                  height={600}
                  className='rounded-2xl w-full max-w-[450px] h-auto shadow-2xl'
                  priority
                />
                
                {/* Floating Elements around image */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-red-400 rounded-full shadow-lg"
                  animate={{
                    y: [-10, 10, -10],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full shadow-lg"
                  animate={{
                    y: [10, -10, 10],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                
                <motion.div
                  className="absolute top-1/2 -left-6 w-4 h-4 bg-purple-400 rounded-full shadow-lg"
                  animate={{
                    x: [-5, 5, -5],
                    scale: [1, 0.9, 1]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
              </motion.div>
              
              {/* Background decoration */}
              <div className='absolute w-full h-full top-4 left-4 hero-img bg-red-200 rounded-2xl -z-10 group-hover:-top-2 group-hover:-left-2 duration-300 ease-in-out opacity-80'></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-gray-400 hover:text-red-400 transition-colors"
        >
          <span className="text-sm mb-2">Scroll down</span>
          <FaArrowDown className="text-xl" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export { Hero }
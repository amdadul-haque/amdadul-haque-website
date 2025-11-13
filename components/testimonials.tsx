'use client'
import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format',
      rating: 5,
      text: 'Amdadul delivered exactly what we needed for our e-commerce platform. His attention to detail and technical expertise made the entire process smooth. The website performance improved by 60% after his optimization!',
      project: 'E-commerce Platform Development'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Founder, Digital Solutions',
      company: 'Digital Solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format',
      rating: 5,
      text: 'Working with Amdadul was a game-changer for our startup. He not only built our MVP but also provided valuable insights on user experience. The app has been running flawlessly for over a year.',
      project: 'Mobile App Development'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Marketing Director, GrowthCo',
      company: 'GrowthCo',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format',
      rating: 5,
      text: 'Exceptional work on our company website! Amdadul understood our brand vision perfectly and created a modern, responsive site that increased our conversion rate by 40%. Highly recommended!',
      project: 'Corporate Website Redesign'
    },
    {
      id: 4,
      name: 'David Kim',
      position: 'Product Manager, InnovateLab',
      company: 'InnovateLab',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format',
      rating: 5,
      text: 'Amdadul\'s full-stack expertise helped us build a complex dashboard application. He delivered on time, within budget, and the code quality was outstanding. Great communication throughout the project.',
      project: 'Dashboard Application'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      position: 'Entrepreneur',
      company: 'Boutique Store',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face&auto=format',
      rating: 5,
      text: 'From concept to launch, Amdadul guided us through every step of creating our online store. The payment integration works flawlessly, and our customers love the smooth shopping experience.',
      project: 'Online Store Development'
    },
    {
      id: 6,
      name: 'Robert Wilson',
      position: 'CTO, FintechPro',
      company: 'FintechPro',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face&auto=format',
      rating: 5,
      text: 'Security and performance were our top priorities, and Amdadul delivered both. The financial application he built handles thousands of transactions daily without any issues. Excellent work!',
      project: 'Fintech Application'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="layout">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading mb-6">What Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real feedback from real clients who trusted me with their projects. 
            Their success is my success.
          </p>
        </motion.div>

        {/* Main Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="relative h-96 overflow-hidden">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/50 shadow-2xl max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Client Image */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-red-400"
                      />
                      <div className="absolute -top-2 -right-2 bg-red-400 rounded-full p-2">
                        <FaQuoteLeft className="text-white text-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Stars */}
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-xl mr-1" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-gray-200 text-lg md:text-xl mb-6 leading-relaxed italic">
                      "{testimonials[currentIndex].text}"
                    </blockquote>

                    {/* Client Info */}
                    <div>
                      <h4 className="text-white font-heading text-xl mb-1">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-red-400 font-medium mb-1">
                        {testimonials[currentIndex].position}
                      </p>
                      <p className="text-gray-400 text-sm mb-2">
                        {testimonials[currentIndex].company}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 bg-red-400/20 text-red-400 text-sm rounded-full">
                        {testimonials[currentIndex].project}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-400 hover:text-white transition-all duration-300 border border-gray-700"
            aria-label="Previous testimonial"
          >
            <FaArrowLeft />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-400 hover:text-white transition-all duration-300 border border-gray-700"
            aria-label="Next testimonial"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-red-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Happy Clients', value: '120+', description: 'Satisfied customers worldwide' },
            { label: 'Project Success Rate', value: '99%', description: 'Projects delivered on time' },
            { label: 'Average Rating', value: '4.9/5', description: 'Based on client reviews' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-red-400/50 transition-all duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-red-400 mb-2">{stat.value}</div>
              <div className="text-white font-heading text-lg mb-2">{stat.label}</div>
              <div className="text-gray-300 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export { Testimonials }
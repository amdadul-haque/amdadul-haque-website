'use client'
import { motion } from 'framer-motion'
import { FaCode, FaMobile, FaServer, FaSearch, FaPaintBrush, FaRocket, FaShoppingCart, FaBrain } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Modern UI/UX'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: FaMobile,
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps using React Native and modern mobile development frameworks.',
      features: ['iOS & Android', 'Native Performance', 'Push Notifications', 'Offline Support'],
      color: 'from-green-400 to-green-600'
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      description: 'Scalable server-side solutions with Node.js, Express, databases, and cloud services.',
      features: ['REST APIs', 'Database Design', 'Cloud Integration', 'Security'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: FaShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration, inventory management, and admin panels.',
      features: ['Payment Gateway', 'Inventory Management', 'Admin Dashboard', 'Order Tracking'],
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: FaPaintBrush,
      title: 'UI/UX Design',
      description: 'User-centered design approach creating intuitive and visually appealing digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: FaRocket,
      title: 'Performance Optimization',
      description: 'Speed up your website and applications with advanced optimization techniques and best practices.',
      features: ['Code Splitting', 'Image Optimization', 'Caching Strategies', 'Core Web Vitals'],
      color: 'from-red-400 to-red-600'
    },
    {
      icon: FaSearch,
      title: 'SEO & Marketing',
      description: 'Improve your online visibility and drive more traffic with SEO optimization and digital marketing.',
      features: ['Technical SEO', 'Content Strategy', 'Analytics Setup', 'Performance Tracking'],
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: FaBrain,
      title: 'AI Integration',
      description: 'Integrate AI and machine learning capabilities into your applications for enhanced user experiences.',
      features: ['ChatBot Integration', 'AI APIs', 'Data Analysis', 'Automation'],
      color: 'from-cyan-400 to-cyan-600'
    }
  ]

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="layout">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading mb-6">Services I Provide</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, I offer comprehensive development services 
            to help bring your digital vision to life.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800 transition-all duration-300 border border-gray-700/50 hover:border-gray-600"
              whileHover={{ y: -10 }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-2xl text-white" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-heading text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      className="text-sm text-gray-300 flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`}></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-xl blur-xl opacity-30`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-8 text-lg">
            Need something specific? Let's discuss your project requirements.
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
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export { Services }
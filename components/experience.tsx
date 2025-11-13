'use client'
import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaCertificate } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      icon: FaBriefcase,
      title: 'Senior Full Stack Developer',
      company: 'Freelance',
      location: 'Remote',
      period: '2020 - Present',
      description: 'Leading full-stack development projects, creating scalable web applications, and providing technical consultation for startups and established businesses.',
      achievements: [
        'Delivered 120+ successful projects across various industries',
        'Maintained 95% client satisfaction rate',
        'Specialized in React, Next.js, Node.js, and MongoDB',
        'Developed e-commerce platforms processing millions in transactions'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      type: 'work',
      icon: FaBriefcase,
      title: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'Dhaka, Bangladesh',
      period: '2018 - 2020',
      description: 'Developed and maintained web applications using modern JavaScript frameworks and backend technologies.',
      achievements: [
        'Built responsive web applications serving 100K+ users',
        'Optimized application performance by 40%',
        'Collaborated with cross-functional teams',
        'Mentored junior developers'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      type: 'education',
      icon: FaGraduationCap,
      title: 'Bachelor of Science in Computer Science',
      company: 'University of Dhaka',
      location: 'Dhaka, Bangladesh',
      period: '2015 - 2018',
      description: 'Focused on software engineering, algorithms, and web technologies. Graduated with honors.',
      achievements: [
        'CGPA: 3.8/4.0',
        'Dean\'s List for 6 consecutive semesters',
        'Led university programming club',
        'Won inter-university coding competition'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      type: 'work',
      icon: FaBriefcase,
      title: 'Junior Web Developer',
      company: 'Digital Agency BD',
      location: 'Dhaka, Bangladesh',
      period: '2017 - 2018',
      description: 'Started my professional journey creating websites and learning modern development practices.',
      achievements: [
        'Developed 20+ client websites',
        'Learned React and Node.js',
        'Improved team workflow efficiency',
        'Received "Rising Star" award'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      type: 'certification',
      icon: FaCertificate,
      title: 'AWS Certified Developer',
      company: 'Amazon Web Services',
      location: 'Online',
      period: '2019',
      description: 'Specialized certification in cloud development and deployment using AWS services.',
      achievements: [
        'Scored 85% on certification exam',
        'Learned cloud architecture patterns',
        'Implemented serverless solutions',
        'Optimized cloud costs for clients'
      ],
      color: 'from-yellow-500 to-yellow-600'
    }
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case 'work': return FaBriefcase
      case 'education': return FaGraduationCap
      case 'certification': return FaCertificate
      default: return FaBriefcase
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="layout">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading mb-6">Experience & Education</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey in software development, from education to professional experience, 
            continuously learning and growing in the tech industry.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 bg-gradient-to-b from-red-400 to-red-600 h-full"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => {
              const Icon = getIcon(exp.type)
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border-4 border-red-400 flex items-center justify-center z-10">
                    <Icon className="text-red-400 text-xl" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'} ml-24 md:ml-0`}>
                    <motion.div
                      className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 group"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      {/* Header */}
                      <div className="mb-4">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm mb-3 bg-gradient-to-r ${exp.color} text-white`}>
                          {exp.period}
                        </div>
                        <h3 className="text-xl font-heading text-white mb-2 group-hover:text-red-400 transition-colors">
                          {exp.title}
                        </h3>
                        <div className="text-red-400 font-medium mb-1">{exp.company}</div>
                        <div className="text-gray-400 text-sm">{exp.location}</div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="text-white font-medium text-sm mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              className="text-sm text-gray-300 flex items-start"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: (index * 0.1) + (achIndex * 0.05) }}
                              viewport={{ once: true }}
                            >
                              <div className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Decorative Element */}
                      <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${exp.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                    </motion.div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Skills Summary */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-heading text-white mb-6">Core Competencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Years of Experience', value: '7+' },
                { label: 'Projects Completed', value: '120+' },
                { label: 'Technologies Mastered', value: '15+' },
                { label: 'Client Satisfaction', value: '95%' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-red-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { Experience }
'use client'
import { motion } from 'framer-motion'
import { FaCalendar, FaClock, FaUser, FaArrowRight, FaTag } from 'react-icons/fa'

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'Building Scalable Web Applications with Next.js 14',
      excerpt: 'Discover the latest features in Next.js 14 and how to leverage them for building high-performance web applications.',
      content: 'In this comprehensive guide, we explore the new App Router, Server Components, and performance optimizations...',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&auto=format',
      author: 'Amdadul Haque',
      date: '2024-11-10',
      readTime: '8 min read',
      category: 'Web Development',
      tags: ['Next.js', 'React', 'JavaScript', 'Performance'],
      featured: true
    },
    {
      id: 2,
      title: 'The Future of Frontend Development: Web Components vs React',
      excerpt: 'A deep dive into Web Components and how they compare to React in modern frontend development.',
      content: 'As the web development landscape evolves, developers are constantly looking for better ways to build...',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&auto=format',
      author: 'Amdadul Haque',
      date: '2024-11-05',
      readTime: '12 min read',
      category: 'Frontend',
      tags: ['Web Components', 'React', 'Frontend', 'Architecture'],
      featured: false
    },
    {
      id: 3,
      title: 'Optimizing Database Performance in Node.js Applications',
      excerpt: 'Learn effective strategies to optimize database queries and improve your Node.js application performance.',
      content: 'Database optimization is crucial for any backend application. In this article, we\'ll explore various techniques...',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format',
      author: 'Amdadul Haque',
      date: '2024-10-28',
      readTime: '10 min read',
      category: 'Backend',
      tags: ['Node.js', 'Database', 'Performance', 'MongoDB'],
      featured: false
    },
    {
      id: 4,
      title: 'TypeScript Best Practices for Large-Scale Applications',
      excerpt: 'Essential TypeScript patterns and practices for maintaining clean, scalable codebases.',
      content: 'TypeScript has become an essential tool for JavaScript developers. This article covers advanced patterns...',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop&auto=format',
      author: 'Amdadul Haque',
      date: '2024-10-20',
      readTime: '15 min read',
      category: 'Programming',
      tags: ['TypeScript', 'Best Practices', 'Architecture', 'Scalability'],
      featured: false
    },
    {
      id: 5,
      title: 'Building Real-time Applications with WebSocket and Socket.io',
      excerpt: 'Step-by-step guide to implementing real-time features in your web applications.',
      content: 'Real-time communication is essential for modern web applications. Let\'s explore how to implement...',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&auto=format',
      author: 'Amdadul Haque',
      date: '2024-10-15',
      readTime: '11 min read',
      category: 'Full Stack',
      tags: ['WebSocket', 'Socket.io', 'Real-time', 'Node.js'],
      featured: false
    },
    {
      id: 6,
      title: 'Modern CSS Techniques: Grid, Flexbox, and Container Queries',
      excerpt: 'Master modern CSS layout techniques and create responsive designs that work everywhere.',
      content: 'CSS has evolved significantly in recent years. This comprehensive guide covers the latest layout techniques...',
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&h=400&fit=crop&auto=format',
      author: 'Amdadul Haque',
      date: '2024-10-08',
      readTime: '9 min read',
      category: 'CSS',
      tags: ['CSS', 'Grid', 'Flexbox', 'Responsive Design'],
      featured: false
    }
  ]

  const categories = ['All', 'Web Development', 'Frontend', 'Backend', 'Programming', 'Full Stack', 'CSS']
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

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
    <section id="blog" className="py-20 bg-gray-900">
      <div className="layout">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading mb-6">Latest Articles</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge about web development, best practices, and the latest trends in technology.
          </p>
        </motion.div>

        {/* Featured Article */}
        {articles.find(article => article.featured) && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-300 group">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative overflow-hidden">
                  <img
                    src={articles[0].image}
                    alt={articles[0].title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <FaUser />
                      <span>{articles[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaCalendar />
                      <span>{formatDate(articles[0].date)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaClock />
                      <span>{articles[0].readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-heading text-white mb-4 group-hover:text-red-400 transition-colors">
                    {articles[0].title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {articles[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {articles[0].tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="bg-red-400/20 text-red-400 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <motion.button
                      className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <span>Read More</span>
                      <FaArrowRight />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Articles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {articles.slice(1).map((article, index) => (
            <motion.article
              key={article.id}
              variants={cardVariants}
              className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-gray-900/80 backdrop-blur-sm text-gray-300 px-2 py-1 rounded text-xs">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-xs text-gray-400">
                  <div className="flex items-center space-x-1">
                    <FaCalendar />
                    <span>{formatDate(article.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaClock />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-heading text-white mb-3 group-hover:text-red-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {article.tags.slice(0, 2).map(tag => (
                      <span
                        key={tag}
                        className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.button
                    className="flex items-center space-x-1 text-red-400 hover:text-red-300 transition-colors text-sm"
                    whileHover={{ x: 3 }}
                  >
                    <span>Read</span>
                    <FaArrowRight className="text-xs" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
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
          <p className="text-gray-300 mb-8">
            Want to stay updated with my latest articles and insights?
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
            />
            <motion.button
              className="w-full sm:w-auto bg-red-400 hover:bg-red-500 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { Blog }
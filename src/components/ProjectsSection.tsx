import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/motionVariants'
import { ExternalLink, Calendar, MapPin, ArrowRight } from 'lucide-react'

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const projects = [
    {
      title: 'Modern Office Complex',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A state-of-the-art office building with sustainable design features.',
      year: '2023',
      location: 'Downtown District',
      size: '50,000 sq ft',
    },
    {
      title: 'Luxury Residential Complex',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Premium residential units with modern amenities and design.',
      year: '2023',
      location: 'Riverside Heights',
      size: '120 Units',
    },
    {
      title: 'Industrial Manufacturing Facility',
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Advanced manufacturing facility with cutting-edge technology.',
      year: '2022',
      location: 'Industrial Park',
      size: '200,000 sq ft',
    },
    {
      title: 'Community Recreation Center',
      category: 'Public',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Multi-purpose community center serving local residents.',
      year: '2023',
      location: 'Central Park',
      size: '25,000 sq ft',
    },
    {
      title: 'Retail Shopping Plaza',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Modern retail space with innovative architectural design.',
      year: '2022',
      location: 'Shopping District',
      size: '75,000 sq ft',
    },
    {
      title: 'Modern Apartment Building',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Contemporary apartment complex with sustainable features.',
      year: '2023',
      location: 'Urban Center',
      size: '80 Units',
    },
  ]

  const categories = ['All', 'Commercial', 'Residential', 'Industrial', 'Public']
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <motion.section 
      id="projects" 
      className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
      variants={fadeIn('up', 0)}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.1,
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm tracking-widest rounded-full border border-primary/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            OUR PORTFOLIO
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-yellow-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of completed projects that showcase our
            expertise, quality craftsmanship, and commitment to excellence.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-primary to-yellow-400 text-black shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', index * 0.1)}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-500"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-64 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-black text-xs font-bold rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* View Project Button */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs text-gray-400">
                    <Calendar className="h-3 w-3 mr-2 text-primary" />
                    {project.year}
                  </div>
                  <div className="flex items-center text-xs text-gray-400">
                    <MapPin className="h-3 w-3 mr-2 text-primary" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-xs text-gray-400">
                    <div className="w-3 h-3 mr-2 bg-primary rounded-sm" />
                    {project.size}
                  </div>
                </div>

                {/* Learn More Link */}
                <motion.button
                  className="group/btn flex items-center text-primary font-semibold text-sm hover:text-yellow-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-yellow-400 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeIn('up', 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-primary to-yellow-400 hover:from-yellow-400 hover:to-primary text-black py-4 px-8 font-bold rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}
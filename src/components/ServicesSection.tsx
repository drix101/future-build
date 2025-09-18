import React from 'react'
import {
  Building2,
  Home,
  Warehouse,
  HardHat,
  Paintbrush,
  Ruler,
  ArrowRight,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/motionVariants'

export function ServicesSection() {
  const services = [
    {
      title: 'Residential Construction',
      description:
        'Custom home building, renovations, and additions for your dream living space.',
      icon: <Home className="h-8 w-8" />,
      features: ['Custom Homes', 'Renovations', 'Additions'],
    },
    {
      title: 'Commercial Construction',
      description:
        'Office buildings, retail spaces, and other commercial structures built to specification.',
      icon: <Building2 className="h-8 w-8" />,
      features: ['Office Buildings', 'Retail Spaces', 'Mixed-Use'],
    },
    {
      title: 'Industrial Projects',
      description:
        'Warehouses, manufacturing facilities, and other industrial structures.',
      icon: <Warehouse className="h-8 w-8" />,
      features: ['Warehouses', 'Manufacturing', 'Distribution'],
    },
    {
      title: 'Construction Management',
      description:
        'Professional oversight of projects from planning to completion.',
      icon: <HardHat className="h-8 w-8" />,
      features: ['Project Planning', 'Quality Control', 'Timeline Management'],
    },
    {
      title: 'Renovation Services',
      description:
        'Transforming existing structures with modern updates and improvements.',
      icon: <Paintbrush className="h-8 w-8" />,
      features: ['Interior Design', 'Modernization', 'Restoration'],
    },
    {
      title: 'Design & Planning',
      description:
        'Architectural design and project planning services for your construction needs.',
      icon: <Ruler className="h-8 w-8" />,
      features: ['Architectural Design', 'Engineering', 'Permits'],
    },
  ]

  return (
    <motion.section 
      id="services" 
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
      variants={fadeIn('up', 0)}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.1,
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
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
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm tracking-widest rounded-full border border-primary/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            OUR EXPERTISE
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">
              Construction Services
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-yellow-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive construction services tailored to meet your
            specific needs, delivering quality results on time and within
            budget.
          </p>
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', index * 0.1)}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 relative overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon Container */}
              <motion.div 
                className="mb-6 relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-yellow-400 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                  {service.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/20 rounded-full blur-sm group-hover:bg-primary/40 transition-colors duration-300" />
              </motion.div>

              <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-500"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIndex * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    {feature}
                  </motion.div>
                ))}
              </div>

              {/* Learn More Button */}
              <motion.button
                className="group/btn flex items-center text-primary font-semibold text-sm hover:text-primary-dark transition-colors duration-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </motion.button>

              {/* Hover Effect Border */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-yellow-400 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeIn('up', 0.3)}
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
            Start Your Project Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}

import { Star, Quote, ThumbsUp, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/motionVariants'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Michael Johnson',
      role: 'Homeowner',
      company: 'Private Residence',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      quote:
        "FUTUREBUILD Construction transformed our vision into reality. Their attention to detail and quality craftsmanship exceeded our expectations. We couldn't be happier with our new home!",
      stars: 5,
      project: 'Custom Family Home',
    },
    {
      name: 'Sarah Williams',
      role: 'Business Owner',
      company: 'Williams Enterprises',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      quote:
        'Working with FUTUREBUILD on our commercial project was a seamless experience. They were professional, communicative, and delivered on time and within budget. I highly recommend their services.',
      stars: 5,
      project: 'Office Complex',
    },
    {
      name: 'David Rodriguez',
      role: 'Property Developer',
      company: 'Rodriguez Development',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      quote:
        "As a developer, I've worked with many construction companies, but FUTUREBUILD stands out for their reliability and quality. They've become our go-to partner for all our development projects.",
      stars: 5,
      project: 'Residential Complex',
    },
  ]

  const stats = [
    { icon: <ThumbsUp className="h-6 w-6" />, value: '98%', label: 'Client Satisfaction' },
    { icon: <Award className="h-6 w-6" />, value: '500+', label: 'Happy Clients' },
    { icon: <Star className="h-6 w-6" />, value: '4.9/5', label: 'Average Rating' },
  ]

  return (
    <motion.section 
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
      variants={fadeIn('up', 0)}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.1,
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
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
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm tracking-widest rounded-full border border-primary/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            CLIENT TESTIMONIALS
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            What Our{' '}
            <span className="bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-yellow-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from our satisfied clients
            about their experiences working with FUTUREBUILD Construction.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-yellow-400 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', index * 0.2)}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 relative overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Quote Icon */}
              <motion.div
                className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <Quote className="h-12 w-12 text-primary" />
              </motion.div>

              {/* Stars */}
              <div className="flex items-center space-x-1 mb-6 relative z-10">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="h-5 w-5 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-8 italic text-lg leading-relaxed relative z-10">
                "{testimonial.quote}"
              </blockquote>

              {/* Project Info */}
              <div className="mb-6 relative z-10">
                <div className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full inline-block">
                  {testimonial.project}
                </div>
              </div>

              {/* Client Info */}
              <div className="flex items-center relative z-10">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </motion.div>
                <div>
                  <p className="font-bold text-secondary text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 font-medium">{testimonial.role}</p>
                  <p className="text-xs text-primary font-semibold">{testimonial.company}</p>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-yellow-400 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join Our Happy Clients?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Experience the FUTUREBUILD difference. Let us bring your construction vision to life with the same excellence our clients rave about.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-primary to-yellow-400 hover:from-yellow-400 hover:to-primary text-black py-4 px-8 font-bold rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project Today
              <Star className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

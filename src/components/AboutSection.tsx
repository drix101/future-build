import { CheckCircle, Award, Users, Target, Shield, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/motionVariants'

export function AboutSection() {
  const values = [
    {
      text: 'Quality craftsmanship in every project',
      icon: <Award className="h-5 w-5" />,
    },
    {
      text: 'Safety as our top priority',
      icon: <Shield className="h-5 w-5" />,
    },
    {
      text: 'Timely completion and budget adherence',
      icon: <Clock className="h-5 w-5" />,
    },
    {
      text: 'Sustainable building practices',
      icon: <Target className="h-5 w-5" />,
    },
    {
      text: 'Transparent communication',
      icon: <Users className="h-5 w-5" />,
    },
    {
      text: 'Customer satisfaction guarantee',
      icon: <CheckCircle className="h-5 w-5" />,
    },
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: '🏗️' },
    { number: '25+', label: 'Years Experience', icon: '⭐' },
    { number: '100%', label: 'Client Satisfaction', icon: '🎯' },
    { number: '50+', label: 'Expert Team', icon: '👥' },
  ]

  return (
    <motion.section 
      id="about" 
      className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
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
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
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
            ABOUT US
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Building{' '}
            <span className="bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">
              Excellence
            </span>{' '}
            Since 1998
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-yellow-400 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                Transforming Visions into Reality
              </h3>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  With over 25 years of experience, <span className="font-semibold text-primary">FUTUREBUILD Construction</span> has
                  established itself as a leader in the construction industry,
                  delivering exceptional quality and service to our clients.
                </p>
                <p>
                  Our team of skilled professionals is committed to bringing your
                  vision to life, whether it's a custom home, commercial building,
                  or industrial facility. We combine technical expertise with
                  creative solutions to overcome challenges and deliver results that
                  exceed expectations.
                </p>
                <p>
                  From the initial design phase to the final walkthrough, we
                  maintain open communication and transparency, ensuring that your
                  project progresses smoothly and efficiently.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h4 className="text-xl font-bold text-secondary mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-yellow-400 rounded-lg flex items-center justify-center mr-3">
                  <Target className="h-4 w-4 text-white" />
                </div>
                Our Core Values
              </h4>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn('up', index * 0.1)}
                    className="group flex items-start p-4 rounded-xl hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/20"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-yellow-400 rounded-lg flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <span className="text-gray-700 font-medium">{value.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Construction team"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              variants={fadeIn('up', 0.5)}
              className="absolute -bottom-8 -right-8 bg-gradient-to-br from-primary to-yellow-400 text-white p-6 rounded-2xl shadow-2xl hidden md:block"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-4xl font-bold">25+</p>
              <p className="text-lg font-medium">Years of Excellence</p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.6)}
              className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden lg:block"
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700">Active Projects</span>
              </div>
              <p className="text-2xl font-bold text-primary mt-1">15+</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Our Track Record Speaks for Itself
            </h3>
            <p className="text-gray-300 text-lg">
              Numbers that showcase our commitment to excellence
            </p>
          </div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', index * 0.1)}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

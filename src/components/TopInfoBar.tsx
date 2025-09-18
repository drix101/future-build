import {
  Phone,
  Mail,
  Facebook,
  Youtube,
  Twitter,
  Instagram,
  MapPin,
  Clock,
  Award,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motionVariants'

export function TopInfoBar() {
  const contactInfo = [
    {
      icon: <Phone className="h-4 w-4" />,
      text: '+1 (816) 000-0000',
      href: 'tel:+18160000000',
      label: 'Call us'
    },
    {
      icon: <Mail className="h-4 w-4" />,
      text: 'info@futurebuild.com',
      href: 'mailto:info@futurebuild.com',
      label: 'Email us'
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      text: 'Building City, ST 12345',
      href: '#contact',
      label: 'Our location'
    }
  ]

  const socialLinks = [
    {
      icon: <Facebook className="h-4 w-4" />,
      href: '#',
      label: 'Facebook',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Youtube className="h-4 w-4" />,
      href: '#',
      label: 'YouTube',
      color: 'hover:text-red-600'
    },
    {
      icon: <Twitter className="h-4 w-4" />,
      href: '#',
      label: 'Twitter',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Instagram className="h-4 w-4" />,
      href: '#',
      label: 'Instagram',
      color: 'hover:text-pink-600'
    }
  ]

  return (
    <motion.div 
      className="bg-gradient-to-r from-gray-900 via-black to-gray-900 w-full py-3 border-b border-primary/20 relative overflow-hidden"
      variants={fadeIn('down', 0)}
      initial="hidden"
      animate="show"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
        <div className="absolute top-0 right-1/4 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0">
          {/* Left Section - Contact Info */}
          <motion.div 
            className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="flex items-center group hover:scale-105 transition-all duration-300"
                whileHover={{ y: -1 }}
                aria-label={item.label}
              >
                <div className="bg-gradient-to-br from-primary to-yellow-400 p-2 rounded-lg group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                  <div className="text-black">
                    {item.icon}
                  </div>
                </div>
                <span className="ml-3 text-white font-medium text-sm group-hover:text-primary transition-colors duration-300">
                  {item.text}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Center Section - Badge */}
          <motion.div
            className="hidden lg:flex items-center"
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            animate="show"
          >
            <div className="flex items-center bg-gradient-to-r from-primary/20 to-yellow-400/20 px-4 py-2 rounded-full border border-primary/30">
              <Award className="h-4 w-4 text-primary mr-2" />
              <span className="text-primary font-bold text-sm">25+ Years Excellence</span>
            </div>
          </motion.div>

          {/* Right Section - Social Links & Hours */}
          <motion.div 
            className="flex items-center space-x-6"
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            animate="show"
          >
            {/* Business Hours */}
            <div className="hidden md:flex items-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-lg">
                <Clock className="h-4 w-4 text-white" />
              </div>
              <span className="ml-2 text-white font-medium text-sm">
                Mon-Fri: 8AM-5PM
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm font-medium hidden sm:block">Follow:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`text-gray-400 ${social.color} transition-all duration-300 p-2 rounded-lg hover:bg-white/10 hover:scale-110`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Border Animation */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-yellow-400 to-primary"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 2, delay: 0.5 }}
      />
    </motion.div>
  )
}

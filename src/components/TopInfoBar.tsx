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
import { motion, AnimatePresence } from 'framer-motion'
import { fadeIn } from '../utils/motionVariants'

interface TopInfoBarProps {
  isVisible: boolean
}

export function TopInfoBar({ isVisible }: TopInfoBarProps) {
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
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 w-full py-3 border-b border-primary/20 overflow-hidden z-50"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
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

              {/* Center Section - Business Hours */}
              <motion.div 
                className="flex items-center group"
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                animate="show"
              >
                <div className="bg-gradient-to-br from-primary to-yellow-400 p-2 rounded-lg group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                  <Clock className="h-4 w-4 text-black" />
                </div>
                <div className="ml-3">
                  <span className="text-white font-medium text-sm">Mon - Fri: 8:00 AM - 6:00 PM</span>
                  <div className="text-gray-400 text-xs">Saturday: 9:00 AM - 4:00 PM</div>
                </div>
              </motion.div>

              {/* Right Section - Social Links & Certification */}
              <motion.div 
                className="flex items-center gap-4"
                variants={fadeIn('left', 0.4)}
                initial="hidden"
                animate="show"
              >
                {/* Certification Badge */}
                <div className="flex items-center group">
                  <div className="bg-gradient-to-br from-primary to-yellow-400 p-2 rounded-lg group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                    <Award className="h-4 w-4 text-black" />
                  </div>
                  <span className="ml-2 text-white font-medium text-sm hidden lg:block">Licensed & Insured</span>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-2">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`text-gray-400 ${social.color} transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800`}
                      whileHover={{ scale: 1.1, y: -1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

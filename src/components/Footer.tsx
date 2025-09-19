import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/motionVariants'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <motion.footer 
      className="bg-secondary text-white relative overflow-hidden"
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 py-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8 mb-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          {/* Company Info */}
          <motion.div variants={fadeIn('up', 0.2)} className="lg:col-span-1">
            <motion.div 
              className="flex items-center mb-6 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center">
                <div className="mr-3 p-2 bg-gradient-to-br from-primary to-yellow-400 rounded-xl shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
              <svg
                width="40"
                height="40"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-md"
              >
                <path
                  d="M8 42L25 25L42 42V8L25 25L8 8V42Z"
                  fill="#000000"
                  strokeWidth="1"
                  stroke="#000000"
                />
                  </svg>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white tracking-wide">
                    FUTURE<span className="text-primary bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">BUILD</span>
                  </span>
                  <div className="text-sm text-gray-100 font-medium tracking-widest">CONSTRUCTION</div>
                </div>
              </div>
            </motion.div>
            <p className="text-gray-300 mb-3 text-md leading-relaxed max-w-md">
              Building robust lasting solutions. From concept to completion, we ensure every detail is optimized for strength and endurance, creating solutions that inspire confidence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <motion.div 
                className="flex items-center text-gray-300 group hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-yellow-400 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-4 w-4 text-black" />
                </div>
                <span>+1 (555) 123-4567</span>
              </motion.div>
              <motion.div 
                className="flex items-center text-gray-300 group hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-yellow-400 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-4 w-4 text-black" />
                </div>
                <span>info@futurebuild.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center text-gray-300 group hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-yellow-400 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-4 w-4 text-black" />
                </div>
                <span>123 Construction Way, Building City, ST 12345</span>
              </motion.div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-primary hover:to-blue-400 text-blue hover:text-blue rounded-xl flex items-center justify-center transition-all duration-300 border border-gray-600 hover:border-primary/50"
                aria-label="Facebook"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-primary hover:to-black-400 text-white hover:text-black rounded-xl flex items-center justify-center transition-all duration-300 border border-gray-600 hover:border-primary/50"
                aria-label="Twitter"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-primary hover:to-yellow-400 text-white hover:text-black rounded-xl flex items-center justify-center transition-all duration-300 border border-gray-600 hover:border-primary/50"
                aria-label="Instagram"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-primary hover:to-yellow-400 text-white hover:text-black rounded-xl flex items-center justify-center transition-all duration-300 border border-gray-600 hover:border-primary/50"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeIn('up', 0.)}>
            <h4 className="text-xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">Quick Links</span>
            </h4>
            <ul className="space-y-3">
              <li>
                <motion.a
                  href="#home"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Home
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#about"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  About Us
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#services"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Services
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#projects"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Projects
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#contact"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Contact
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeIn('up', 0.3)}>
            <h4 className="text-xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">Our Services</span>
            </h4>
            <ul className="space-y-3">
              <li>
                <motion.a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Residential Construction
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Commercial Building
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Renovation & Remodeling
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Project Management
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Consulting Services
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Business Hours */}
          <motion.div variants={fadeIn('up', 0.4)}>
            <h4 className="text-xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">Business Hours</span>
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Monday - Friday</span>
                <span className="text-primary font-semibold">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Saturday</span>
                <span className="text-primary font-semibold">9:00 AM - 3:00 PM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Sunday</span>
                <span className="text-red-400 font-semibold">Closed</span>
              </div>
            </div>
            
            {/* Emergency Contact */}
            <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-yellow-400/10 rounded-xl border border-primary/20">
              <div className="flex items-center mb-2">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span className="text-primary font-bold">24/7 Emergency</span>
              </div>
              <p className="text-gray-300 text-sm">For urgent construction emergencies, call our emergency hotline.</p>
              <p className="text-yellow-300 text-sm">Phone: +1 (816) 000-0000</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-700 pt-8"
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-yellow-400 text-center md:text-left">
                © 2025 FUTUREBUILD Construction. All rights reserved.
              </p>
              <p className="text-yellow-500 text-sm text-center md:text-left mt-1">
                Licensed, Bonded & Insured | License #FB-2025-001
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <motion.a
                href="#"
                className="text-gray-100 hover:text-primary transition-colors duration-300 text-sm"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-100 hover:text-primary transition-colors duration-300 text-sm"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
              <motion.button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-primary to-yellow-400 hover:from-yellow-400 hover:to-primary text-black p-3 rounded-xl transition-all duration-300 hover:scale-110"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

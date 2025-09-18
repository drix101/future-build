import React, { useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motionVariants'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => { 
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-md border-b border-gray-800 shadow-2xl"
      variants={fadeIn('down', 0)}
      initial="hidden"
      animate="show"
    >
      <motion.div 
        className="container mx-auto px-3 py-1 flex justify-between items-center"
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        animate="show"
      >
        <motion.div 
          className="flex items-center group cursor-pointer"
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          animate="show"
          whileHover={{ scale: 1.05 }}
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
                  d="M12.5 37.5L25 25L37.5 37.5V12.5L25 25L12.5 12.5V37.5Z"
                  fill="#000000"
                />
              </svg>
            </div>
            <div>
              <span className="text-2xl font-bold text-white tracking-wide">
                FUTURE<span className="text-primary bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">BUILD</span>
              </span>
              <div className="text-xs text-gray-400 font-medium tracking-widest">CONSTRUCTION</div>
            </div>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex items-center space-x-1"
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
        >
          {['HOME', 'ABOUT', 'SERVICES', 'PROJECTS', 'CONTACT'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-white hover:text-primary font-medium px-4 py-2 rounded-lg transition-all duration-300 group"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-yellow-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
            </motion.a>
          ))}
          
          <motion.div 
            className="ml-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#contact"
              className="bg-gradient-to-r from-primary to-yellow-400 hover:from-yellow-400 hover:to-primary text-black py-3 px-8 font-bold rounded-full flex items-center shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
            >
              GET A QUOTE
              <motion.svg
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </a>
          </motion.div>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </motion.button>
      </motion.div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.nav 
          className="md:hidden bg-gradient-to-b from-gray-900 to-black px-6 py-6 shadow-2xl border-t border-gray-800"
          variants={fadeIn('down', 0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <div className="flex flex-col space-y-4">
            {['HOME', 'ABOUT', 'SERVICES', 'PROJECTS', 'CONTACT'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300 border-l-4 border-transparent hover:border-primary"
                onClick={toggleMenu}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-primary to-yellow-400 hover:from-yellow-400 hover:to-primary text-black py-3 px-6 font-bold rounded-full text-center mt-4 shadow-lg transition-all duration-300"
              onClick={toggleMenu}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              GET A QUOTE
            </motion.a>
          </div>
        </motion.nav>
      )}
    </motion.header>
  )
}

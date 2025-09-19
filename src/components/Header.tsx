import { useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeIn } from '../utils/motionVariants'

interface HeaderProps {
  hasTopInfoBar: boolean
}

export function Header({ hasTopInfoBar }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => { 
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <motion.header 
      className={`fixed left-0 right-0 bg-black shadow-2xl overflow-hidden border-b border-gray-700 z-40 transition-all duration-300 ${
        hasTopInfoBar ? 'top-[60px]' : 'top-0'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 py-1 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center group cursor-pointer"
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
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
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-1"
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            animate="show"
          >
            {['HOME', 'ABOUT', 'SERVICES', 'PROJECTS', 'CONTACT'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-white hover:text-primary font-bold px-4 py-2 rounded-lg transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{item}</span>
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  layoutId="navbar-hover"
                />
              </motion.a>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
            onClick={toggleMenu}
            variants={fadeIn('left', 0.6)}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ 
                duration: 0.3,
                ease: "easeInOut"
              }}
            >
              <motion.nav 
                className="flex flex-col space-y-2 pb-4"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ delay: 0.1 }}
              >
                {['HOME', 'ABOUT', 'SERVICES', 'PROJECTS', 'CONTACT'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:text-primary font-medium px-4 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

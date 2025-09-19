import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motionVariants'

interface HeroSectionProps {
  hasTopInfoBar: boolean
}

export function HeroSection({ hasTopInfoBar }: HeroSectionProps) {
  return (
    <motion.section 
      id="home" 
      className="w-full h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
      variants={fadeIn('up', 0)}
      initial="hidden"
      animate="show"
    >
      {/* Background Image with Enhanced Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        variants={fadeIn('up', 0.1)}
        initial="hidden"
        animate="show"
      />
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className={`container mx-auto px-8 relative z-10 flex items-center min-h-screen transition-all duration-300 ${
        hasTopInfoBar ? 'pt-[140px] pb-32' : 'pt-[80px] pb-32'
      }`}>
        <div className="max-w-4xl">
          {/* Enhanced Typography */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary font-semibold text-sm tracking-widest rounded-full border border-primary/30 backdrop-blur-sm">
              PREMIUM CONSTRUCTION SERVICES
            </span>
          </motion.div>

          <motion.h1
            variants={textVariant(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent">
              BUILDING
            </span>{' '}
            <span className="text-white">ROBUST</span>
            <br />
            <span className="text-white">LASTING</span>{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-primary to-yellow-400 bg-clip-text text-transparent">
              SOLUTIONS
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl"
          >
            From concept to completion, we ensure every detail is optimized for
            strength and endurance, creating solutions that inspire confidence
            and stand firm for years.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <motion.a
              href="#projects"
              className="group bg-gradient-to-r from-primary to-yellow-400 hover:from-yellow-400 hover:to-primary text-black py-4 px-10 font-bold rounded-full inline-flex items-center justify-center shadow-2xl hover:shadow-primary/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              SEE OUR WORK
              <motion.svg
                className="ml-3 group-hover:translate-x-1 transition-transform duration-300"
                width="20"
                height="20"
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
            </motion.a>

            <motion.a
              href="#contact"
              className="group border-2 border-white/30 hover:border-primary text-white hover:text-primary py-4 px-10 font-bold rounded-full inline-flex items-center justify-center backdrop-blur-sm hover:bg-primary/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              GET A QUOTE
              <motion.svg
                className="ml-3 group-hover:translate-x-1 transition-transform duration-300"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </motion.section>
  )
}

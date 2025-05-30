import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'
import { profile } from '../assets'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10`}
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='flex-shrink-0'
        >
          <img
            src={profile}
            alt='profile'
            className='w-32 h-32 rounded-full object-cover border-4 border-[#915eff]'
          />
        </motion.div>

        {/* 💬 Text Section */}
        <div className='flex flex-row items-start gap-5'>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915eff]'>Vanreuth</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              A passionate Frontend Developer <br className='sm:block hidden' />
              crafting clean and interactive UIs.
            </p>
          </motion.div>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero

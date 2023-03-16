import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { ServiceCard } from './index'
import { SectionWrapper } from '../hoc'
const About = () => {
  return (
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Sobre Mim</p>
          <p className={styles.sectionHeadText}>Quem sou?</p>
        </motion.div>
        <motion.p variants={fadeIn('', '', 0.1, 1)}
          className='mt-4 text-secondary text-[17px]
          max-w-3x1 leading-[30px]'
        >
        De Mucuri - BA e tenho 27 anos, Acabo de me forma como desenvolvedor Full-Stack pela Kenzie Academy. Sou um aprendiz rápido e colaboro estreitamente com o time para criar soluções eficientes, escaláveis e fáceis de usar que resolvam problemas do mundo real. vamos trabalhar juntos para dar vida às suas ideias!. 
        </motion.p>

        <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service}/>
          ))}
        </div>
      </>
  )
}

export default SectionWrapper(About, 'about') 
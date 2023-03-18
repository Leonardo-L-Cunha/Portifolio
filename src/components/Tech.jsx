import { useState } from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { styles } from '../styles'

const Tech = () => {
  const [hoveredTechnology, setHoveredTechnology] = useState(null)

  const handleTechnologyHover = (technology) => {
    setHoveredTechnology(technology)
  }

  const handleTechnologyLeave = () => {
    setHoveredTechnology(null)
  }

  return (
    <>
      <h2 className={styles.sectionHeadText}>Tecnologias</h2>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div 
            className='w-28 h-28 relative' 
            key={technology.name} 
            onMouseEnter={() => handleTechnologyHover(technology)}
            onMouseLeave={() => handleTechnologyLeave()}
          >
            <BallCanvas icon={technology.icon}/>
            {hoveredTechnology === technology && (
              <div className="absolute top-20 left-0 w-full h-full flex items-center justify-center">
                <div className="bg-white text-black p-2 rounded-md">
                  {technology.name}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech,'')
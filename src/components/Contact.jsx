import  { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { github } from '../assets'
import { linkedin } from '../assets'


const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name:'',
    email:'',
    message: ''
  })
  const [ loading, setLoading ] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({...form,[name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_vvg05pu',
      'template_n48p05f',
      {
        from_name: form.name,
        to_name: 'Leonardo',
        from_email: form.email,
        to_email: 'leonavidareal@gmail.com',
        message: form.message
      },
      'kvQaM5aainRrYKblm'
      )
      .then(() => {
        setLoading(false)
        alert('Obrigado, eu vou retornar para você o mais rápido possível')
        
        setForm({
          name: '',
          email: '',
          message:''
        })
      },(error) => {
        setLoading(false)

        console.log(error)

        alert('Algo deu errado')
      } )
  }
  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl mt-16'
      >
        <p className={styles.sectionSubText}>Entre em contato</p>
        <h3 className={styles.sectionHeadText}>Contato.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label htmlFor="" className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Seu nome</span>
            <input 
            type='text' 
            name='name' 
            value={form.name}  
            onChange={handleChange}
            placeholder='Qual e seu nome ?'
            className='bg-tertiary py-4 px-6  placeholder:text-secondary
            text-white rounded-lg outlined-none
            border-none  font-medium'
            />
          </label>
          <label htmlFor='' className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Seu Email</span>
            <input 
            type='email' 
            name='email' 
            value={form.email}  
            onChange={handleChange}
            placeholder='Qual e seu email ?'
            className='bg-tertiary py-4 px-6  placeholder:text-secondary
            text-white rounded-lg outlined-none
            border-none  font-medium'
            />
          </label>
          <label htmlFor='' className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Sua messagem</span>
            <textarea 
            rows='7'
            name='message' 
            value={form.message}  
            onChange={handleChange}
            placeholder='O que você quer dizer ?'
            className='bg-tertiary py-4 px-6  placeholder:text-secondary
            text-white rounded-lg outlined-none
            border-none  font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit
            text-white font-bold shadow-md shadow-primary rounded-x1'
          >
            {loading ? 'Enviando' : 'Enviar'}
          </button>
        </form>      
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='x1:flex-1 x1:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
        <div className='flex justify-center gap-10'>
        <a href="https://www.linkedin.com/in/leonardo-l-cunha-36b299246/" target='_blank'><img src={linkedin} alt="Linkedin" className='w-[40px] h-[40px]'/></a>
        <a href="https://github.com/Leonardo-L-Cunha" target='_blank'><img src={github} alt="Github" className='w-[40px] h-[40px]' /></a>
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
import  { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { github } from '../assets'
import { linkedin } from '../assets'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { yupResolver} from '@hookform/resolvers/yup'

const Contact = () => {
  const formRef = useRef()

  const echema = yup.object().shape({
    name: yup.string().required('Nome obrigatorio').min(3, 'Minimo 3 caracteres'),
    email: yup.string().required('Email Obrigatorio').email('Email invadilo'),
    message: yup.string().required('Mensagem Obrigatoria')

  })
  
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(echema)
  })
  const [ loading, setLoading ] = useState(false)

  
  const onSubmit = (data) => {
    
    setLoading(true)

    emailjs.send(
      'service_vvg05pu',
      'template_n48p05f',
      {
        from_name: data.name,
        to_name: 'Leonardo',
        from_email: data.email,
        to_email: 'leonavidareal@gmail.com',
        message: data.message
      },
      'kvQaM5aainRrYKblm'
      )
      .then(() => {
        setLoading(false)
        toast.success('Obrigado, eu vou retornar para você o mais rápido possível')
        
      },(error) => {
        setLoading(false)

        console.log(error)

        toast.error('Algo deu errado')
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
          onSubmit={handleSubmit(onSubmit)}
          className='mt-12 flex flex-col gap-8'
        >
          <label htmlFor="" className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Seu nome</span>
            <input 
            type='text' 
            name='name' 
            {...register('name')}
            placeholder='Qual e seu nome ?'
            className='bg-tertiary py-4 px-6  placeholder:text-secondary
            text-white rounded-lg outlined-none
            border-none  font-medium'
            />
            {errors.name?.message && <span className='text-xs text-red-700' >{errors.name.message}</span>} 
          </label>
          <label htmlFor='' className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Seu Email</span>
            <input 
            type='text' 
            name='email' 
            {...register('email')}
            placeholder='Qual e seu email ?'
            className='bg-tertiary py-4 px-6  placeholder:text-secondary
            text-white rounded-lg outlined-none
            border-none  font-medium'
            />
            {errors.email?.message && <span className='text-xs text-red-700'>{errors.email.message}</span>} 
          </label>
          <label htmlFor='' className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Sua mensagem</span>
            <textarea 
            rows='7'
            name='message' 
            {...register('message')}
            placeholder='O que você quer dizer ?'
            className='bg-tertiary py-4 px-6  placeholder:text-secondary
            text-white rounded-lg outlined-none
            border-none  font-medium'
            />
            {errors.message?.message && <span className='text-xs text-red-700'>{errors.message.message}</span>} 
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
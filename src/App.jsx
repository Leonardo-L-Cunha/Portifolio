import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Main, Navbar, About, Tech, Works, Contact, StarsCanvas } from './components'
const  App = () => {
  return (
    <BrowserRouter>
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
      <div className='realtive z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar/>
            <Main/>
        </div>
        <About/>
        <Tech/>
        <Works/>
        <div className='relative z-0'>
            <Contact/>
            <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  ) 
}

export default App

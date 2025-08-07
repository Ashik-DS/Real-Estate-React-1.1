import React from 'react'

import Header from './component/Header';
import Navbar from './component/Navbar';
import About from './component/About';
import Projects from './component/Projects';
import Testimonials from './component/Testimonials';
import Contact from './component/Contact';

  import { ToastContainer} from 'react-toastify';
import Footer from './component/Footer';


import AOS from 'aos';

const App = () => {
  return (
    <div>

     <ToastContainer />
     <Navbar />
    <Header />
    <About />
    <Projects />
    <Testimonials />
    <Contact />
    <Footer />
   
    </div>
  )
}

export default App

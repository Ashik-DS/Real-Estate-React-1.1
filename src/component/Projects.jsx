import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {

    const [currentIndex, setcurrentIndex]=useState(0)
    const [cardShow, setcardShow]=useState(1)

    useEffect(()=>{
      const updateCardShow=()=>{

        if (window.innerWidth>=1024) {
          
          setcardShow(projectsData.length)
          
        }else{
          setcardShow(1)
        }

        };
        updateCardShow();

        window.addEventListener('resize',updateCardShow)
        return()=> window.removeEventListener('resize', updateCardShow)
      
    },[])

const nextProject=()=>{
    setcurrentIndex((prevIndex)=> (prevIndex+1) % projectsData.length)
}

const prevProject =()=>{
    setcurrentIndex((prevIndex)=> prevIndex===0 ? projectsData.length-1 : prevIndex-1 )
}


  return (
    <div className=' container mx-auto py-4 px-6 pt-20 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
      
      <h1 data-aos="zoom-in" className=' text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className=' underline  underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
      <p data-aos="zoom-in" className=' text-center text-gray-600 mb-8 max-w-80 mx-auto'> Crafting Spaces, Building Legacies-Explore Our Portfolio</p>

      {/* -----------slider button ---------- */}

      <div className=' flex justify-end items-center mb-8'>
        <button onClick={prevProject}
        className=' p-3 bg-gray-200 rounded mr-2'> <img src={assets.left_arrow} alt="Previous" /></button>

        <button onClick={nextProject}
        className=' p-3 bg-gray-200 rounded mr-2'> <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

     {/* --- Project Slider Containers---- */}


     <div data-aos="fade-left" className=' overflow-hidden'>
        <div className=' flex gap-8 transition-transform duration-500 ease-in-out  '
        style={{ transform: `translateX(-${(currentIndex*100)/cardShow}%)` }}
        >
            {projectsData.map((project,index)=>(
                <div key={index} className=' relative flex-shrink-0  w-full sm:w-1/4 '>
                    <img src={project.image} alt={project.title} className=' w-full h-auto mb-14'/>

                    <div className=' absolute left-0 right-5 bottom-5 flex justify-center' >
                        <div className=' inline-block bg-white w-3/4 px-2 py-3 shadow-md'> 
                         <h2 className=' text-xl font-semibold text-gray-800'>{project.title}</h2>
                         <p className=' text-gray-500 text-sm'> 
                            {project.price}
                            <span></span>
                            {project.location}
                         </p>

                        </div>


                    </div>
                </div>
            ))}
        </div>
     </div>






    </div>
  )
}

export default Projects

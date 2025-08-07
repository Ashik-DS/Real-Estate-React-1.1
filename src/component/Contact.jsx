import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => {

 const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target); 

    formData.append("access_key", "4c897618-c2f2-4bc5-bc97-31feb504c56d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");

    }
  };
    

  return (
    <div className=' text-center p-6 py-20 lg:px-32 w-full overflow-hidden ' id='Contact'>

        <h1 className=' text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact<span className=' underline underline-offset-4 decoration-1 under font-light  inline-block ml-2'>With Us</span></h1>

      <p className=' text-center  text-gray-500 mb-12 max-w-80 mx-auto'> Ready to make a Move? Let's Build Your Future Together </p>

      <form data-aos="zoom-in" onSubmit={onSubmit} className=' max-w-2xl mx-auto text-gray-600 pt-8'>

        <div className=' flex flex-wrap'>
            <div className=' w-full md:w-1/2 text-left'>Your Name : 
            <input className=' w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" placeholder='Type Your Name' required name='Name'/>
            </div>

            <div className=' w-full md:w-1/2 text-left md: pl-4'>Your Email : 
            <input className=' w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" placeholder='Type Your Email' required name='Email'/>
    
            </div>
        </div>
        <div className=' my-6 text-left'>
            Message : 
            <textarea className=' w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
             name="Message" placeholder=' Type Your Message' required></textarea>
        </div>

        <button type='submit' className=' bg-blue-600 text-white py-2 px-12 mb-10 rounded hover:bg-transparent hover:border-blue-600 hover:border  hover:text-blue-600 transition-all' >{result? result : "send Message."}</button>
      </form>





       
    </div>
  )
}

export default Contact

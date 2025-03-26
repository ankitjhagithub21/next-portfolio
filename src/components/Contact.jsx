'use client'
import { useState, useRef } from 'react';
import toast from 'react-hot-toast';
import { IoIosSend } from "react-icons/io";
const Contact = () => {

  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    
    setLoading(true);
    const toastId = toast.loading('Sending message...');
    
    // Use Formspree's API
    const formData = new FormData(form.current);
    
    fetch('https://formspree.io/f/mldrqbyj', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    })
    .then((response) => {
      if (response.ok) {
        toast.dismiss(toastId);  // Dismiss loading toast
        toast.success('Message sent successfully!');
        form.current.reset();  // Reset the form
      } else {
        throw new Error('Failed to send message.');
      }
    })
    .catch((error) => {
      toast.dismiss(toastId);  // Dismiss loading toast
      toast.error('Failed to send message...');
    })
    .finally(() => {
      setLoading(false);
    });
  };
  
 const className = "border-b outline-none  border-gray-500 p-2"
  return (
    
      <div className="max-w-xl w-full p-5">
       
        <form ref={form} className='flex flex-col  gap-8' onSubmit={sendEmail}>
       
          <h2 className='text-3xl font-serif tracking-wider'>Get In Touch</h2>
            <input type="text" id="name" name="name" className={className} placeholder='Enter your name' required autoComplete='off'/>
         
            <input type="email" id="email" name="email" placeholder='Enter your email' className={className} required autoComplete='off'/>
         
            <textarea id="message" name="message" placeholder='Enter your message' className= {`${className} resize-none`} rows="5" required ></textarea>
          
          <div className='text-right mt-4'>
          <button type="submit" disabled={loading} className='border bg-gray-800 hover:bg-gray-900 shadow-xl text-white cursor-pointer border-gray-500 px-4 py-2'>
            {loading ? 'Sending...' : <p className='flex items-center   justify-center gap-2'>
            <span className='text-lg'>Send Message</span> <IoIosSend size={20}/>
            </p>}

          </button>
          </div>
        </form>
      </div>
    
  );
}

export default Contact;

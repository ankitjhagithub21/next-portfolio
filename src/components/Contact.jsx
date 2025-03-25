'use client'
import { useState, useRef } from 'react';
import toast from 'react-hot-toast';

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

  return (
    
      <div className="max-w-xl w-full p-5">
       
        <form ref={form} className='flex flex-col  gap-5' onSubmit={sendEmail}>
       
          <h2 className='text-2xl '>Get In Touch</h2>
            <input type="text" id="name" name="name" placeholder='Enter your name' className='border rounded-lg border-gray-500 p-2' required autoComplete='off'/>
         
            <input type="email" id="email" name="email" placeholder='Enter your email' className='border rounded-lg border-gray-500 p-2' required autoComplete='off'/>
         
            <textarea id="message" name="message" placeholder='Enter your message' className='border rounded-lg border-gray-500 p-2 resize-none' rows="5" required ></textarea>
          
          <button type="submit" disabled={loading} className='bg-green-500 hover:bg-green-600 text-white rounded-lg cursor-pointer px-4 py-2'>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    
  );
}

export default Contact;
